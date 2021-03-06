import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import RouteConfig from '../configs/RoutesConfig.js';
import RenderConfig from '../configs/RenderConfig.js';
import SettingsStackNavigator from './SettingsStackNavigator.js';
import SettingsScreen from '../screens/SettingsScreen.js';

export default class RootNavigation extends React.Component {
  state = {
    index: 0,
    routes: RouteConfig.routes,
  };

  constructor(props) {
    super(props)
  }

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    profile: RenderConfig.ProfileRoute,
    events: RenderConfig.EventsRoute,
    search: RenderConfig.SearchRoute,
    chat: RenderConfig.ChatRoute,
    settings: RenderConfig.SettingsRoute,
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}