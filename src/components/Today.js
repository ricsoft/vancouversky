import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Card, CardItem, Body, Icon} from 'native-base';
import {ThemeText} from '../../constants';

const Current = ({Forecast}) => {
  const styles = StyleSheet.create({
    card: {
      marginLeft: 15,
      marginRight: 15,
    },
    headerText: {
      fontSize: 18,
      marginBottom: 5,
    },
    containerView: {
      borderWidth: 1,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    iconView: {
      width: '15%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      fontSize: 40,
      color: 'gray',
    },
    temperatureText: {
      width: '25%',
      textAlignVertical: 'center',
      textAlign: 'center',
      fontSize: 28,
      fontWeight: '700',
      color: ThemeText,
    },
    conditionText: {
      maxWidth: '60%',
      paddingTop: 4,
      textAlignVertical: 'center',
      fontSize: 21,
      fontWeight: '600',
      color: ThemeText,
    },
  });

  return (
    <Card style={styles.card}>
      <CardItem>
        <Body>
          {Forecast.map((data, index) => (
            <View key={index}>
              <Text style={styles.headerText}>
                {data.period[0].$.textForecastName}
              </Text>
              <View style={styles.containerView}>
                <View style={styles.iconView}>
                  <Icon type="MaterialIcons" name="cloud" style={styles.icon} />
                </View>
                <Text style={styles.temperatureText}>°C</Text>
                <Text style={styles.conditionText}>
                  {data.abbreviatedForecast[0].textSummary}
                </Text>
              </View>
            </View>
          ))}
        </Body>
      </CardItem>
    </Card>
  );
};

export default Current;
