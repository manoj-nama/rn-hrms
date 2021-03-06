import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class Home extends Component {
  static navigationOptions = {
    tabBarLabel: 'Attendance',
    tabBarIcon: ({focused}) => {
      const iconName = focused ? 'ios-calendar' : 'ios-calendar-outline';
      return <Icon name={iconName} size={24} />
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Check your attendance status</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  }
});