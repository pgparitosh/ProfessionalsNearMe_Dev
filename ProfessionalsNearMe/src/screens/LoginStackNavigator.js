import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import LoginScreen from './LoginScreen';
import SignInUsingEmailScreen from './SignInUsingEmailScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import SignUpUsingEmailScreen from './SignUpUsingEmailScreen';
import RootNavigator from './RootNavigator';

const LoginStackNavigatorConfiguration = createStackNavigator(
    {
        Login: LoginScreen,
        SignInUsingEmail: SignInUsingEmailScreen,
        ForgotPassword: ForgotPasswordScreen,
        SignUpUsingEmail: SignUpUsingEmailScreen,
        RootNavigator: RootNavigator,
    },
    {
        headerMode: 'none'
    }
);

const LoginStackNavigator = createAppContainer(LoginStackNavigatorConfiguration);
export default LoginStackNavigator;