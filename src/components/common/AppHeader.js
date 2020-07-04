import React, {Fragment} from 'react';
import {Navigation} from 'react-native-navigation';
import {StyleSheet} from 'react-native';
import {Header, Title, Left, Right, Body, Button, Icon} from 'native-base';
import {ThemeBackgroundLight, ThemeText} from '../../../constants';

const AppHeader = ({
  MenuActive,
  setMenuActive,
  HeaderData,
  BackButton = false,
  componentId = null,
}) => {
  const OpenMenu = () => {
    setMenuActive(!MenuActive);
  };

  const styles = StyleSheet.create({
    header: {
      backgroundColor: ThemeBackgroundLight,
    },
    left: {
      flex: 1,
    },
    body: {
      flex: 1,
    },
    title: {
      alignSelf: 'center',
      color: ThemeText,
    },
    right: {
      flex: 1,
    },
    icon: {
      color: ThemeText,
    },
  });

  return (
    <Header style={styles.header}>
      <Left style={styles.left}>
        {BackButton ? (
          <Button transparent onPress={() => Navigation.pop(componentId)}>
            <Icon style={styles.icon} name="arrow-back" />
          </Button>
        ) : (
          <Fragment />
        )}
      </Left>
      <Body style={styles.body}>
        <Title style={styles.title}>{HeaderData.title}</Title>
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
