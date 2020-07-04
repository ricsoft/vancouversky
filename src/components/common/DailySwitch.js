import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Button, Text} from 'native-base';

const DailySwitch = ({DailyActive, setDailyActive}) => {
  const HandlePress = () => {
    setDailyActive(!DailyActive);
  };

  const styles = StyleSheet.create({
    view: {
      marginTop: 35,
      marginBottom: 35,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    button: {
      borderWidth: 2,
      width: 125,
      marginLeft: 6,
      marginRight: 6,
      display: 'flex',
      justifyContent: 'center',
    },
    text: {
      fontSize: 15,
    },
  });

  return (
    <View style={styles.view}>
      <Button
        transparent={!DailyActive}
        primary={DailyActive}
        rounded
        style={styles.button}
        onPress={HandlePress}>
        <Text style={styles.text}>Daily</Text>
      </Button>
      <Button
        transparent={DailyActive}
        primary={!DailyActive}
        rounded
        style={styles.button}
        onPress={HandlePress}>
        <Text style={styles.text}>Hourly</Text>
      </Button>
    </View>
  );
};

export default DailySwitch;
