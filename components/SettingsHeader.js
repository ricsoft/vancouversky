import React from 'react';
import {Navigation} from 'react-native-navigation';
import {StyleSheet} from 'react-native';
import {Header, Title, Left, Right, Body, Button, Icon} from 'native-base';
import {themeBackgroundLight, themeText} from './../constants';

const SettingsHeader = ({componentId}) => {
  const styles = StyleSheet.create({
    header: {
      backgroundColor: themeBackgroundLight,
    },
    left: {
      flex: 1,
    },
    body: {
      flex: 1,
    },
    title: {
      alignSelf: 'center',
      color: themeText,
    },
    right: {
      flex: 1,
    },
    icon: {
      color: themeText,
    },
  });

  return (
    <Header style={styles.header}>
      <Left style={styles.left}>
        <Button transparent onPress={() => Navigation.pop(componentId)}>
          <Icon style={styles.icon} name="arrow-back" />
        </Button>
      </Left>
      <Body style={styles.body}>
        <Title style={styles.title}>Settings</Title>
      </Body>
      <Right style={styles.right} />
    </Header>
  );
};

export default SettingsHeader;
