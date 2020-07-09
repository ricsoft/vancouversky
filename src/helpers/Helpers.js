import {WeatherSource} from '../../constants';
import {parseString} from 'react-native-xml2js';
import {
  SunColor,
  MoonColor,
  RainColor,
  SnowColor,
  CloudColor,
  UnknownColor,
} from '../../constants';

export const FetchData = async (setLoading, setData, setError) => {
  let data = await fetch(WeatherSource)
    .then(response => response.text())
    .then(text => {
      return text;
    })
    .catch(err => {
      setError({msg: 'Weather Data Unavailable', error: err});
      return false;
    });

  if (!data) {
    setError({msg: 'Weather Data Unavailable', error: ''});
  }

  await parseString(data, function(err, result) {
    if (err) {
      setError({msg: 'Weather Data Unparseable', error: err});
      return false;
    }

    setData(ParseData(result));

    setLoading(false);
  });
};

export const GetColor = async (setSelectedColor, setLoading) => {
  const SharedPreferences = require('react-native-shared-preferences');
  SharedPreferences.setName('Preferences');

  getColor(SharedPreferences)
    .then(color => setSelectedColor(color))
    .then(setLoading(false));
};

export const SaveColor = SelectedColor => {
  const SharedPreferences = require('react-native-shared-preferences');
  SharedPreferences.setName('Preferences');
  SharedPreferences.setItem('colorKey', SelectedColor);
};

let getColor = SharedPreferences => {
  return new Promise(resolve =>
    SharedPreferences.getItem('colorKey', color => {
      resolve(color);
    }),
  );
};

const ParseData = data => {
  let riseSet = data.siteData.riseSet[0]
    ? {
        sunrise: data.siteData.riseSet[0].dateTime[1]
          ? data.siteData.riseSet[0].dateTime[1]
          : null,
        sunset: data.siteData.riseSet[0].dateTime[3]
          ? data.siteData.riseSet[0].dateTime[3]
          : null,
      }
    : null;

  let current = data.siteData.currentConditions[0]
    ? {
        icon: data.siteData.currentConditions[0].iconCode[0]
          ? ParseIcon(
              parseInt(data.siteData.currentConditions[0].iconCode[0]._, 10),
            )
          : '',
        temperature: data.siteData.currentConditions[0].temperature[0]
          ? parseInt(
              data.siteData.currentConditions[0].temperature[0]._,
              10,
            ).toString()
          : '',
        condition: data.siteData.currentConditions[0].condition[0]
          ? data.siteData.currentConditions[0].condition[0]
          : '',
        humidity: data.siteData.currentConditions[0].relativeHumidity[0]
          ? data.siteData.currentConditions[0].relativeHumidity[0]._
          : '',
        wind: data.siteData.currentConditions[0].wind[0]
          ? {
              speed: data.siteData.currentConditions[0].wind[0].speed[0]._,
              direction:
                data.siteData.currentConditions[0].wind[0].direction[0],
            }
          : null,
      }
    : null;

  let hourly = data.siteData.hourlyForecastGroup[0].hourlyForecast[0]
    ? ParseHourly(data.siteData.hourlyForecastGroup[0].hourlyForecast)
    : null;

  let {forecast, forecastFuture} = data.siteData.forecastGroup[0].forecast
    ? ParseForecast(data.siteData.forecastGroup[0].forecast)
    : null;

  let parsedData = {
    riseSet: riseSet,
    current: current,
    hourly: hourly,
    forecast: forecast,
    forecastFuture: forecastFuture,
  };

  return parsedData;
};

const ParseTime = time => {
  time = time.slice(-4);
  let newTime = parseInt(time, 10);
  let m = ' AM';

  // To 12 hr Pacific
  if (newTime > 1200) {
    newTime -= 700;
    if (newTime >= 1200) {
      m = ' PM';
    }
    if (newTime > 1200) {
      newTime -= 1200;
    }
  } else if (newTime === 0) {
    newTime = 500;
    m = ' PM';
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

const ParseIcon = (numStr, onlyColor = false) => {
  let num;

  let returnUnknown = () => {
    if (onlyColor) {
      return UnknownColor;
    }

    return {name: 'help-circle', color: UnknownColor};
  };

  try {
    num = parseInt(numStr, 10);
  } catch {
    return returnUnknown();
  }

  if ((num >= 0 && num < 6) || num === 22) {
    if (onlyColor) {
      return SunColor;
    }

    return {iconName: 'sunny', iconColor: SunColor};
  } else if (
    num === 6 ||
    num === 9 ||
    (num >= 11 && num < 15) ||
    num === 19 ||
    (num >= 27 && num < 29) ||
    (num >= 36 && num < 38) ||
    num === 39 ||
    (num >= 41 && num < 44) ||
    (num >= 46 && num < 49)
  ) {
    if (onlyColor) {
      return RainColor;
    }

    return {iconName: 'rainy', iconColor: RainColor};
  } else if (
    (num >= 7 && num < 9) ||
    (num >= 15 && num < 19) ||
    (num >= 25 && num < 27) ||
    num === 38 ||
    num === 40
  ) {
    if (onlyColor) {
      return SnowColor;
    }

    return {iconName: 'snow', iconColor: SnowColor};
  } else if (
    num === 10 ||
    (num >= 20 && num < 22) ||
    (num >= 23 && num < 25) ||
    (num >= 44 && num < 46)
  ) {
    if (onlyColor) {
      return CloudColor;
    }

    return {iconName: 'cloud', iconColor: CloudColor};
  } else if (num >= 30 && num < 36) {
    if (onlyColor) {
      return MoonColor;
    }

    return {iconName: 'moon', iconColor: MoonColor};
  } else {
    return returnUnknown();
  }
};

export const ExitMenu = setMenuActive => {
  setMenuActive(false);
};

const ParseHourly = Data => {
  let hourlyArr = [];
  let onlyColor = true;

  Data.map(data =>
    hourlyArr.push({
      time: ParseTime(data.$.dateTimeUTC),
      iconColor: ParseIcon(data.iconCode[0]._, onlyColor),
      temperature: data.temperature[0]._,
      condition: data.condition[0],
    }),
  );

  return hourlyArr;
};

const ParseForecast = Data => {
  let now = [];
  let later = [];
  let skip = false;
  let todayTonightCount = 0;

  try {
    Data.map((data, index) => {
      // If this object was already added then don't process again
      if (!skip) {
        if (
          (todayTonightCount < 2 &&
            data.period[0].$.textForecastName === 'Today') ||
          data.period[0].$.textForecastName === 'Tonight'
        ) {
          // The data is for today's forecast
          now.push({
            forecastName: data.period[0].$.textForecastName,
            icon: ParseIcon(data.abbreviatedForecast[0].iconCode[0]._),
            temperature: data.temperatures[0].temperature[0]._,
            condition: data.abbreviatedForecast[0].textSummary[0],
            summary: data.textSummary[0],
          });

          todayTonightCount++;
        } else {
          if (Data[index + 1]) {
            try {
              if (
                data.period[0].$.textForecastName.substring(0, 3) ===
                Data[index + 1].period[0].$.textForecastName.substring(0, 3)
              ) {
                // The data belongs to one day
                later.push([
                  {
                    forecastName: data.period[0].$.textForecastName,
                    icon: ParseIcon(
                      parseInt(data.abbreviatedForecast[0].iconCode[0]._, 10),
                    ),
                    temperature: data.temperatures[0].temperature[0]._,
                    condition: data.abbreviatedForecast[0].textSummary[0],
                    summary: data.textSummary[0],
                  },
                  {
                    forecastName: Data[index + 1].period[0].$.textForecastName,
                    icon: ParseIcon(
                      parseInt(
                        Data[index + 1].abbreviatedForecast[0].iconCode[0]._,
                        10,
                      ),
                    ),
                    temperature:
                      Data[index + 1].temperatures[0].temperature[0]._,
                    condition:
                      Data[index + 1].abbreviatedForecast[0].textSummary[0],
                    summary: Data[index + 1].textSummary[0],
                  },
                ]);
                // Don't process the object just added in the next loop
                skip = true;
              }
            } catch (err) {}
          } else {
            later.push([
              {
                forecastName: data.period[0].$.textForecastName,
                icon: ParseIcon(
                  parseInt(data.abbreviatedForecast[0].iconCode[0]._, 10),
                ),
                temperature: data.temperatures[0].temperature[0]._,
                condition: data.abbreviatedForecast[0].textSummary[0],
                summary: data.textSummary[0],
              },
            ]);
          }
        }
      } else {
        skip = false;
      }
    });
  } catch {
    return {
      forecast: null,
      forecastFuture: null,
    };
  }

  return {
    forecast: now,
    forecastFuture: later,
  };
};
