package com.vancouversky;

import android.appwidget.AppWidgetManager;
import android.content.SharedPreferences;
import android.graphics.Color;
import android.os.AsyncTask;
import android.content.Context;
import android.widget.RemoteViews;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.lang.ref.WeakReference;
import java.net.URL;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.net.ssl.HttpsURLConnection;

public class UpdateWeather extends AsyncTask<Void, Void, String> {
    private WeakReference<Context> contextRef;
    private AppWidgetManager appWidgetManager;
    private int[] appWidgetIds;
    private static String colorKey;

    public UpdateWeather(Context _context, AppWidgetManager appWidgetManager, int[] appWidgetIds){
        contextRef = new WeakReference<>(_context);
        this.appWidgetManager = appWidgetManager;
        this.appWidgetIds = appWidgetIds;
    }

    @Override
    protected String doInBackground(Void... params) {
        Context context = contextRef.get();
        String currentWeather, inputLine, htmlCode="";
        String MyPREFERENCES = "Preferences";
        String vanUrl = "https://weather.gc.ca/wxlink/site_js/s0000141_e.js";

        //get configuration from shared pref
        SharedPreferences sharedPreferences = context.getSharedPreferences(MyPREFERENCES, context.MODE_PRIVATE);
        colorKey = sharedPreferences.getString("colorKey", "White");

        try {
            URL url = new URL(vanUrl);

            //get data from web and store in a string
            HttpsURLConnection urlConnection = (HttpsURLConnection) url.openConnection();
            BufferedReader in = new BufferedReader(new InputStreamReader(url.openStream()));

            StringBuilder sb = new StringBuilder();

            while ((inputLine = in.readLine()) != null) {
                sb.append(inputLine);
                sb.append(System.getProperty("line.separator"));
            }

            htmlCode = sb.toString();

            urlConnection.disconnect();
        } catch (Exception e) { }

        //parse the string
        currentWeather = parseHTML(htmlCode);

        return currentWeather;
    }

    @Override
    protected void onPostExecute(String result){
        Context context = contextRef.get();
        RemoteViews views = new RemoteViews(context.getPackageName(), R.layout.widget);

        String[] results = result.split(" ", 2);
        views.setTextViewText(R.id.appwidget_number, results[0]);
        views.setTextViewText(R.id.appwidget_text, results[1]);

        if (colorKey.equals("White")) {
            views.setTextColor(R.id.appwidget_text, Color.parseColor("#F8F8FF"));
        }
        else {
            views.setTextColor(R.id.appwidget_text, Color.parseColor("#212121"));
        }

        for (int appWidgetId : appWidgetIds) {
            appWidgetManager.updateAppWidget(appWidgetId, views);
        }
    }

    private String parseHTML(String htmlCode) {
        try {
            Pattern p = Pattern.compile("var obTemperature = \"[-\\d]+\"|var obCondition = \"[\\w\\s]+\"");
            Pattern n = Pattern.compile("[-\\d]+");
            Pattern t = Pattern.compile("(?<=\")[\\w\\s]+(?=\")");

            Matcher m = p.matcher(htmlCode);
            m.find();
            //store the current weather degree number
            String num = m.group();
            m.find();
            //store the current weather description
            String text = m.group();
            //get rid of extra characters in the number and description
            m = n.matcher(num);
            m.find();
            num = m.group();
            m = t.matcher(text);
            m.find();
            text = m.group();

            return num + " " + text;
        } catch (Exception e) { }

        return "";
    }
}