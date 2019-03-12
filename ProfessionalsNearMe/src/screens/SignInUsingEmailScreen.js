import React from 'react';
import { View } from 'react-native';
import { Button, Text, Colors, TextInput } from 'react-native-paper';
import LoginStyles from '../styles/Login.Styles';

export default class SignInUsingEmailScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    _forgotPassword() {
        // Code for forgot password
        this.props.navigation.navigate('ForgotPassword');
    }

    _logIn() {
        // code for log in
    }

    _cancel() {
        // code for cancel
    }

    render() {
        return (
            <View style={LoginStyles.container}>
                <View style={LoginStyles.signInContentContainer}>
                    <Text style={LoginStyles.appName}>
                        Login
                    </Text>
                    <TextInput
                        label='Email'
                        mode='flat'
                        placeholder='Enter your registered Email Address'
                        style={LoginStyles.inputFields}
                    />
                    <TextInput
                        label='Password'
                        mode='flat'
                        placeholder='Enter your password'
                        secureTextEntry={true}
                        style={LoginStyles.inputFields}
                    />
                    <View style={LoginStyles.forgotPasswordContainer}>
                        <Button
                            onPress={this._forgotPassword.bind(this)}
                            mode="text">
                            <Text style={LoginStyles.forgotPasswordText}>
                                Forgot Password?
                            </Text>
                        </Button>
                    </View>
                    <View style={LoginStyles.loginButtons}>
                        <Button
                            style={LoginStyles.loginPageButton}
                            icon="mail"
                            mode="contained"
                            color={Colors.violet900}
                            onPress={this._logIn}
                        >
                            Sign In
                        </Button>
                        <Button
                            style={LoginStyles.loginPageButton}
                            icon="cancel"
                            mode="contained"
                            color={Colors.red500}
                            onPress={() => this.props.navigation.navigate('Login')}
                        >
                            Cancel
                        </Button>
                    </View>
                </View>
            </View>
        );
    }
}