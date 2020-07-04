import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, CardItem, Body, Text, View} from 'native-base';
import Simple from './layouts/Simple';

const Current = ({Forecast}) => {
  const styles = StyleSheet.create({
    card: {
      marginLeft: 15,
      marginRight: 15,
      marginBottom: 10,
      paddingBottom: 5,
    },
    headerText: {
      fontSize: 18,
      marginBottom: 10,
    },
  });

  const AddMargin = index => {
    if (index > 0) {
      return {marginTop: 15};
    }
  };

  return (
    <Card style={styles.card}>
      <CardItem>
        <Body>
          {Forecast.map((data, index) => (
            <View style={AddMargin(index)} key={index}>
              <Text style={styles.headerText}>
                {data.period[0].$.textForecastName}
              </Text>
              <Simple
                title={data.period[0].$.textForecastName}
                icon={data.abbreviatedForecast[0].iconCode[0]._}
                temperature={data.temperatures[0].temperature[0]._}
                condition={data.abbreviatedForecast[0].textSummary[0]}
                key={index}
              />
            </View>
          ))}
        </Body>
      </CardItem>
    </Card>
  );
};

export default Current;
