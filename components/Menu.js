import React from 'react';
import {Navigation} from 'react-native-navigation';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {CardItem, Body, Text} from 'native-base';
import {themeText} from './../constants';

const Menu = ({componentId, MenuActive, setMenuActive, ExitMenu}) => {
  const styles = StyleSheet.create({
    carditem: {
      width: 140,
      height: 170,
      marginTop: 5,
      marginRight: 5,
      right: 0,
      top: 55,
      position: 'absolute',
    },
    body: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'flex-end',
    },
    text: {
      minWidth: 100,
      marginRight: 5,
      textAlign: 'right',
      fontSize: 20,
      color: themeText,
    },
  });

  const SettingsPressed = () => {
    ExitMenu();
    console.log('Menu ' + componentId);
    Navigation.push(componentId, {
      component: {
        name: 'Settings',
      },
    });
  };

  const ExitPressed = () => {
    ExitMenu();
  };

  const menu = MenuActive ? (
    <CardItem style={styles.carditem}>
      <Body style={styles.body}>
        <TouchableOpacity onPress={SettingsPressed}>
          <Text style={styles.text}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ExitPressed}>
          <Text style={styles.text}>Exit</Text>
        </TouchableOpacity>
      </Body>
    </CardItem>
  ) : null;

  return menu;
};

export default Menu;
