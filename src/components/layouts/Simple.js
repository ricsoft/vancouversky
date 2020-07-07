import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Icon} from 'native-base';
import {ThemeText} from '../../../constants';

const Simple = ({icon, temperature, condition}) => {
  let {iconName, iconColor} = icon;

  const styles = StyleSheet.create({
    containerView: {
      width: '100%',
      flexDirection: 'row',
    },
    iconView: {
      width: '15%',
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    icon: {
      fontSize: 35,
    },
    temperatureText: {
      width: '20%',
      paddingTop: 1,
      textAlignVertical: 'center',
      textAlign: 'center',
      fontSize: 20,
      fontWeight: '700',
      color: ThemeText,
    },
    conditionText: {
      width: '65%',
      paddingTop: 0,
      textAlignVertical: 'center',
      fontSize: 17,
      fontWeight: '600',
      color: ThemeText,
    },
  });

  return (
    <View style={styles.containerView}>
      <View style={styles.iconView}>
        <Icon name={iconName} style={{...styles.icon, color: iconColor}} />
      </View>
      <Text style={styles.temperatureText}>{temperature}°</Text>
      <Text style={styles.conditionText}>{condition}</Text>
    </View>
  );
};

export default Simple;
