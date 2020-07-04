import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Text} from 'native-base';
import AppHeader from './common/AppHeader';
import Menu from './common/Menu';
import {ExitMenu} from '../helpers/Helpers';
import {ThemeBackground} from '../../constants';

const Settings = ({componentId}) => {
  const [MenuActive, setMenuActive] = useState(false);

  const HeaderData = {
    title: 'Settings',
  };

  const styles = StyleSheet.create({
    view: {
      height: '100%',
      backgroundColor: ThemeBackground,
    },
  });

  return (
    <Container style={styles.view}>
      <AppHeader
        MenuActive={MenuActive}
        setMenuActive={setMenuActive}
        HeaderData={HeaderData}
        BackButton
        componentId={componentId}
      />
      <Text>Settings Page</Text>
      <Menu
        componentId={componentId}
        MenuActive={MenuActive}
        ExitMenu={() => ExitMenu(setMenuActive)}
        isSettings
      />
    </Container>
  );
};

export default Settings;
