import * as React from 'react';
import { TabBar, TabView, SceneMap } from 'react-native-tab-view';
import WorkAssignedTab from '../screens/WorkAssigned.js';
import WorkReceivedTab from '../screens/WorkReceived.js';

const WorkAssignedRoute = () => (
    <WorkAssignedTab />
);
const WorkReceivedRoute = () => (
    <WorkReceivedTab />
);

export default class WorkHistoryTabComponent extends React.Component {

    state = {
        index: 0,
        routes: [
            { key: 'workAssigned', title: 'Work Assigned' },
            { key: 'workReceived', title: 'Work Received' },
        ],
    };

    render() {
        return (
            <TabView
                navigationState={this.state}
                renderScene={SceneMap({
                    workAssigned: WorkAssignedRoute,
                    workReceived: WorkReceivedRoute,
                })}
                onIndexChange={index => this.setState({ index })}
                renderTabBar={props =>
                    <TabBar
                        {...props}
                        indicatorStyle={{ backgroundColor: 'white', height: 3 }}
                        style={{ backgroundColor: '#ff216c' }}
                    />
                }
            />
        );
    }
}
