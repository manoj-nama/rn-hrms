import React, { Component } from 'react';
import {
  Platform
} from 'react-native';
import { Provider } from 'react-redux';
import store from './store';

import Navigator from './navigation/navigator';

export default class HRMSApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}

