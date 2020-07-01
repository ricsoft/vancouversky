import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Content, Container, Text} from 'native-base';
import {FetchData} from '../helpers/Helpers';
import AppHeader from './AppHeader';
import Menu from './Menu';
import RiseSet from './RiseSet';
import {ThemeBackground} from '../../constants';

const App = ({componentId}) => {
  const [Loading, setLoading] = useState(true);
  const [Data, setData] = useState(null);
  const [MenuActive, setMenuActive] = useState(false);

  useEffect(() => {
    FetchData(setLoading, setData);
  }, []);

  const ExitMenu = () => {
    setMenuActive(false);
  };

  const styles = StyleSheet.create({
    container: {
      backgroundColor: ThemeBackground,
    },
  });

  return (
    <Container style={styles.container}>
      <AppHeader MenuActive={MenuActive} setMenuActive={setMenuActive} />
      {Loading ? (
        <Content>
          <Text>Spinner</Text>
        </Content>
      ) : (
        <Content>
          <RiseSet Data={Data} />
        </Content>
      )}
      <Menu
        componentId={componentId}
        MenuActive={MenuActive}
        ExitMenu={ExitMenu}
      />
    </Container>
  );
};

export default App;
