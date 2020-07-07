import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, CardItem, Body, Text} from 'native-base';
import Simple from './layouts/Simple';
import Detailed from './layouts/Detailed';

const Current = ({DetailsEnabled, CurrentData, RiseSetData}) => {
  const styles = StyleSheet.create({
    card: {
      borderWidth: 2,
      marginTop: 10,
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

  return (
    <Card style={styles.card}>
      <CardItem>
        <Body>
          <Text style={styles.headerText}>Now</Text>
          <Simple
            icon={CurrentData.icon}
            temperature={CurrentData.temperature}
            condition={CurrentData.condition}
          />
          {DetailsEnabled ? (
            <Detailed
              RiseSetData={RiseSetData}
              Wind={CurrentData.wind}
              Humidity={CurrentData.humidity}
            />
          ) : null}
        </Body>
      </CardItem>
    </Card>
  );
};

export default Current;
