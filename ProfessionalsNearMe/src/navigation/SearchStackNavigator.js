import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import SearchScreen from '../screens/SearchScreen';
import SearchFilterScreen from '../screens/SearchFilterScreen';
import ViewProfileScreen from '../screens/ViewProfileScreen';
import PortfolioImagesComponent from '../components/PortfolioImagesComponent';
import ViewRatingComponent from '../components/ViewRatingComponent';

const SearchStackNavigatorConfiguration = createStackNavigator(
    {
        SearchResults: SearchScreen,
        SearchFilter: SearchFilterScreen,
        ViewProfessional: ViewProfileScreen,
        ViewProfessionalPortfolio: PortfolioImagesComponent,
        ViewProfessionalRatings: ViewRatingComponent,
    },
    {
        headerMode: 'none'
    }
);

const SearchStackNavigator = createAppContainer(SearchStackNavigatorConfiguration);
export default SearchStackNavigator;