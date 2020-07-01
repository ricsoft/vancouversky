import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text} from 'native-base';

const RiseSet = ({Data}) => {
  const styles = StyleSheet.create({});

  return (
    <View>
      <Text>Sunrise: {Data.sunrise.$.zone}</Text>
      <Text>Sunset: </Text>
    </View>
  );
};

export default RiseSet;
