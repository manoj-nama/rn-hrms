import React from 'react';
import {
  AppRegistry
} from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store';

import HRMSApp from './src';

console.ignoredYellowBox = ['Warning: View.propTypes'];

AppRegistry.registerComponent('hrms', () => HRMSApp);
