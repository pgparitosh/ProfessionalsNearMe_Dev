import React from 'react';
import { View, Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import ProfileStackNavigator from '../navigation/ProfileStackNavigator';
import SearchStackNavigator from '../navigation/SearchStackNavigator';
import ChatStackNavigator from '../navigation/ChatStackNavigator.js';
import CalenderStackNavigator from '../navigation/CalenderStackNavigator';
import SettingsStackNavigator from '../navigation/SettingsStackNavigator';

const RootNavigation2Configuration = createMaterialBottomTabNavigator(
    {
        profile: {
            screen: ProfileStackNavigator,
            navigationOptions: {
                tabBarLabel: 'Profile',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{ color: tintColor }]} size={25} name={Platform.OS === 'ios' ? 'ios-contact' : 'md-contact'} />
                    </View>),
            }
        },
        events: {
            screen: CalenderStackNavigator,
            navigationOptions: {
                tabBarLabel: 'Events',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{ color: tintColor }]} size={25} name={Platform.OS === 'ios' ? 'ios-calendar' : 'md-calendar'} />
                    </View>)
            }
        },
        search: {
            screen: SearchStackNavigator,
            navigationOptions: {
                tabBarLabel: 'Search',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{ color: tintColor }]} size={25} name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'} />
                    </View>),
            }
        },
        chat: {
            screen: ChatStackNavigator,
            navigationOptions: {
                tabBarLabel: 'Chat',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{ color: tintColor }]} size={25} name={Platform.OS === 'ios' ? 'ios-chatbubbles' : 'md-chatbubbles'} />
                    </View>),
            }
        },
        settings: {
            screen: SettingsStackNavigator,
            navigationOptions: {
                tabBarLabel: 'Settings',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{ color: tintColor }]} size={25} name={Platform.OS === 'ios' ? 'ios-settings' : 'md-settings'} />
                    </View>),
            }
        },
    },
    {
        initialRouteName: "profile",
        activeColor: '#ffffff',
        inactiveColor: '#B180F7',
        barStyle: { backgroundColor: '#6200ee' },
    },
);

export default createAppContainer(RootNavigation2Configuration);  