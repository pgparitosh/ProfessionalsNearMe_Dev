import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import RootNavigation from './RootNavigator';
import CreateProfileScreen from '../screens/CreateProfileScreen';
import ProfileLoadingScreen from '../screens/ProfileLoadingScreen';

const ProfileSwitchNavigatorConfiguration = createSwitchNavigator(
    {
        ProfileLoading: ProfileLoadingScreen,
        App: RootNavigation,
        CreateProfile: CreateProfileScreen,
    },
    {
        initialRouteName: 'ProfileLoading',
    }
);

const ProfileSwitchNavigator = createAppContainer(ProfileSwitchNavigatorConfiguration);
export default ProfileSwitchNavigator;