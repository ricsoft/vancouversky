import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Button, Text} from 'native-base';

const DailySwitch = ({DailyActive, setDailyActive}) => {
  const DailyPressed = () => {
    setDailyActive(true);
  };

  const HourlyPressed = () => {
    setDailyActive(false);
  };

  const styles = StyleSheet.create({
    view: {
      marginTop: 30,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    button: {
      borderWidth: 2,
      width: 100,
      marginLeft: 8,
      marginRight: 8,
      display: 'flex',
      justifyContent: 'center',
    },
    text: {
      fontSize: 12,
    },
  });

  return (
    <View style={styles.view}>
      <Button
        transparent={!DailyActive}
        primary={DailyActive}
        rounded
        style={styles.button}
        onPress={DailyPressed}>
        <Text style={styles.text}>Daily</Text>
      </Button>
      <Button
        transparent={DailyActive}
        primary={!DailyActive}
        rounded
        style={styles.button}
        onPress={HourlyPressed}>
        <Text style={styles.text}>Hourly</Text>
      </Button>
    </View>
  );
};

export default DailySwitch;
