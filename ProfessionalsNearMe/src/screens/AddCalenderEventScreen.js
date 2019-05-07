import React from 'react';
import { View } from 'react-native';
import { Appbar } from 'react-native-paper';

export default class AddCalenderEventScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    goBack() {
        const { navigation } = this.props;
        const nav = navigation.getParam('navigation');
        nav.navigate('Agenda');
    }

    render() {
        return (
            <View>
                <Appbar.Header>
                    <Appbar.Action
                        icon="arrow-back"
                        onPress={this.goBack.bind(this)} />
                    <Appbar.Content
                        title="Save Event"
                    />
                </Appbar.Header>
            </View>
        );
    }
}