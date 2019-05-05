import React from 'react';
import { View } from 'react-native';
import { Title, Card, List, Text, Paragraph } from 'react-native-paper';
import GlobalStyles from '../styles/GlobalStyles.js';
import ProfileScreenStyles from '../styles/ProfileScreen.Styles.js';

export default class ViewBusinessAddressDetailsComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Card style={GlobalStyles.card}>
                    <Card.Content>
                        <Title>Business Address Details</Title>
                        <Paragraph style={{fontSize: 14}}>
                            301, Ved Complex,{"\n"}
                            Nr. Shyamal Cross Road,{"\n"}
                            Satellite,{"\n"}
                            Ahmedabad, Gujarat - 380015
                        </Paragraph>
                    </Card.Content>
                </Card>
            </View>
        );
    }
}