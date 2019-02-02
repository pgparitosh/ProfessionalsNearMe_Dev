import * as React from 'react';
import { Surface } from 'react-native-paper';
import { TabView, SceneMap } from 'react-native-tab-view';
import HeaderComponent from '../components/HeaderComponent.js';
import GlobalStyles from '../styles/GlobalStyles.js';
import WorkHistoryTabComponent from '../components/WorkHistoryTabComponent.js';

export default class WorkHistoryScreen extends React.Component {
    render() {
        return (
            <Surface style={GlobalStyles.surfaceContainer}>
                <HeaderComponent title="Work History" subtitle="This is work history" />
                <WorkHistoryTabComponent />
            </Surface>
        );
    }
}
