import React from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'native-base';
import Current from './Current';
import Today from './Today';
import {ThemeText} from '../../constants';

const Forecast = ({
  DailyActive,
  CurrentData,
  RiseSetData,
  Forecast,
  ForecastFuture,
}) => {
  const styles = StyleSheet.create({
    card: {
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 25,
    },
    dateText: {
      marginBottom: 10,
      fontSize: 20,
      fontWeight: '400',
    },
    header: {
      width: '100%',
      flexDirection: 'row',
    },
    headerIconView: {
      paddingLeft: 10,
      flex: 1,
    },
    headerIcon: {
      fontSize: 40,
      color: 'gray',
    },
    headerTextView: {
      flex: 5,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'flex-start',
    },
    temperatureText: {
      minWidth: '0%',
      paddingTop: 3,
      paddingRight: 15,
      flex: 1,
      fontSize: 28,
      fontWeight: '700',
      textAlign: 'right',
      color: ThemeText,
    },
    conditionText: {
      maxWidth: '71%',
      paddingTop: 8,
      paddingRight: 30,
      fontSize: 22,
      fontWeight: '600',
      textAlign: 'left',
      color: ThemeText,
    },
    moreView: {
      flexDirection: 'row',
    },
  });

  const forecast = DailyActive ? (
    <View>
      <Current CurrentData={CurrentData} />
      <Today Forecast={Forecast} />
    </View>
  ) : null;

  return forecast;
};

export default Forecast;
