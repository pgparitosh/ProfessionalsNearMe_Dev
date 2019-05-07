import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import CalendarScreen from '../screens/CalendarScreen';
import AddCalenderEventScreen from '../screens/AddCalenderEventScreen';

const CalenderStackNavigatorConfiguration = createStackNavigator(
    {
        Agenda: CalendarScreen,
        SaveEvent: AddCalenderEventScreen,
    },
    {
        headerMode: 'none'
    }
);

const CalenderStackNavigator = createAppContainer(CalenderStackNavigatorConfiguration);
export default CalenderStackNavigator;