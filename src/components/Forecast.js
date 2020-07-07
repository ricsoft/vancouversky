import React from 'react';
import {Switch, StyleSheet} from 'react-native';
import {View, Text} from 'native-base';
import {ThemeText, ThemeBackgroundLight} from '../../constants';
import Current from './Current';
import Today from './Today';
import Tomorrows from './Tomorrows';

const Forecast = ({
  DetailsEnabled,
  setDetailsEnabled,
  DailyActive,
  CurrentData,
  RiseSetData,
  ForecastData,
  ForecastFuture,
}) => {
  const styles = StyleSheet.create({
    switch: {
      marginTop: 30,
      marginLeft: 15,
      marginRight: 15,
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    text: {
      marginRight: 5,
      color: ThemeText,
      fontWeight: '600',
    },
  });

  const forecast = DailyActive ? (
    <View>
      <View style={styles.switch}>
        <Text style={styles.text}>More</Text>
        <Switch
          onValueChange={() => setDetailsEnabled(!DetailsEnabled)}
          trackColor={{false: 'dimgrey', true: 'cornflowerblue'}}
          thumbColor={DetailsEnabled ? ThemeText : ThemeText}
          value={DetailsEnabled}
        />
      </View>
      <Current
        DetailsEnabled={DetailsEnabled}
        CurrentData={CurrentData}
        RiseSetData={RiseSetData}
      />
      <Today DetailsEnabled={DetailsEnabled} ForecastData={ForecastData} />
      <Tomorrows DetailsEnabled={DetailsEnabled} Forecasts={ForecastFuture} />
    </View>
  ) : null;

  return forecast;
};

export default Forecast;
