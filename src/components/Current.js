import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text} from 'native-base';

const Current = ({Data}) => {
  const styles = StyleSheet.create({});

  return (
    <View>
      <Text>Icon: {Data.icon}</Text>
      <Text>Temperature: {Data.temperature}</Text>
      <Text>Condition: {Data.condition}</Text>
      <Text>
        Wind speed: {Data.wind.speed} {Data.wind.direction}
      </Text>
    </View>
  );
};

export default Current;
