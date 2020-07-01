import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text} from 'native-base';
import SettingsHeader from './SettingsHeader';
import {ThemeBackground} from '../../constants';

const Settings = ({componentId}) => {
  const styles = StyleSheet.create({
    view: {
      height: '100%',
      backgroundColor: ThemeBackground,
    },
  });

  return (
    <View style={styles.view}>
      <SettingsHeader componentId={componentId} />
      <Text>Settings Page</Text>
    </View>
  );
};

export default Settings;
