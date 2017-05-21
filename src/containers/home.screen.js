import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class Home extends Component {
  static navigationOptions = {
    tabBarLabel: 'Profile',
    tabBarIcon: <Icon name='ios-person' size={30} />
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Home Screen</Text>
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