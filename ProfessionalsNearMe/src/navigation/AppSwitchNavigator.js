import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginStackNavigator from './LoginStackNavigator';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
// import ProfileSwitchNavigator from './ProflieSwitchNavigator';
import CreateProfileScreen from '../screens/CreateProfileScreen';
import RootNavigation from './RootNavigator';
import RootNavigation2 from './RootNavigation';

const AppSwitchNavigatorConfiguration = createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        ProfileSwitchNavigator: CreateProfileScreen,
        Root: RootNavigation2,
        Auth: LoginStackNavigator,
    },
    {
        initialRouteName: 'AuthLoading',
    }
);

const AppSwitchNavigator = createAppContainer(AppSwitchNavigatorConfiguration);
export default AppSwitchNavigator;