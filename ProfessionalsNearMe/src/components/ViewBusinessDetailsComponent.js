import React from 'react';
import { View } from 'react-native';
import { Title, Card, List } from 'react-native-paper';
import GlobalStyles from '../styles/GlobalStyles.js';
import ProfileScreenStyles from '../styles/ProfileScreen.Styles.js';

export default class ViewBusinessDetailsComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Card style={GlobalStyles.card}>
                    <Card.Content>
                        <Title>Business Details</Title>
                        <List.Item style={ProfileScreenStyles.listItem}
                            title="Pgtosh Photography Team" 
                            left={() => <List.Icon icon="assignment-ind" />} />                            
                        <List.Item style={ProfileScreenStyles.listItem}
                            title="Wedding Photographer"
                            left={() => <List.Icon icon="camera" />} />
                        <List.Item style={ProfileScreenStyles.listItem}
                            title="+91 9090119091, +91 9011210987"
                            left={() => <List.Icon icon="perm-phone-msg" />} />
                        <List.Item style={ProfileScreenStyles.listItem}
                            title="john.doe@expertlink.in"
                            left={() => <List.Icon icon="email" />} />
                        <List.Item style={ProfileScreenStyles.listItem}
                            title="3000 / Hour"
                            left={() => <List.Icon icon="monetization-on" />} />
                    </Card.Content>
                </Card>
            </View>
        );
    }
}