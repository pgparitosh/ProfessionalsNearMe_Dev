import * as React from 'react';
import ProfileStackNavigator from '../navigation/ProfileStackNavigator';
import SearchStackNavigator from '../navigation/SearchStackNavigator';
import ChatStackNavigator from '../navigation/ChatStackNavigator.js';
import WorkAssignedTab from '../screens/WorkAssigned.js';
import WorkReceivedTab from '../screens/WorkReceived.js';
import CalenderStackNavigator from '../navigation/CalenderStackNavigator';
import SettingsStackNavigator from '../navigation/SettingsStackNavigator';

export default {
    ProfileRoute: () => <ProfileStackNavigator />,
    EventsRoute: () => <CalenderStackNavigator />,
    SearchRoute: () => <SearchStackNavigator />,
    ChatRoute: () => <ChatStackNavigator />,
    SettingsRoute: () => <SettingsStackNavigator />,
    WorkAssignedTabRoute: () => <WorkAssignedTab />,
    WorkReceivedTabRoute: () => <WorkReceivedTab />,
}