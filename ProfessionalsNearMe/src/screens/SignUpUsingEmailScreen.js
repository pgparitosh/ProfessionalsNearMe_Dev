import React from 'react';
import { View } from 'react-native';
import { Button, Text, Colors, TextInput, Snackbar } from 'react-native-paper';
import LoginStyles from '../styles/Login.Styles';

export default class ForgotPasswordScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        resultMsg: '',
        visible: false,
        emailId: '',
        pwd: '',
        confPwd: '',
    }

    _goBack() {
        // code for navigating back to login page
        this.props.navigation.navigate('SignInUsingEmail');
    }

    _signUp() {
        var emailAddress = this.state.emailId;
        var password = this.state.pwd;
        var confPassword = this.state.confPwd;
        var msg = '';
        if (emailAddress.trim() === '' || password.trim() === '' || confPassword.trim() === '') {
            msg = 'All fields are mandatory'
        }
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress))) {
            msg = 'Please enter a valid email address'
        }
        else if(password !== confPassword) {
            msg = 'Password and confirm password do not match.';
        }
        else {
            // Make a service call
            msg = 'A verification mail has been sent. Please check your mail box.'
        }
        this.setState(state => ({
            resultMsg: msg,
            visible: true
        })
        );
    }

    render() {
        return (
            <View style={LoginStyles.container}>
                <View style={LoginStyles.signInContentContainer}>
                    <Text style={LoginStyles.appName}>
                        Sign Up
                    </Text>
                    <TextInput
                        label='Email'
                        mode='flat'
                        placeholder='Enter your registered Email Address'
                        style={LoginStyles.inputFields}
                        value={this.state.emailId}
                        onChangeText={(emailId) => this.setState({ emailId })}
                    />
                    <TextInput
                        label='Password'
                        mode='flat'
                        placeholder='Enter your password'
                        secureTextEntry={true}
                        style={LoginStyles.inputFields}
                        value={this.state.pwd}
                        onChangeText={(pwd) => this.setState({ pwd })}
                    />
                    <TextInput
                        label='Comfirm Password'
                        mode='flat'
                        placeholder='Confirm your password'
                        secureTextEntry={true}
                        style={LoginStyles.inputFields}
                        value={this.state.confPwd}
                        onChangeText={(confPwd) => this.setState({ confPwd })}
                    />
                    <View style={LoginStyles.loginButtons}>
                        <Button
                            style={LoginStyles.loginPageButton}
                            icon="assignment-turned-in"
                            mode="contained"
                            color={Colors.violet900}
                            onPress={this._signUp.bind(this)}
                        >
                            Submit
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
                <Snackbar
                    visible={this.state.visible}
                    onDismiss={() => this.setState({ visible: false })}
                    duration={10000}
                    action={{
                        label: 'Ok',
                        onPress: () => {
                            this.setState({ visible: false })
                        },
                    }}
                >
                    {this.state.resultMsg}
                </Snackbar>
            </View>
        );
    }
}
