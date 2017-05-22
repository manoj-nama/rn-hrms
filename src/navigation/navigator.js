import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import { RootNavigator } from './';

class AppNav extends Component {
  render() {
    return (
      <RootNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav
      })} />
    );
  }
}

const mapStateToProps = state => ({ nav: state.nav });

const AppNavigator = connect(mapStateToProps)(AppNav);
export default AppNavigator;