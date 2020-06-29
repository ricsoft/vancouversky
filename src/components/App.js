import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Content, Container, Text} from 'native-base';
import {FetchData} from '../helpers/Helpers';
import AppHeader from './AppHeader';
import Menu from './Menu';
import {ThemeBackground} from '../../constants';

const App = ({componentId}) => {
  const [Data, setData] = useState(null);
  const [MenuActive, setMenuActive] = useState(false);

  const styles = StyleSheet.create({
    container: {
      backgroundColor: ThemeBackground,
    },
  });

  const ExitMenu = () => {
    setMenuActive(false);
  };

  useEffect(() => {
    setData(FetchData());
  }, []);

  return (
    <Container style={styles.container}>
      <AppHeader MenuActive={MenuActive} setMenuActive={setMenuActive} />
      <Content>
        <Text>App page</Text>
      </Content>
      <Menu
        componentId={componentId}
        MenuActive={MenuActive}
        ExitMenu={ExitMenu}
      />
    </Container>
  );
};

export default App;
