import React from 'react';
import { SafeAreaView, AsyncStorage } from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';

export default class AuthLoadingScreen extends React.Component {

    constructor() {
        super();
    }

    componentDidMount() {
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        // AsyncStorage.removeItem('userToken');
        // AsyncStorage.removeItem('userProfileId');
        const userToken = await AsyncStorage.getItem('userToken');
        console.log('user token: ' + userToken);
        this.props.navigation.navigate(
            userToken !== undefined && userToken !== null ? 'ProfileSwitchNavigator' : 'Auth'
        );

        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
    };

    render() {
        return (
            <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator animating={true} color={Colors.purple700} />
            </SafeAreaView>
        );
    }
}
