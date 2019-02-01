import * as React from 'react';
import { Text, Surface } from 'react-native-paper';
import HeaderComponent from '../components/HeaderComponent.js';

export default class ChatScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Surface>
                <HeaderComponent title="My Chats" subtitle="This is chat app"/>
                <Text>This is Chat Screen</Text>
            </Surface>
        );
    }
}
