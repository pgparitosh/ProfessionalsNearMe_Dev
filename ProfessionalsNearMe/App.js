import React from 'react';
import RootNavigation from './src/screens/RootNavigator.js';
import LoginScreen from './src/screens/LoginScreen.js';
import SignInUsingEmailScreen from './src/screens/SignInUsingEmailScreen.js';

export default class App extends React.Component {
  render() {
    return (
      <SignInUsingEmailScreen />
    );
  }
}
