import {Dimensions} from 'react-native';

export const DeviceWidth = Dimensions.get('window').width;
export const DeviceHeight = Dimensions.get('window').height;

export const ThemeBackgroundLight = '#f9f9f9';
export const ThemeBackground = '#dadada';
export const ThemeText = '#1660a0';

export const WeatherSource =
  'https://dd.weather.gc.ca/citypage_weather/xml/BC/s0000141_e.xml';

export const HourlyBackup =
  'https://weather.gc.ca/forecast/hourly/bc-74_metric_e.html';
