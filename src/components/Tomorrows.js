import React, {Fragment} from 'react';
import {StyleSheet} from 'react-native';
import {Card, CardItem, Body, Text, View} from 'native-base';
import Simple from './layouts/Simple';

const Tommorows = ({DetailsEnabled, Forecasts}) => {
  const styles = StyleSheet.create({
    card: {
      marginLeft: 15,
      marginRight: 15,
      marginBottom: 10,
      paddingBottom: 5,
    },
    headerText: {
      fontSize: 15,
      marginBottom: 5,
    },
  });

  const AddMargin = index => {
    if (index > 0) {
      return {marginTop: 15};
    }
  };

  return (
    <Fragment>
      {Forecasts.map((forecast, index1) => (
        <Card style={styles.card} key={index1}>
          <CardItem>
            <Body>
              {forecast.map((data, index2) => (
                <View style={AddMargin(index2)} key={index2}>
                  <Text style={styles.headerText}>
                    {data.period[0].$.textForecastName}
                  </Text>
                  <Simple
                    title={data.period[0].$.textForecastName}
                    icon={data.abbreviatedForecast[0].iconCode[0]._}
                    temperature={data.temperatures[0].temperature[0]._}
                    condition={data.abbreviatedForecast[0].textSummary[0]}
                  />
                </View>
              ))}
            </Body>
          </CardItem>
        </Card>
      ))}
    </Fragment>
  );
};

export default Tommorows;
