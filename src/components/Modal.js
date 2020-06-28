import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {DeviceWidth, DeviceHeight} from '../../constants';

const Settings = ({MenuActive, setMenuActive, ExitMenu}) => {
  const styles = StyleSheet.create({
    touchableopacity: {
      width: DeviceWidth,
      height: DeviceHeight,
      position: 'absolute',
    },
  });

  const modal = MenuActive ? (
    <TouchableOpacity style={styles.touchableopacity} onPress={ExitMenu} />
  ) : null;

  return modal;
};

export default Settings;
