import React from 'react';
import { Keyboard, View, KeyboardAvoidingView } from 'react-native';
import { Appbar, Text } from 'react-native-paper';
import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat';


export default class GiftedChatScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        messages: [],
    };

    componentWillMount() {
        this.setState({
            messages: [
                {
                    _id: 1,
                    text: "Hello developer",
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: "React Native",
                        avatar: "https://placeimg.com/140/140/any"
                    }
                }
            ],
            keyboardVisible: 0,
        });
        this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
        this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
    }

    componentWillUnmount() {
        this.keyboardDidShowSub.remove();
        this.keyboardDidHideSub.remove();
    }

    keyboardDidShow = (event) => {
        this.setState({ keyboardVisible: true });
    };

    keyboardDidHide = (event) => {
        this.setState({ keyboardVisible: false });
    };

    _goBack() {
        this.props.navigation.goBack();
    }

    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages)
        }));
    }

    renderBubble(props) {
        return (
            <Bubble
                {...props}
                wrapperStyle={{
                    right: {
                        backgroundColor: '#6200ee'
                    }
                }}
            />
        )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Appbar.Header>
                    <Appbar.BackAction
                        onPress={this._goBack}
                    />
                    <Appbar.Content
                        title="John Doe"
                        subtitle="Last seen Today 8:15 PM"
                    />
                </Appbar.Header>

                <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
                    <GiftedChat
                        keyboardShouldPersistTaps={"always"}
                        messages={this.state.messages}
                        placeholder='Type your message here'
                        onSend={messages => this.onSend(messages)}
                        user={{
                            _id: 1,
                            avatar: "https://placeimg.com/140/140/any",
                        }}
                        renderBubble={this.renderBubble}
                    />
                    <View style={{ height: this.state.keyboardVisible ? 60 : 0 }} />
                </KeyboardAvoidingView>
            </View >
        );
    }
}