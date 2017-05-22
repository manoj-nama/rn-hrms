import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { NavConfig } from './nav.config';
export { NavConfig } from './nav.config'
import Login from '../containers/login.screen';

export const PrimaryNavigator = TabNavigator(NavConfig);
export const RootNavigator = StackNavigator({
  Login: { screen: Login },
  Main: { screen: PrimaryNavigator }
});