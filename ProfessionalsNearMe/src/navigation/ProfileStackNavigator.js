import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import ProfileScreen from '../screens/ProfileScreen';
import SaveProfileScreen from '../screens/SaveProfileScreen';
import PortfolioImagesComponent from '../components/PortfolioImagesComponent';

const ProfileStackNavigatorConfiguration = createStackNavigator(
    {
        ViewProfile: ProfileScreen,
        SaveProfile: SaveProfileScreen,
        ViewPortfolio: PortfolioImagesComponent,
    },
    {
        headerMode: 'none'
    }
);

const ProfileStackNavigator = createAppContainer(ProfileStackNavigatorConfiguration);
export default ProfileStackNavigator;