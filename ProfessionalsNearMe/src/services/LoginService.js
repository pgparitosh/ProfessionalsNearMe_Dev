import React from 'react';
import { Platform, Alert } from 'react-native';
import { Google, Facebook } from 'expo';
import {
    REACT_APP_GOOGLE_SIGN_IN_ANDROID_CLIENT_ID,
    REACT_APP_GOOGLE_SIGN_IN_IOS_CLIENT_ID,
    REACT_APP_FACEBOOK_SIGN_IN_APP_ID,
    DOMAIN_NAME
} from 'react-native-dotenv';
import GoogleSignInModel from '../models/GoogleSignInModel';
import axios from 'axios';
import { requestPermissionsAsync } from 'expo-location';

const reqHeader = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
}

const domain = DOMAIN_NAME

const instance = axios.create({
    baseURL: domain,
    timeout: 2000,
    headers: { 'Content-Type': 'application/json' }
});

const LoginService = {
    // The below method is used to login using google
    async _logInWithGoogle() {

        const clientId = Platform.OS === 'ios' ?
            REACT_APP_GOOGLE_SIGN_IN_IOS_CLIENT_ID :
            REACT_APP_GOOGLE_SIGN_IN_ANDROID_CLIENT_ID;

        const { type, accessToken, user } = await Google.logInAsync({ clientId });

        var googleSignInModel = new GoogleSignInModel();

        if (type === 'success') {
            googleSignInModel.actionType = type;
            googleSignInModel.accessToken = accessToken;
            googleSignInModel.user = user;
            console.log(googleSignInModel);
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
    },

    //async signUpUsingEmail(input) {
    //const request = new Request((domain + 'admin/api/register'), { method: 'POST', body: input, headers: reqHeader, });
    // fetch(request)
    //     .then((response) => response.json())
    //     .then(responseJson => {
    //         console.log(responseJson);
    //         return responseJson;
    //     })
    //     .catch(error => error.json())
    //     .catch(errorData => {
    //         console.log(JSON.stringify(errorData));
    //     })
    //     .done()

    //},

    async signUpUsingEmail(inputObj) {
        try {
            return axios.post((domain + 'admin/api/register'), { inputObj })
                .then(res => res.data)
        } catch (error) {
            console.error(error)
        }
    },

    async signInUsingEmail(inputObj) {
        return instance({
            method: 'post',
            url: '/admin/api/login',
            data: inputObj,
        }).then((response) => {
            return response.data;
        })
          .catch((e) => console.log(e));
    },

    // async signInUsingEmail(inputObj) {
    //     console.log(inputObj);
    //     return axios.post((domain + 'admin/api/login'), { data: inputObj })
    //         .then(function (response) {
    //             console.log(response.data);
    //             return response.data;
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // },

    // async signInUsingEmail(input) {
    //     const request = new Request((domain + 'admin/api/login'), { method: 'POST', body: input, headers: reqHeader, });
    //     let response = await fetch(request);
    //     if (response.status == 200) {
    //         return resolve(response);
    //         //return JSON.parse(response._bodyText);
    //     }
    // }
}

export default LoginService;