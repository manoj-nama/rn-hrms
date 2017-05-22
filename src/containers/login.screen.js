import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { loginAction } from '../actions';

export default class Login extends Component {
  static navigationOptions = {
    title: 'Login'
  }

  constructor(props) {
    super(props);
    this.doLogin = this.doLogin.bind(this);
  }

  doLogin() {
    this.props.navigation.dispatch(loginAction);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.doLogin}>
          <Text>Login</Text>
        </TouchableOpacity>
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