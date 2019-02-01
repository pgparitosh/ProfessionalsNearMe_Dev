import * as React from 'react';
import { Text, Surface } from 'react-native-paper';
import HeaderComponent from '../components/HeaderComponent.js';

export default class SearchScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Surface>
                <HeaderComponent title="Search Professional" subtitle="This is search screen"/>
                <Text>This is Seach Professional Screen</Text>
            </Surface>
        );
    }
}
