import * as React from 'react';
import ProfileScreen from '../screens/ProfileScreen.js';
import WorkHistoryScreen from '../screens/WorkHistoryScreen.js';
import SearchScreen from '../screens/SearchScreen.js';
import ChatStackNavigator from '../screens/ChatStackNavigator.js';
import SettingsScreen from '../screens/SettingsScreen.js';
import WorkAssignedTab from '../screens/WorkAssigned.js';
import WorkReceivedTab from '../screens/WorkReceived.js';

export default {
    ProfileRoute: () => <ProfileScreen />,
    WorkHistoryRoute: () => <WorkHistoryScreen />,
    SearchRoute: () => <SearchScreen />,
    ChatRoute: () => <ChatStackNavigator />,
    SettingsRoute: () => <SettingsScreen />,
    WorkAssignedTabRoute: () => <WorkAssignedTab />,
    WorkReceivedTabRoute: () => <WorkReceivedTab />,
}