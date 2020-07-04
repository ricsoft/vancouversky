import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Content, Container, Text} from 'native-base';
import {FetchData, ExitMenu} from '../helpers/Helpers';
import AppHeader from './common/AppHeader';
import Menu from './common/Menu';
import DailySwitch from './common/DailySwitch';
import Hourly from './Hourly';
import Forecast from './Forecast';
import {ThemeBackground} from '../../constants';

const App = ({componentId}) => {
  const [Loading, setLoading] = useState(true);
  const [Data, setData] = useState(null);
  const [MenuActive, setMenuActive] = useState(false);
  const [DailyActive, setDailyActive] = useState(true);

  useEffect(() => {
    FetchData(setLoading, setData);
  }, []);

  const HeaderData = {
    title: 'Vancouver Sky',
  };

  const styles = StyleSheet.create({
    container: {
      backgroundColor: ThemeBackground,
    },
  });

  return (
    <Container style={styles.container}>
      <AppHeader
        MenuActive={MenuActive}
        setMenuActive={setMenuActive}
        HeaderData={HeaderData}
      />
      {Loading ? (
        <Content>
          <Text>Spinner</Text>
        </Content>
      ) : (
        <Content>
          <DailySwitch
            DailyActive={DailyActive}
            setDailyActive={setDailyActive}
          />
          <Forecast
            DailyActive={DailyActive}
            CurrentData={Data.current}
            RiseSetData={Data.riseSet}
            ForecastData={Data.forecast}
            ForecastFuture={Data.forecastFuture}
          />
          <Hourly DailyActive={DailyActive} Data={Data.hourly} />
        </Content>
      )}
      <Menu
        MenuActive={MenuActive}
        componentId={componentId}
        ExitMenu={() => ExitMenu(setMenuActive)}
      />
    </Container>
  );
};

export default App;
