import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text} from 'native-base';
import {ParseTime} from '../helpers/Helpers';
import {HourlyBackup, ThemeText} from '../../constants';

const Hourly = ({DailyActive, Data}) => {
  const styles = StyleSheet.create({
    text: {},
  });

  const hourly = DailyActive ? null : (
    <View>
      {Data.map((data, index) => {
        return (
          <Text style={styles.text} key={index}>
            Time: {ParseTime(data.$.dateTimeUTC)}
            Icon: {data.iconCode[0]._}
            Temperature: {data.temperature[0]._}
            Condition: {data.condition}
          </Text>
        );
      })}
    </View>
  );

  return hourly;
};

export default Hourly;
