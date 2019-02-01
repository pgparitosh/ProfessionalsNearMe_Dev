import * as React from 'react';
import { Text, Surface } from 'react-native-paper';
import HeaderComponent from '../components/HeaderComponent.js';

export default class ProfileScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Surface>
                <HeaderComponent title="My Profile" subtitle="This is my profile"/>
                <Text>This is Profile Screen</Text>
            </Surface>
        );
    }
}
