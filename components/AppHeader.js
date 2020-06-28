import React from 'react';
import {StyleSheet} from 'react-native';
import {Header, Title, Left, Right, Body, Button, Icon} from 'native-base';
import {themeBackgroundLight, themeText} from './../constants';

const AppHeader = ({MenuActive, setMenuActive}) => {
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
      color: themeText,
    },
    right: {
      flex: 1,
    },
    icon: {
      color: themeText,
    },
  });

  const OpenMenu = () => {
    setMenuActive(!MenuActive);
  };

  return (
    <Header style={styles.header}>
      <Left style={styles.left} />
      <Body style={styles.body}>
        <Title style={styles.title}>Vancouver Sky</Title>
      </Body>
      <Right style={styles.right}>
        <Button transparent onPress={OpenMenu}>
          <Icon style={styles.icon} name="more" />
        </Button>
      </Right>
    </Header>
  );
};

export default AppHeader;
