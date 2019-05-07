import React from 'react';
import { View } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import CalendarAgendaComponent from '../components/CalendarAgendaComponent';
import HelperService from '../services/HelperService';

export default class CalendarScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        var date = new Date();
        var initialDate = HelperService.formatDate(date);
        this.setState({
            selectedDate: initialDate,
        });
    }

    

    render() {
        return (
            <View>
                <HeaderComponent title="Event Manager" subtitle="One place to manage all your events" />
                <CalendarAgendaComponent navigation={this.props.navigation} />
            </View>
        );
    }
}
