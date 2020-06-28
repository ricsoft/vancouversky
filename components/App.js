import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Content, Container, Text} from 'native-base';
import AppHeader from './AppHeader';
import Modal from './Modal';
import Menu from './Menu';
import {themeBackground} from './../constants';

const App = () => {
  const [MenuActive, setMenuActive] = useState(false);

  const styles = StyleSheet.create({
    container: {
      backgroundColor: themeBackground,
    },
    content: {
      position: 'relative',
    },
    text: {
      position: 'relative',
    },
  });

  const ExitMenu = () => {
    setMenuActive(false);
  };

  return (
    <Container style={styles.container}>
      <AppHeader MenuActive={MenuActive} setMenuActive={setMenuActive} />
      <Content style={styles.content}>
        <Text style={styles.text}>App page</Text>
      </Content>
      <Modal
        MenuActive={MenuActive}
        setMenuActive={setMenuActive}
        ExitMenu={ExitMenu}
      />
      <Menu
        MenuActive={MenuActive}
        setMenuActive={setMenuActive}
        ExitMenu={ExitMenu}
      />
    </Container>
  );
};

export default App;
