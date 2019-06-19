import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import SettingsScreen from '../screens/SettingsScreen';

const SettingsStackNavigatorConfiguration = createStackNavigator(
    {
        SettingsScreen: SettingsScreen,
    },
    {
        headerMode: 'none'
    }
);

const SettingsStackNavigator = createAppContainer(SettingsStackNavigatorConfiguration);
export default SettingsStackNavigator;