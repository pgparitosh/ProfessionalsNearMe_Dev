import React from 'react';
import { SafeAreaView, AsyncStorage } from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';

export default class ProfileLoadingScreen extends React.Component {

    constructor() {
        super();
    }

    componentDidMount() {
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        const userProfileId = await AsyncStorage.getItem('userProfileId');
        console.log(userProfileId);
        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        //this.props.navigation.navigate('CreateProfile');
        this.props.navigation.navigate(userProfileId !== undefined && userProfileId !== null ? 'App' : 'CreateProfile');
    };

    render() {
        return (
            <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
               <ActivityIndicator size={30} animating={true} color={Colors.purple700} />
            </SafeAreaView>
        );
    }
}
