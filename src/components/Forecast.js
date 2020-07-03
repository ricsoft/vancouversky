import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Card, CardItem, Text, Body, Icon} from 'native-base';
import RiseSet from './RiseSet';
import {ThemeText} from '../../constants';

const Forecast = ({
  DailyActive,
  Current,
  RiseSetData,
  Forecast,
  ForecastFuture,
}) => {
  const styles = StyleSheet.create({
    card: {
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 25,
    },
    headerIcon: {
      fontSize: 60,
      color: 'gray',
    },
    top: {
      width: '100%',
      marginBottom: 8,
      paddingLeft: 2,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    tempConditionView: {
      paddingLeft: 5,
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
    temperatureText: {
      marginRight: 15,
      fontSize: 25,
      fontWeight: '700',
      color: ThemeText,
    },
    conditionText: {
      paddingBottom: 2,
      fontSize: 20,
      fontWeight: '600',
      color: ThemeText,
    },
  });

  const forecast = DailyActive ? (
    <View>
      <Card style={styles.card}>
        <CardItem>
          <Body>
            <View style={styles.top}>
              <Icon
                type="MaterialIcons"
                name="cloud"
                style={styles.headerIcon}
              />
              <RiseSet Data={RiseSetData} />
            </View>
            <View style={styles.tempConditionView}>
              <Text style={styles.temperatureText}>
                {Current.temperature}°C
              </Text>
              <Text style={styles.conditionText}>{Current.condition}</Text>
            </View>
            <View>
              <Icon type="FontAwesome5" name="wind" style={styles.icon} />
            </View>
          </Body>
        </CardItem>
      </Card>
      <Card style={styles.card}>
        <CardItem>
          <Body>
            <Text>//Your text here</Text>
          </Body>
        </CardItem>
      </Card>
    </View>
  ) : null;

  return forecast;
};

export default Forecast;
