import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Button, Text, Colors, TextInput, Snackbar } from 'react-native-paper';
import LoginStyles from '../styles/Login.Styles';
import LoginService from '../services/LoginService.js';

export default class ForgotPasswordScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        resultMsg: '',
        visible: false,
        isLoading: false,
        emailId: '',
        pwd: '',
        confPwd: '',
        firstName: '',
        lastName: '',
    }

    _goBack() {
        // code for navigating back to login page
        this.props.navigation.navigate('SignInUsingEmail');
    }

    _signUp() {
        this.setState(state => ({
                isLoading: true,
            })
        )
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
        else if (password !== confPassword) {
            msg = 'Password and confirm password do not match.';
        }
        else {
            // Make a service call
            var inputObj = {
                json: {
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    email: this.state.emailId,
                    password: this.state.pwd,
                    mobile: "9999999999"
                }
            };
            console.log(JSON.stringify(inputObj));
            // var result = LoginService.signUpUsingEmail(JSON.stringify(inputObj));
            LoginService.signUpUsingEmail(inputObj)
                        .then((res) => {
                            console.log(res);
                            this.props.navigation.navigate('AuthLoading');
                        });
            //msg = JSON.parse(result).message;
        }
        this.setState(state => ({
                isLoading: false,
                resultMsg: msg,
                visible: true
            })
        );
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                    <ActivityIndicator animating={true} size="large" color="#6f00f8" />
                </View>
            )
        }

        return (
            <View style={LoginStyles.container}>
                <View style={LoginStyles.signInContentContainer}>
                    <Text style={LoginStyles.appName}>
                        Sign Up
                    </Text>
                    <TextInput
                        label='First Name'
                        mode='flat'
                        placeholder='Enter your first name'
                        style={LoginStyles.inputFields}
                        value={this.state.firstName}
                        onChangeText={(firstName) => this.setState({ firstName })}
                    />
                    <TextInput
                        label='Last Name'
                        mode='flat'
                        placeholder='Enter your last name'
                        style={LoginStyles.inputFields}
                        value={this.state.lastName}
                        onChangeText={(lastName) => this.setState({ lastName })}
                    />
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
