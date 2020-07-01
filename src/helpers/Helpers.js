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
  });
};

export const ParseData = data => {
  let riseSet = {
    sunrise: data.siteData.riseSet[0].dateTime[1],
    sunset: data.siteData.riseSet[0].dateTime[3],
  };

  return riseSet;
};

// export async function OLDFetchData() {
//   let data = await fetch(WeatherSource)
//     .then(response => response.text())
//     .then(response => {
//       parseString(response, (err, result) => {
//         if (err) {
//           console.log('xml2js', err);
//         }

//         let riseSet = {
//           sunrise: result.siteData.riseSet[0].dateTime[1],
//           sunset: result.siteData.riseSet[0].dateTime[3],
//         };

//         let current = {
//           icon: parseInt(
//             result.siteData.currentConditions[0].iconCode[0]._,
//             10,
//           ),
//           temperature: result.siteData.currentConditions[0].temperature[0]._,
//           condition: result.siteData.currentConditions[0].condition[0],
//           wind: {
//             speed: result.siteData.currentConditions[0].wind[0].speed[0]._,
//             direction:
//               result.siteData.currentConditions[0].wind[0].direction[0],
//           },
//         };

//         let hourly;
//         try {
//           hourly = result.siteData.hourlyForecastGroup[0].hourlyForecast.slice(
//             0,
//             12,
//           );
//         } catch {
//           hourly = {};
//         }

//         let forecast = result.siteData.forecastGroup[0].forecast;

//         let weatherObj = {
//           riseSet: riseSet,
//           current: current,
//           hourly: hourly,
//           forecast: forecast,
//         };
//         return weatherObj;
//       });
//     })
//     .catch(err => {
//       console.log('fetch', err);
//     });

//   return data;
// }
