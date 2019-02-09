import * as React from 'react';
import { ScrollView } from 'react-native';
import { Surface, Card, List } from 'react-native-paper';
import GlobalStyles from '../styles/GlobalStyles.js';
import WorkingHistoryStyles from '../styles/WorkHistory.Styles.js';
import WorkHistoryStyles from '../styles/WorkHistory.Styles.js';

export default class WorkAssignedTab extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Surface>
                <ScrollView>
                <Card style={GlobalStyles.card}>
                    <Card.Content>
                        <List.Item style={WorkingHistoryStyles.listItem}
                            title="Mr. Robin Viz"
                            description="3-Nov-2018" />
                        <List.Item style={WorkingHistoryStyles.listItem}
                            title="Paid ₹ 30,000"
                            description="This project was at a celeb's wedding celebration" />
                    </Card.Content>
                </Card>
                <Card style={[GlobalStyles.card, WorkHistoryStyles.lastCard]}>
                    <Card.Content>
                        <List.Item style={WorkingHistoryStyles.listItem}
                            title="Mr. Vadia Schulz"
                            description="4-Oct-2018" />
                        <List.Item style={WorkingHistoryStyles.listItem}
                            title="Paid ₹ 65,000"
                            description="This project was a corporate event for Zeon tech completing their 50 years in the industry" />
                    </Card.Content>
                </Card>
                </ScrollView>
            </Surface>
        );
    }
}
