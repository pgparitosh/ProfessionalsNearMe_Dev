import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import SearchScreen from '../screens/SearchScreen';
import SearchFilterScreen from '../screens/SearchFilterScreen';

const SearchStackNavigatorConfiguration = createStackNavigator(
    {
        SearchResults: SearchScreen,
        SearchFilter: SearchFilterScreen,
    },
    {
        headerMode: 'none'
    }
);

const SearchStackNavigator = createAppContainer(SearchStackNavigatorConfiguration);
export default SearchStackNavigator;