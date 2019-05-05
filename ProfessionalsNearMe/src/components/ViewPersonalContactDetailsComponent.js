import React from 'react';
import { View } from 'react-native';
import { Title, Card, List } from 'react-native-paper';
import GlobalStyles from '../styles/GlobalStyles.js';
import ProfileScreenStyles from '../styles/ProfileScreen.Styles.js';

export default class ViewPersonalContactDetailsComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Card style={GlobalStyles.card}>
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
            </View>
        );
    }
}