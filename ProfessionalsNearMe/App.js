import React from 'react';
import { AsyncStorage } from 'react-native';
import { Provider } from "react-native-paper";
import AppSwitchNavigator from './src/navigation/AppSwitchNavigator.js';


export default class App extends React.Component {
  render() {
    return (
      <Provider>
        <AppSwitchNavigator />
      </Provider>
    );
  }
}