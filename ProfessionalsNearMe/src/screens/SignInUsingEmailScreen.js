import React from 'react';
import { ScrollView, View, KeyboardAvoidingView } from 'react-native';
import { Button, Avatar, Text, Colors, Surface, TextInput } from 'react-native-paper';
import LoginStyles from '../styles/Login.Styles';

export default class SignInUsingEmailScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Surface style={LoginStyles.container}>
                <KeyboardAvoidingView style={LoginStyles.signInContentContainer}>
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
                    <View style={LoginStyles.loginButtons}>
                        <Button
                            style={LoginStyles.loginPageButton}
                            icon="mail"
                            mode="contained"
                            color={Colors.pink50}
                            onPress={this.navigateToSignInScreen}
                        >
                            Sign In
                        </Button>
                        <Button
                            style={LoginStyles.loginPageButton}
                            icon="cancel"
                            mode="contained"
                            color={Colors.red500}
                            onPress={this.navigateToSignInScreen}
                        >
                            Cancel
                        </Button>
                    </View>
                </KeyboardAvoidingView>
            </Surface>

        );
    }
}