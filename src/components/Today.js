import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Card, CardItem, Body, Icon} from 'native-base';
import {ThemeText} from '../../constants';

const Current = ({CurrentData}) => {
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
      width: '100%',
      flexDirection: 'row',
    },
    iconView: {
      width: '20%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    dayNightIcon: {
      fontSize: 20,
      color: 'black',
    },
    icon: {
      fontSize: 40,
      color: 'gray',
    },
    textView: {
      width: '80%',
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    temperatureText: {
      flex: 1,
      flexGrow: 1,
      textAlignVertical: 'center',
      textAlign: 'center',
      fontSize: 28,
      fontWeight: '700',
      color: ThemeText,
    },
    conditionText: {
      paddingTop: 4,
      flex: 1,
      flexGrow: 2,
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
          <Text style={styles.headerText}>Today</Text>
          <View style={styles.containerView}>
            <View style={styles.iconView}>
              <Icon
                type="FontAwesome"
                name="circle-thin"
                style={styles.dayNightIcon}
              />
            </View>
            <View style={styles.iconView}>
              <Icon type="MaterialIcons" name="cloud" style={styles.icon} />
            </View>
            <Text style={styles.temperatureText}>
              {CurrentData.temperature}°C
            </Text>
            <Text style={styles.conditionText}>{CurrentData.condition}</Text>
          </View>
        </Body>
      </CardItem>
    </Card>
  );
};

export default Current;
