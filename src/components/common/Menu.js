import React, {Fragment} from 'react';
import {Navigation} from 'react-native-navigation';
import {StyleSheet, TouchableOpacity, BackHandler} from 'react-native';
import {CardItem, Body, Text} from 'native-base';
import {
  DeviceWidth,
  DeviceHeight,
  ThemeText,
  ThemeBackground,
} from '../../../constants';

const Menu = ({
  componentId = null,
  MenuActive,
  ExitMenu,
  isSettings = false,
  FetchData = null,
  setLoading = null,
  setData = null,
}) => {
  const RefreshPressed = () => {
    FetchData(setLoading, setData);
    ExitMenu();
  };

  const SettingsPressed = () => {
    ExitMenu();

    Navigation.push(componentId, {
      component: {
        name: 'Settings',
      },
    });
  };

  const ExitPressed = () => {
    ExitMenu();
    BackHandler.exitApp();
    BackHandler.exitApp();
  };

  const styles = StyleSheet.create({
    carditem: {
      width: 140,
      marginTop: 5,
      marginRight: 5,
      borderWidth: 2,
      borderColor: ThemeBackground,
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
      paddingTop: 18,
      paddingBottom: 18,
      textAlign: 'right',
      fontSize: 16,
      fontWeight: '600',
      color: ThemeText,
    },
    touchableopacity: {
      width: DeviceWidth,
      height: DeviceHeight,
      position: 'absolute',
    },
  });

  const menu = MenuActive ? (
    <Fragment>
      <TouchableOpacity style={styles.touchableopacity} onPress={ExitMenu} />
      <CardItem style={styles.carditem}>
        <Body style={styles.body}>
          {isSettings ? (
            <TouchableOpacity>
              <Text style={styles.text}>Save</Text>
            </TouchableOpacity>
          ) : (
            <Fragment>
              <TouchableOpacity>
                <Text style={styles.text} onPress={RefreshPressed}>
                  Refresh
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={SettingsPressed}>
                <Text style={styles.text}>Settings</Text>
              </TouchableOpacity>
            </Fragment>
          )}
          <TouchableOpacity onPress={ExitPressed}>
            <Text style={styles.text}>Exit</Text>
          </TouchableOpacity>
        </Body>
      </CardItem>
    </Fragment>
  ) : null;

  return menu;
};

export default Menu;
