import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {
  Container,
  Text,
  Content,
  ListItem,
  Radio,
  Right,
  Left,
  Button,
  Spinner,
} from 'native-base';
import AppHeader from './common/AppHeader';
import Menu from './common/Menu';
import {ExitMenu, GetColor, SaveColor} from '../helpers/Helpers';
import {ThemeBackground, ThemeText, DeviceHeight} from '../../constants';

const Settings = ({componentId}) => {
  const [MenuActive, setMenuActive] = useState(false);
  const [SelectedColor, setSelectedColor] = useState(null);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    GetColor(setSelectedColor, setLoading);
  }, []);

  const HeaderData = {
    title: 'Settings',
  };

  const RadioPressed = color => {
    setSelectedColor(color);
  };

  const SavePressed = () => {
    SaveColor(SelectedColor);
  };

  const styles = StyleSheet.create({
    spinner: {
      height: DeviceHeight / 1.3,
    },
    view: {
      height: '100%',
      backgroundColor: ThemeBackground,
    },
    text: {marginTop: 25, marginBottom: 10, paddingLeft: 15, fontSize: 17},
    listitem: {
      marginLeft: 35,
      marginRight: 35,
    },
    button: {
      width: 100,
      marginTop: 50,
      alignSelf: 'center',
      display: 'flex',
      justifyContent: 'center',
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

      {Loading ? (
        <Content>
          <Spinner color={ThemeText} style={styles.spinner} />
        </Content>
      ) : (
        <Content>
          <Text style={styles.text}>Widget Text Color</Text>
          <ListItem style={styles.listitem}>
            <Left>
              <Text>White</Text>
            </Left>
            <Right>
              <Radio
                selected={SelectedColor === 'White' ? true : false}
                onPress={() => RadioPressed('White')}
              />
            </Right>
          </ListItem>
          <ListItem style={styles.listitem}>
            <Left>
              <Text>Black</Text>
            </Left>
            <Right>
              <Radio
                selected={SelectedColor === 'Black' ? true : false}
                onPress={() => RadioPressed('Black')}
              />
            </Right>
          </ListItem>
          <Button style={styles.button} onPress={SavePressed}>
            <Text>Save</Text>
          </Button>
        </Content>
      )}
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
