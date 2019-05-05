import * as React from 'react';
import ProfileStackNavigator from '../navigation/ProfileStackNavigator';
import WorkHistoryScreen from '../screens/WorkHistoryScreen.js';
import SearchScreen from '../screens/SearchScreen.js';
import ChatStackNavigator from '../navigation/ChatStackNavigator.js';
import SettingsScreen from '../screens/SettingsScreen.js';
import WorkAssignedTab from '../screens/WorkAssigned.js';
import WorkReceivedTab from '../screens/WorkReceived.js';

export default {
    ProfileRoute: () => <ProfileStackNavigator />,
    WorkHistoryRoute: () => <WorkHistoryScreen />,
    SearchRoute: () => <SearchScreen />,
    ChatRoute: () => <ChatStackNavigator />,
    SettingsRoute: () => <SettingsScreen />,
    WorkAssignedTabRoute: () => <WorkAssignedTab />,
    WorkReceivedTabRoute: () => <WorkReceivedTab />,
}