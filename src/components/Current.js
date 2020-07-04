import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, CardItem, Body, Text} from 'native-base';
import Simple from './layouts/Simple';

const Current = ({CurrentData}) => {
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
        </Body>
      </CardItem>
    </Card>
  );
};

export default Current;
