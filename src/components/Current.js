import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Card, CardItem, Body, Icon} from 'native-base';
import {ThemeText} from '../../constants';

const Current = ({CurrentData}) => {
  const styles = StyleSheet.create({
    card: {
      marginLeft: 15,
      marginRight: 15,
      marginBottom: 10,
    },
    containerView: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    iconView: {
      minWidth: '15%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      fontSize: 40,
      color: 'gray',
    },
    temperatureText: {
      minWidth: '25%',
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
          <View style={styles.containerView}>
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
