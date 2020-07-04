import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Card, CardItem, Body, Icon} from 'native-base';
import {ThemeText} from '../../constants';

const SimpleTemplate = ({icon, title = null, temperature, condition}) => {
  const styles = StyleSheet.create({
    card: {
      marginLeft: 15,
      marginRight: 15,
      marginBottom: 10,
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
      width: '15%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      fontSize: 40,
      color: 'gray',
    },
    textContainer: {
      width: '85%',
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    temperatureText: {
      width: '30%',
      textAlignVertical: 'center',
      textAlign: 'center',
      fontSize: 28,
      fontWeight: '700',
      color: ThemeText,
    },
    conditionText: {
      minWidth: '45%',
      maxWidth: '70%',
      paddingTop: 4,
      textAlignVertical: 'center',
      fontSize: 21,
      fontWeight: '600',
      color: ThemeText,
    },
  });

  console.log('icon', icon);
  return (
    <Card style={styles.card}>
      <CardItem>
        <Body>
          {title ? <Text style={styles.headerText}>{title}</Text> : null}
          <View style={styles.containerView}>
            <View style={styles.iconView}>
              <Icon type="MaterialIcons" name="cloud" style={styles.icon} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.temperatureText}>{temperature}°C</Text>
              <Text style={styles.conditionText}>{condition}</Text>
            </View>
          </View>
        </Body>
      </CardItem>
    </Card>
  );
};

export default SimpleTemplate;
