import * as React from 'react';
import { Text, Surface } from 'react-native-paper';
import HeaderComponent from '../components/HeaderComponent.js';

export default class SettingsScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Surface>
                <HeaderComponent title="Settings" subtitle="These are my settings"/>
                <Text>This is Settings Screen</Text>
            </Surface>
        );
    }
}
