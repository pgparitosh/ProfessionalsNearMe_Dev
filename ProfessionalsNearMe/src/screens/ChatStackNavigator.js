import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import ChatDetailsScreen from '../screens/ChatDetailsScreen.js';
import ChatScreen from '../screens/ChatScreen.js';

const ChatStackNavigatorConfiguration = createStackNavigator(
    {
        AllChats: ChatScreen,
        ChatDetails: ChatDetailsScreen,
    },
    {
        headerMode: 'none'
    }
);

const ChatStackNavigator = createAppContainer(ChatStackNavigatorConfiguration);
export default ChatStackNavigator;