import {parseString} from 'react-native-xml2js';
import {WeatherSource} from '../../constants';

export const FetchData = () => {
  fetch(WeatherSource)
    .then(response => response.text())
    .then(response => {
      parseString(response, (err, result) => {
        console.log(JSON.stringify(result));
        if (err) {
          console.log('xml2js', err);
        }
      });
    })
    .catch(err => {
      console.log('fetch', err);
    });

  return false;
};
