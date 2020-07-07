import React, {Fragment} from 'react';
import {StyleSheet} from 'react-native';
import {Card, CardItem, Body, Text, View} from 'native-base';
import Simple from './layouts/Simple';
import Detailed from './layouts/Detailed';

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

  let tommmorows = Forecasts ? (
    <Fragment>
      {Forecasts.map((forecast, index1) => (
        <Card style={styles.card} key={index1}>
          <CardItem>
            <Body>
              {forecast.map((data, index2) => (
                <View style={AddMargin(index2)} key={index2}>
                  <Text style={styles.headerText}>{data.forecastName}</Text>
                  <Simple
                    icon={data.icon}
                    temperature={data.temperature}
                    condition={data.condition}
                    summary={data.summary}
                  />
                  {DetailsEnabled ? <Detailed Summary={data.summary} /> : null}
                </View>
              ))}
            </Body>
          </CardItem>
        </Card>
      ))}
    </Fragment>
  ) : null;

  return tommmorows;
};

export default Tommorows;
