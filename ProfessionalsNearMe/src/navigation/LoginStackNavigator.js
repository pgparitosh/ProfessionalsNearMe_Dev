import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import SignInUsingEmailScreen from '../screens/SignInUsingEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import SignUpUsingEmailScreen from '../screens/SignUpUsingEmailScreen';

const LoginStackNavigatorConfiguration = createStackNavigator(
    {
        Login: LoginScreen,
        SignInUsingEmail: SignInUsingEmailScreen,
        ForgotPassword: ForgotPasswordScreen,
        SignUpUsingEmail: SignUpUsingEmailScreen,
    },
    {
        headerMode: 'none'
    }
);

const LoginStackNavigator = createAppContainer(LoginStackNavigatorConfiguration);
export default LoginStackNavigator;