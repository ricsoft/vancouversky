import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Icon} from 'native-base';
import {ThemeText} from '../../constants';

const RiseSet = ({Data}) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    view: {
      marginRight: 35,
      paddingTop: 3,
      display: 'flex',
      alignItems: 'center',
    },
    view2: {
      marginRight: 3,
      paddingTop: 3,
      display: 'flex',
      alignItems: 'center',
    },
    icon: {
      fontSize: 28,
      marginBottom: 1,
    },
    text: {
      fontSize: 19,
      fontWeight: '600',
      color: ThemeText,
      textAlign: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Icon type="Feather" name="sunrise" style={styles.icon} />
        <Text style={styles.text}>
          {Data.sunrise.hour}:{Data.sunrise.minute}
        </Text>
      </View>
      <View style={styles.view2}>
        <Icon type="Feather" name="sunset" style={styles.icon} />
        <Text style={styles.text}>
          {Data.sunset.hour}:{Data.sunset.minute}
        </Text>
      </View>
    </View>
  );
};

export default RiseSet;
