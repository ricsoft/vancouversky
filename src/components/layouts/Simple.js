import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Card, CardItem, Body, Icon} from 'native-base';
import {ParseIcon} from '../../helpers/Helpers';
import {ThemeText} from '../../../constants';

const Simple = ({icon, temperature, condition}) => {
  let {iconName, iconColor} = ParseIcon(icon);

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
      fontSize: 40,
    },
    temperatureText: {
      width: '25%',
      paddingTop: 1,
      textAlignVertical: 'center',
      textAlign: 'left',
      fontSize: 28,
      fontWeight: '700',
      color: ThemeText,
    },
    conditionText: {
      width: '60%',
      paddingTop: 5,
      textAlignVertical: 'center',
      fontSize: 21,
      fontWeight: '600',
      color: ThemeText,
    },
  });

  return (
    <View style={styles.containerView}>
      <View style={styles.iconView}>
        <Icon name={iconName} style={{...styles.icon, color: iconColor}} />
      </View>
      <Text style={styles.temperatureText}>{temperature}°C</Text>
      <Text style={styles.conditionText}>{condition}</Text>
    </View>
  );
};

export default Simple;
