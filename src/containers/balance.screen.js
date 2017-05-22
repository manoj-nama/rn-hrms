import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class Balance extends Component {
  static navigationOptions = {
    tabBarLabel: 'Balances',
    tabBarIcon: ({focused}) => {
      const iconName = focused ? 'ios-paper' : 'ios-paper-outline';
      return <Icon name={iconName} size={24} />
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Balance Screen</Text>
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