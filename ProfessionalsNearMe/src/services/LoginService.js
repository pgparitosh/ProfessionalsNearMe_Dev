import React from 'react';
import { Platform, Alert } from 'react-native';
import { Google, Facebook } from 'expo';

const LoginService = {

    // The below method is used to login using google
    async _logInWithGoogle() {
        const clientId = Platform.OS === 'ios' ?
            '160018136023-jno0t1fl22ase1m6k4c1uphqk4837ad0.apps.googleusercontent.com' :
            '160018136023-aaphaet1tgorvu2fbthbffr5da5ju8hb.apps.googleusercontent.com';
        // const clientId = '160018136023-8hqbgv366jnhau1ob94tj61uacl8ddkm.apps.googleusercontent.com';

        const { type, accessToken, user } = await Google.logInAsync({ clientId });
        console.log(type);
        console.log(accessToken);
        console.log(user);
    },

    // The below method is used to log in using Facebook
    async _logInWithFacebook() {
        const appId = '246814439536371';
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