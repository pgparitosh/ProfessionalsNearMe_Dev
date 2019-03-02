import * as React from 'react';
import { View, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { Appbar, Surface, Button, List, Avatar, Text } from 'react-native-paper';
import Modal from 'react-native-modal';
import GlobalStyles from '../styles/GlobalStyles.js';
import ChatAppStyles from '../styles/ChatAppStyles.js';

export default class ChatScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        visible: false,
    };

    _toggleModal = () => this.setState({ visible: !this.state.visible });

    _deleteChat = () => this.setState({ visible: !this.state.visible });

    allChats = [
        {
            listId: 1,
            name: 'John Doe',
            lastMsg: 'This was the last message sent. Here is some...'
        },
        {
            listId: 2,
            name: 'Robert Junior',
            lastMsg: 'This was the last message sent. Here is some...'
        },
        {
            listId: 3,
            name: 'Drowney MR',
            lastMsg: 'This was the last message sent. Here is some...'
        },
        {
            listId: 4,
            name: 'Rantal Deke',
            lastMsg: 'This was the last message sent. Here is some...'
        },
    ];

    _onSearch = () => console.log('Searching');

    render() {
        const { visible } = this.state;
        return (
            <Surface style={GlobalStyles.surfaceContainer}>
                <ScrollView>
                    <Appbar.Header>
                        <Appbar.Content
                            title="All Chats"
                            subtitle="Chat with a professional here"
                        />
                        <Appbar.Action icon="search" onPress={this._onSearch} />
                        <Appbar.Action icon="more-vert" onPress={this._onMore} />
                    </Appbar.Header>
                    {this.allChats.map(
                        (chatData) =>
                            <View key={chatData.listId}>
                                <TouchableWithoutFeedback>
                                    <List.Item
                                        title={chatData.name}
                                        description={chatData.lastMsg}
                                        left={props => <Avatar.Image size={40} style={ChatAppStyles.listItemAvatar} source={require('../../assets/images/Profile/myavatar.png')} />}
                                        onPress={() => this.props.navigation.navigate('ChatDetails', {
                                            listId: chatData.listId,
                                            name: chatData.name
                                        })}
                                        onLongPress={() => this._toggleModal()}
                                    />
                                </TouchableWithoutFeedback>
                                <View style={ChatAppStyles.horizontalRule} />
                            </View>
                    )}
                </ScrollView>
                <View style={ChatAppStyles.deletePopup}>
                    <Modal isVisible={this.state.visible} style={ChatAppStyles.deletePopupContent}>
                        <View>
                            <Text style={ChatAppStyles.deletePopupText}>Are you sure you want to delete this chat?</Text>
                            <View style={ChatAppStyles.deletePopupActions}>
                                <Button onPress={this._deleteChat} mode="contained" style={ChatAppStyles.butonSpacing}>
                                    Delete
                                </Button>
                                <Button onPress={this._toggleModal}>
                                    Cancel
                                </Button>
                            </View>
                        </View>
                    </Modal>
                </View>
            </Surface>
        );
    }
}
