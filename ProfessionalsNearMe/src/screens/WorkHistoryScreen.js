import * as React from 'react';
import { Text, Surface } from 'react-native-paper';
import HeaderComponent from '../components/HeaderComponent.js';

export default class WorkHistoryScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Surface>
                <HeaderComponent title="Work History" subtitle="This is my work history"/>
                <Text>This is Work History Screen</Text>
            </Surface>
        );
    }
}
