import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginStackNavigator from './LoginStackNavigator';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import ProfileSwitchNavigator from './ProflieSwitchNavigator';

const AppSwitchNavigatorConfiguration = createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        ProfileSwitchNavigator: ProfileSwitchNavigator,
        Auth: LoginStackNavigator,
    },
    {
        initialRouteName: 'AuthLoading',
    }
);

const AppSwitchNavigator = createAppContainer(AppSwitchNavigatorConfiguration);
export default AppSwitchNavigator;