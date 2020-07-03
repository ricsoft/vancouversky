import {WeatherSource} from '../../constants';
import {parseString} from 'react-native-xml2js';

export const FetchData = async (setLoading, setData) => {
  let data = await fetch(WeatherSource)
    .then(response => response.text())
    .then(text => {
      return text;
    });

  await parseString(data, function(err, result) {
    if (err) {
    }
    setData(ParseData(result));
    setLoading(false);
    console.log('FETCHED');
  });
};

export const ParseData = data => {
  let riseSet = {
    sunrise: data.siteData.riseSet[0].dateTime[1],
    sunset: data.siteData.riseSet[0].dateTime[3],
  };

  let current = {
    icon: parseInt(data.siteData.currentConditions[0].iconCode[0]._, 10),
    temperature: parseInt(
      data.siteData.currentConditions[0].temperature[0]._,
      10,
    ).toString(),
    condition: data.siteData.currentConditions[0].condition[0],
    wind: {
      speed: data.siteData.currentConditions[0].wind[0].speed[0]._,
      direction: data.siteData.currentConditions[0].wind[0].direction[0],
    },
  };

  let hourly;
  try {
    hourly = data.siteData.hourlyForecastGroup[0].hourlyForecast.slice(0, 12);
  } catch {
    hourly = {};
  }

  let {forecast, forecastFuture} = ParseForecast(
    data.siteData.forecastGroup[0].forecast,
  );

  let parsedData = {
    riseSet: riseSet,
    current: current,
    hourly: hourly,
    forecast: forecast,
    forecastFuture: forecastFuture,
  };

  return parsedData;
};

export const ParseTime = time => {
  time = time.slice(-4);
  let newTime = parseInt(time, 10);
  let m = ' AM';

  // To 12 hr Pacific
  if (newTime > 1200) {
    newTime -= 1200;
    m = ' PM';
    if (newTime > 700) {
      newTime -= 700;
    }
  } else if (newTime === 0) {
    newTime = 500;
  } else if (newTime < 700) {
    newTime += 500;
    m = ' PM';
  } else if (newTime === 700) {
    newTime = 1200;
  } else {
    newTime -= 700;
  }

  let newTimeStr = newTime.toString();
  newTimeStr = newTimeStr.substring(0, newTimeStr.length - 2);

  return newTimeStr + m;
};

export const ExitMenu = setMenuActive => {
  setMenuActive(false);
};

const ParseForecast = Data => {
  let now = [];
  let later = [];
  let skip = false;
  let todayTonightCount = 0;

  Data.map((data, index) => {
    // If this object was already added then don't process again
    if (!skip) {
      if (
        (todayTonightCount < 2 &&
          data.period[0].$.textForecastName === 'Today') ||
        data.period[0].$.textForecastName === 'Tonight'
      ) {
        // The data is for today's forecast
        now.push(data);
        todayTonightCount++;
      } else {
        if (Data[index + 1]) {
          try {
            if (
              data.period[0].$.textForecastName.substring(0, 3) ===
              Data[index + 1].period[0].$.textForecastName.substring(0, 3)
            ) {
              // The data belongs to one day
              later.push([data, Data[index + 1]]);
              // Don't process the object just added in the next loop
              skip = true;
            }
          } catch (err) {}
        } else {
          later.push([data]);
        }
      }
    } else {
      skip = false;
    }
  });

  return {
    forecast: now,
    forecastFuture: later,
  };
};
