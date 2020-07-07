import React, {Fragment} from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Icon} from 'native-base';
import {ThemeText} from '../../../constants';

const Detailed = ({RiseSetData = null, Wind = null, Humidity = null}) => {
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      marginTop: 15,
      flexDirection: 'row',
    },
    view: {
      width: '25%',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    icon: {
      paddingBottom: 2,
      fontSize: 30,
    },
    text: {
      fontSize: 15,
      color: ThemeText,
    },
  });

  return (
    <View style={styles.container}>
      {Wind ? (
        <View style={styles.view}>
          <Icon type="FontAwesome5" name="wind" style={styles.icon} />
          <Text style={styles.text}>
            {Wind.direction} {Wind.speed}
          </Text>
        </View>
      ) : null}
      {Humidity ? (
        <View style={styles.view}>
          <Icon
            type="MaterialCommunityIcons"
            name="water-percent"
            style={styles.icon}
          />
          <Text style={styles.text}>{Humidity}</Text>
        </View>
      ) : null}
      {RiseSetData ? (
        <Fragment>
          <View style={styles.view}>
            <Icon type="Feather" name="sunrise" style={styles.icon} />
            <Text style={styles.text}>
              {RiseSetData.sunrise.hour}:{RiseSetData.sunrise.minute}
            </Text>
          </View>
          <View style={styles.view}>
            <Icon type="Feather" name="sunset" style={styles.icon} />
            <Text style={styles.text}>
              {RiseSetData.sunset.hour}:{RiseSetData.sunset.minute}
            </Text>
          </View>
        </Fragment>
      ) : null}
    </View>
  );
};

export default Detailed;
