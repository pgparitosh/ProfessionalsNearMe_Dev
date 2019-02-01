import * as React from 'react';
import { ScrollView } from 'react-native';
import { Surface, Avatar, Card, Title, Paragraph, List, Colors } from 'react-native-paper';
import HeaderComponent from '../components/HeaderComponent.js';
import GlobalStyles from '../styles/GlobalStyles.js';
import ProfileScreenStyles from '../styles/ProfileScreen.Styles.js';

export default class ProfileScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Surface style={GlobalStyles.surfaceContainer}>
                <ScrollView>
                    <HeaderComponent title="My Profile" subtitle="This is my profile" />
                    <Avatar.Image
                        size={150}
                        source={require('../../assets/images/Profile/myavatar.png')}
                        style={ProfileScreenStyles.avatarImage} />
                    <Card style={ProfileScreenStyles.card}>
                        <Card.Content>
                            <Title>John Doe</Title>
                            <Paragraph>
                                An aspirant photographer who loves to shoot the urban chaos.
                                Happy to serve you.
                                This is a short description about my bio.
                                I have worked on multiple projects prior to this and have many
                                success stories to share.
                                Looking forward to work with you.
                        </Paragraph>
                        </Card.Content>
                    </Card>
                    <Card style={ProfileScreenStyles.card}>
                        <Card.Content>
                            <Title>Contact Details</Title>
                            <List.Item style={ProfileScreenStyles.listItem}
                                title="+91 9090119091"
                                left={() => <List.Icon icon="perm-phone-msg" />} />
                            <List.Item style={ProfileScreenStyles.listItem}
                                title="john.doe@pronearme.com"
                                left={() => <List.Icon icon="email" />} />
                        </Card.Content>
                    </Card>
                    <Card style={[ProfileScreenStyles.card, ProfileScreenStyles.lastCard]}>
                        <Card.Content>
                            <Title>Portfolio</Title>
                            <List.Item style={ProfileScreenStyles.listItem}
                                title="Corporate Event"
                                description="This project was at a corporate event held at Paris" />
                            <List.Item style={ProfileScreenStyles.listItem}
                                title="Celebrity Wedding Photoshoot"
                                description="This project was at a celeb's wedding celebration" />
                        </Card.Content>
                    </Card>
                </ScrollView>
            </Surface>
        );
    }
}
