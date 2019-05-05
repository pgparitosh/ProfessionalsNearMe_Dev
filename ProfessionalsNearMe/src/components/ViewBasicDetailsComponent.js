import React from 'react';
import { View } from 'react-native';
import { Card, Avatar, Title, Paragraph } from 'react-native-paper';
import GlobalStyles from '../styles/GlobalStyles.js';
import ProfileScreenStyles from '../styles/ProfileScreen.Styles.js';

export default class ViewBasicDetailsComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <View>
                    <Avatar.Image
                        size={150}
                        source={require('../../assets/images/Profile/myavatar.png')}
                        style={ProfileScreenStyles.avatarImage} />
                </View>
                <View>
                    <Card style={GlobalStyles.card}>
                        <Card.Content>
                            <Title>John Doe</Title>
                            <Paragraph>
                                Age: 25
                                {"\n"}{"\n"}
                                An aspirant photographer who loves to shoot the urban chaos.
                                Happy to serve you.
                                This is a short description about my bio.
                                I have worked on multiple projects prior to this and have many
                                success stories to share.
                                Looking forward to work with you.
                        </Paragraph>
                        </Card.Content>
                    </Card>
                </View>
            </View>
        );
    }
}