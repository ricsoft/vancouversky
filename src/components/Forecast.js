import React from 'react';
import {View} from 'native-base';
import Current from './Current';
import Today from './Today';
import Tomorrows from './Tomorrows';

const Forecast = ({
  DailyActive,
  CurrentData,
  RiseSetData,
  ForecastData,
  ForecastFuture,
}) => {
  const forecast = DailyActive ? (
    <View>
      <Current CurrentData={CurrentData} />
      <Today ForecastData={ForecastData} />
      <Tomorrows Forecasts={ForecastFuture} />
    </View>
  ) : null;

  return forecast;
};

export default Forecast;
