import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class Approval extends Component {
  static navigationOptions = {
    tabBarLabel: 'Approve',
    tabBarIcon: ({focused}) => {
      const iconName = focused ? 'ios-checkmark-circle' : 'ios-checkmark-circle-outline';
      return <Icon name={iconName} size={24} />
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Check your approval status</Text>
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