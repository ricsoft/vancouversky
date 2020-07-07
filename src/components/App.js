import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Content, Container, Spinner} from 'native-base';
import {FetchData, ExitMenu} from '../helpers/Helpers';
import AppHeader from './common/AppHeader';
import Menu from './common/Menu';
import DailySwitch from './common/DailySwitch';
import Hourly from './Hourly';
import Forecast from './Forecast';
import {ThemeBackground, ThemeText, DeviceHeight} from '../../constants';

const App = ({componentId}) => {
  const [Error, setError] = useState(null);
  const [Loading, setLoading] = useState(true);
  const [Data, setData] = useState(null);
  const [MenuActive, setMenuActive] = useState(false);
  const [DailyActive, setDailyActive] = useState(true);
  const [DetailsEnabled, setDetailsEnabled] = useState(false);

  useEffect(() => {
    FetchData(setLoading, setData, setError);
  }, []);

  const HeaderData = {
    title: 'Vancouver Sky',
  };

  const styles = StyleSheet.create({
    spinner: {
      height: DeviceHeight / 1.3,
    },
    container: {
      paddingBottom: 10,
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
          <Spinner color={ThemeText} style={styles.spinner} />
        </Content>
      ) : (
        <Content>
          <DailySwitch
            DailyActive={DailyActive}
            setDailyActive={setDailyActive}
          />
          <Forecast
            DetailsEnabled={DetailsEnabled}
            setDetailsEnabled={setDetailsEnabled}
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
        FetchData={FetchData}
        setLoading={setLoading}
        setData={setData}
      />
    </Container>
  );
};

export default App;
