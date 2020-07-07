import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, CardItem, Body, Text, View} from 'native-base';
import Simple from './layouts/Simple';
import Detailed from './layouts/Detailed';

const Current = ({DetailsEnabled, ForecastData}) => {
  const styles = StyleSheet.create({
    card: {
      marginLeft: 15,
      marginRight: 15,
      marginBottom: 10,
      paddingBottom: 5,
    },
    headerText: {
      fontSize: 15,
      marginBottom: 3,
    },
  });

  const AddMargin = index => {
    if (index > 0) {
      return {marginTop: 15};
    }
  };

  let forecast = ForecastData ? (
    <Card style={styles.card}>
      <CardItem>
        <Body>
          {ForecastData.map((data, index) => (
            <View style={AddMargin(index)} key={index}>
              <Text style={styles.headerText}>{data.forecastName}</Text>
              <Simple
                icon={data.icon}
                temperature={data.temperature}
                condition={data.condition}
              />
              {DetailsEnabled ? <Detailed Summary={data.summary} /> : null}
            </View>
          ))}
        </Body>
      </CardItem>
    </Card>
  ) : null;

  return forecast;
};

export default Current;
