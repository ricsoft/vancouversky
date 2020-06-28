import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Text} from 'native-base';
import SettingsHeader from './SettingsHeader';
import {ThemeBackground} from './../constants';

const Settings = ({componentId}) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: ThemeBackground,
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
