import React from 'react';
import { ScrollView } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import CalendarAgendaComponent from '../components/CalendarAgendaComponent';

export default class CalendarScreen extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <ScrollView>
                <HeaderComponent title="Event Manager" subtitle="One place to manage all your events" />
                <CalendarAgendaComponent />
            </ScrollView>
        );
    }
}
