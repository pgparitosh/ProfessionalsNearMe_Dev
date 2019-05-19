import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import ChatDetailsScreen from '../screens/ChatDetailsScreen.js';
import ChatScreen from '../screens/ChatScreen.js';
import GiftedChatScreen from '../screens/GiftedChatScreen';

const ChatStackNavigatorConfiguration = createStackNavigator(
    {
        AllChats: ChatScreen,
        ChatDetails: ChatDetailsScreen,
        GiftedChat: GiftedChatScreen,
    },
    {
        headerMode: 'none'
    }
);

const ChatStackNavigator = createAppContainer(ChatStackNavigatorConfiguration);
export default ChatStackNavigator;