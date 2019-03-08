import React from 'react';
import { Platform, Alert } from 'react-native';
import { Google, Facebook } from 'expo';
import {
    REACT_APP_GOOGLE_SIGN_IN_ANDROID_CLIENT_ID,
    REACT_APP_GOOGLE_SIGN_IN_IOS_CLIENT_ID,
    REACT_APP_FACEBOOK_SIGN_IN_APP_ID,
} from 'react-native-dotenv';

const LoginService = {
    // The below method is used to login using google
    async _logInWithGoogle() {

        const clientId = Platform.OS === 'ios' ?
            REACT_APP_GOOGLE_SIGN_IN_IOS_CLIENT_ID :
            REACT_APP_GOOGLE_SIGN_IN_ANDROID_CLIENT_ID;

        const { type, accessToken, user } = await Google.logInAsync({ clientId });
        if (type === 'success') {
            console.log(accessToken);
            console.log(user);
        }
        else {
            console.log('User cancelled the action');
        }

    },

    // The below method is used to log in using Facebook
    async _logInWithFacebook() {
        const appId = REACT_APP_FACEBOOK_SIGN_IN_APP_ID;
        try {
            const {
                type,
                token,
                expires,
                permissions,
                declinedPermissions,
            } = await Facebook.logInWithReadPermissionsAsync(appId, {
                permissions: ['public_profile'],
            });
            if (type === 'success') {
                // Get the user's name using Facebook's Graph API
                const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
                Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
                console.log(await response.json());
            } else {
                // type === 'cancel'
            }
        } catch ({ message }) {
            alert(`Facebook Login Error: ${message}`);
        }
    }

}

export default LoginService;