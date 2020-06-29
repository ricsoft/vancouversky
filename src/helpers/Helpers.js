import {parseString} from 'react-native-xml2js';
import {WeatherSource} from '../../constants';

export async function FetchData() {
  await fetch(WeatherSource)
    .then(response => response.text())
    .then(response => {
      parseString(response, (err, result) => {
        if (err) {
          console.log('xml2js', err);
        }

        let riseSet = {
          sunrise: result.siteData.riseSet[0].dateTime[1],
          sunset: result.siteData.riseSet[0].dateTime[3],
        };

        let current = {
          icon: parseInt(
            result.siteData.currentConditions[0].iconCode[0]._,
            10,
          ),
          temperature: result.siteData.currentConditions[0].temperature[0]._,
          condition: result.siteData.currentConditions[0].condition[0],
          wind: {
            speed: result.siteData.currentConditions[0].wind[0].speed[0]._,
            direction:
              result.siteData.currentConditions[0].wind[0].direction[0],
          },
        };

        let hourly = result.siteData.hourlyForecastGroup[0].hourlyForecast.slice(
          0,
          12,
        );

        let forecast = result.siteData.forecastGroup[0].forecast;

        let data = {
          riseSet: riseSet,
          current: current,
          hourly: hourly,
          forecast: forecast,
        };

        return data;
      });
    })
    .catch(err => {
      console.log('fetch', err);
    });
}
