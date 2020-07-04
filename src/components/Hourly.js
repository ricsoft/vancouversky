import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Icon} from 'native-base';
import {ParseTime, ParseIcon} from '../helpers/Helpers';
import {ThemeText} from '../../constants';

const Hourly = ({DailyActive, Data}) => {
  let currentColor, previousCondition;

  const styles = StyleSheet.create({
    container: {
      height: 50,
      flexDirection: 'row',
    },
    time: {
      width: '24%',
      textAlignVertical: 'center',
      textAlign: 'right',
      fontSize: 20,
      fontWeight: '600',
      color: ThemeText,
    },
    temperature: {
      width: '24%',
      textAlignVertical: 'center',
      textAlign: 'center',
      fontSize: 20,
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
      top: -3,
      fontSize: 25,
    },
    condition: {
      fontSize: 17,
    },
  });

  const hourly = DailyActive ? null : (
    <View>
      {Data.map((data, index) => {
        let {iconColor} = ParseIcon(data.iconCode[0]._);
        previousCondition = index > 0 ? Data[index - 1].condition[0] : '';
        currentColor = iconColor;

        return (
          <View style={styles.container} key={index}>
            <Text style={styles.time}>{ParseTime(data.$.dateTimeUTC)}</Text>
            <Text style={styles.temperature}>{data.temperature[0]._}°</Text>
            <View style={{...styles.bar, backgroundColor: currentColor}} />
            {previousCondition !== data.condition[0] ? (
              <View style={styles.conditionView}>
                <Icon
                  type="Octicons"
                  name="triangle-right"
                  style={{...styles.icon, color: currentColor}}
                />
                <Text style={styles.condition}>{data.condition[0]}</Text>
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
