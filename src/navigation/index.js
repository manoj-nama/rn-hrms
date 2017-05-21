import React from 'react';
import { TabNavigator } from 'react-navigation';
import { NavConfig } from './nav.config';
export { NavConfig } from './nav.config'

export const Navigator = TabNavigator(NavConfig);