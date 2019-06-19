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
        const userProfileId = await AsyncStorage.getItem('userProfileId');
        console.log(userProfileId);
        console.log('user token: ' + userToken);
        if (userToken === undefined || userToken === null) {
            this.props.navigation.navigate('Auth');
        }
        else if (userProfileId === undefined || userProfileId === null) {
            this.props.navigation.navigate('ProfileSwitchNavigator');
        }
        else{
            this.props.navigation.navigate('Root');
        }
    };

    render() {
        return (
            <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator animating={true} color={Colors.purple700} />
            </SafeAreaView>
        );
    }
}
