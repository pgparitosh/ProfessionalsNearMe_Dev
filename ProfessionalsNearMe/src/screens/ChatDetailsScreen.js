import * as React from 'react';
import { View, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, Header } from 'react-native';
import { Appbar, Text, Surface, TextInput, IconButton, Colors } from 'react-native-paper';
import KeyboardSpacer from 'react-native-keyboard-spacer'
import GlobalStyles from '../styles/GlobalStyles.js';
import ChatAppStyles from '../styles/ChatAppStyles.js';

export default class ChatScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    allMsgs = [
        {
            msgId: 1,
            sentBy: '2',
            recievedBy: '1',
            sentTime: '3:52 PM',
            msg: 'Hi Blitz',
        },
        {
            msgId: 2,
            sentBy: '1',
            recievedBy: '2',
            sentTime: '3:54 PM',
            msg: 'Hi John. How are you? How may I help you?',
        },
        {
            msgId: 3,
            sentBy: '2',
            recievedBy: '1',
            sentTime: '3:58 PM',
            msg: 'I want to hire you for my pre wedding photo shoot. Will you be interested?',
        },
        {
            msgId: 4,
            sentBy: '1',
            recievedBy: '2',
            sentTime: '4:00 PM',
            msg: 'Sure. Can you please send me the details so that I can provide you the quotation accordingly?',
        },
    ];

    _goBack = () => this.props.navigation.goBack();

    _onSearch = () => console.log('Searching');

    render() {
        const { navigation } = this.props;
        const listId = navigation.getParam('listId', 'NO-ID');
        const name = navigation.getParam('name', 'John Doe');
        return (
            <Surface style={GlobalStyles.surfaceContainer}>
                <ScrollView>
                    <Appbar.Header>
                        <Appbar.BackAction
                            onPress={this._goBack}
                        />
                        <Appbar.Content
                            title={name}
                            subtitle="Last seen: 7:58 PM"
                        />
                    </Appbar.Header>
                    {this.allMsgs.map(
                        (message) =>
                            <TouchableWithoutFeedback key={message.msgId}>
                                <View style={[ChatAppStyles.messageContainer,
                                message.sentBy === '1' ? ChatAppStyles.sentMsg : ChatAppStyles.recievedMsg]}>
                                    <Text style={[ChatAppStyles.msgTextField,
                                    message.sentBy === '1' ? ChatAppStyles.backgroundPrimary : ChatAppStyles.backgroundAccent]}>
                                        {message.msg}
                                    </Text>
                                    <Text style={[ChatAppStyles.messageSentTimeTextField,
                                    message.sentBy === '1' ? ChatAppStyles.backgroundPrimary : ChatAppStyles.backgroundAccent]}>
                                        {message.sentTime}
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                    )}
                </ScrollView>
                <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={-140}>
                    <ScrollView scrollEnabled={false} style={{ bottom: 0 }}>
                        <View style={ChatAppStyles.msgInput}>
                            <TextInput placeholder={"Type your message here.."}
                                autoCorrect={true} scrollEnabled={true} multiline={true}
                                style={ChatAppStyles.msgInputText} spellCheck={true} mode="outlined">
                            </TextInput>
                            <IconButton
                                icon="send"
                                color={Colors.red500}
                                size={30}
                                style={ChatAppStyles.msgInputIcon}
                                onPress={() => console.log('Pressed')}
                            />
                            <KeyboardSpacer />
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </Surface>
        );
    }
}
