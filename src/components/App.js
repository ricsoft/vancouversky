import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Content, Container, Text} from 'native-base';
import {parseString} from 'react-native-xml2js';
import {ParseData} from '../helpers/Helpers';
import AppHeader from './AppHeader';
import Menu from './Menu';
import RiseSet from './RiseSet';
import {ThemeBackground, WeatherSource} from '../../constants';

const App = ({componentId}) => {
  const [Loading, setLoading] = useState(true);
  const [Data, setData] = useState(null);
  const [MenuActive, setMenuActive] = useState(false);

  async function fetchData() {
    let data = await fetch(WeatherSource)
      .then(response => response.text())
      .then(text => {
        return text;
      });

    await parseString(data, function(err, result) {
      if (err) {
      }
      setData(ParseData(result));
      setLoading(false);
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  const styles = StyleSheet.create({
    container: {
      backgroundColor: ThemeBackground,
    },
  });

  const ExitMenu = () => {
    setMenuActive(false);
  };

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
