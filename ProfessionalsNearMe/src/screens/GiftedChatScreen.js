import React from 'react';
import { Animated, Dimensions, Keyboard, UIManager, TextInput, View, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Appbar } from 'react-native-paper';
import { GiftedChat } from 'react-native-gifted-chat';


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
            ]
        });
    }

    _goBack() {
        this.props.navigation.goBack();
    }

    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages)
        }));
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

                <KeyboardAvoidingView style={{ flex: 1 }} behavior="height" enabled>
                    <GiftedChat
                        forceGetKeyboardHeight={true}
                        keyboardShouldPersistTaps={"always"}
                        messages={this.state.messages}
                        onSend={messages => this.onSend(messages)}
                        user={{
                            _id: 1,
                            avatar: "https://placeimg.com/140/140/any",
                        }}
                    />
                </KeyboardAvoidingView>
            </View>
        );
    }
}