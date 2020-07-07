import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, CardItem, Body, Text, View} from 'native-base';
import Simple from './layouts/Simple';
import Detailed from './layouts/Detailed';

const Current = ({DetailsEnabled, ForecastData}) => {
  let wind = ForecastData[0].winds[0] ? true : false;
  let humidity = ForecastData[0].relativeHumidity[0] ? true : false;

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

  return (
    <Card style={styles.card}>
      <CardItem>
        <Body>
          {ForecastData.map((data, index) => (
            <View style={AddMargin(index)} key={index}>
              <Text style={styles.headerText}>
                {data.period[0].$.textForecastName}
              </Text>
              <Simple
                title={data.period[0].$.textForecastName}
                icon={data.abbreviatedForecast[0].iconCode[0]._}
                temperature={data.temperatures[0].temperature[0]._}
                condition={data.abbreviatedForecast[0].textSummary[0]}
              />
              {DetailsEnabled ? (
                <Detailed
                  Wind={
                    wind
                      ? {
                          speed: data.winds[0].wind[0].speed[0]._,
                          direction: data.winds[0].wind[0].direction[0],
                        }
                      : null
                  }
                  Humidity={
                    humidity ? ForecastData[0].relativeHumidity[0]._ : null
                  }
                />
              ) : null}
            </View>
          ))}
        </Body>
      </CardItem>
    </Card>
  );
};

export default Current;
