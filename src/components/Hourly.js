import React from 'react';
import {StyleSheet, TouchableOpacity, Linking} from 'react-native';
import {View, Text, Icon} from 'native-base';
import {ThemeText, HourlyBackup} from '../../constants';

const Hourly = ({DailyActive, Data}) => {
  let previousCondition;

  const styles = StyleSheet.create({
    view: {
      marginTop: 30,
    },
    container: {
      minHeight: 45,
      flexDirection: 'row',
    },
    time: {
      width: '24%',
      textAlignVertical: 'center',
      textAlign: 'right',
      fontSize: 18,
      fontWeight: '600',
      color: ThemeText,
    },
    temperature: {
      width: '24%',
      textAlignVertical: 'center',
      textAlign: 'center',
      fontSize: 18,
      fontWeight: '700',
    },
    bar: {
      height: '100%',
      width: '4%',
    },
    conditionView: {
      width: '40%',
      flexDirection: 'row',
    },
    icon: {
      marginRight: 8,
      textAlignVertical: 'center',
      fontSize: 25,
    },
    condition: {
      textAlignVertical: 'center',
      fontSize: 15,
    },
    text: {
      marginBottom: 10,
      paddingHorizontal: 35,
      textAlign: 'center',
    },
  });

  const hourly = DailyActive ? null : !Data ? (
    <View style={styles.view}>
      <Text style={styles.text}>Hourly Forecast Unavailable.</Text>
      <Text style={styles.text}>Please Visit:</Text>
      <TouchableOpacity onPress={() => Linking.openURL(HourlyBackup)}>
        <Text style={{...styles.text, color: ThemeText}}>{HourlyBackup}</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <View style={styles.view}>
      {Data.map((data, index) => {
        previousCondition = index > 0 ? Data[index - 1].condition : '';

        return (
          <View style={styles.container} key={index}>
            <Text style={styles.time}>{data.time}</Text>
            <Text style={styles.temperature}>{data.temperature}°</Text>
            <View style={{...styles.bar, backgroundColor: data.iconColor}} />
            {previousCondition !== data.condition ? (
              <View style={styles.conditionView}>
                <Icon
                  type="Octicons"
                  name="triangle-right"
                  style={{...styles.icon, color: data.iconColor}}
                />
                <Text style={styles.condition}>{data.condition}</Text>
              </View>
            ) : null}
          </View>
        );
      })}
    </View>
  );

  return hourly;
};

export default Hourly;
