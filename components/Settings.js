import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Text} from 'native-base';
import SettingsHeader from './SettingsHeader';
import {themeBackground} from './../constants';

const Settings = ({componentId}) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: themeBackground,
    },
  });

  return (
    <Container style={styles.container}>
      <SettingsHeader componentId={componentId} />
      <Text>Settings Page</Text>
    </Container>
  );
};

export default Settings;
