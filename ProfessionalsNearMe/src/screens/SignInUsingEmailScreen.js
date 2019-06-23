import React from 'react';
import { View, AsyncStorage, ImageBackground } from 'react-native';
import { Button, Text, Colors, TextInput, Snackbar } from 'react-native-paper';
import LoginStyles from '../styles/Login.Styles';
import LoginService from '../services/LoginService';

export default class SignInUsingEmailScreen extends React.Component {

    constructor(props) {
        super(props);
        this._logIn = this._logIn.bind(this);
    }

    state = {
        resultMsg: '',
        visible: false,
        isLoading: false,
        emailId: '',
        pwd: '',
    }

    _forgotPassword() {
        // Code for forgot password
        this.props.navigation.navigate('ForgotPassword');
    }

    _logIn() {
        // code for log in
        this.setState(state => ({
            isLoading: true,
        })
        )
        var emailAddress = this.state.emailId;
        var password = this.state.pwd;
        var msg = '';
        if (emailAddress.trim() === '' || password.trim() === '') {
            msg = 'All fields are mandatory'
        }
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress))) {
            msg = 'Please enter a valid email address'
        }
        else {
            var inputObj = {
                json: {
                    username: this.state.emailId,
                    password: this.state.pwd,
                }
            };
            LoginService.signInUsingEmail(JSON.stringify(inputObj))
                .then((res) => {
                    console.log(res);
                    let status = res.status;
                    console.log(status);
                    if (status) {
                        let apiKey = res.api_key;
                        AsyncStorage.setItem('userToken', apiKey)
                            .then(() => {
                                const navigation = this.props.navigation.dangerouslyGetParent();
                                const parentNav = navigation.dangerouslyGetParent();
                                parentNav.navigate('AuthLoading');
                            });
                    }
                    else {
                        msg = res.message;
                        this.setState(state => ({
                            isLoading: false,
                            resultMsg: msg,
                            visible: true
                        }));
                    }
                })
                .catch((e) => console.log(e));
        }
    }

    render() {
        return (
            <View style={LoginStyles.container}>
                <ImageBackground source={require('../../assets/images/signin_back.jpg')} style={{ width: '100%', height: '100%', }}>
                    <View style={LoginStyles.signInContentContainer}>
                        <Text style={LoginStyles.appName}>
                            Login
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
                                icon="cancel"
                                mode="contained"
                                color={Colors.red500}
                                onPress={() => this.props.navigation.navigate('Login')}
                            >
                                Cancel
                            </Button>
                            <Button
                                style={LoginStyles.loginPageButton}
                                icon="mail"
                                mode="contained"
                                color={Colors.violet900}
                                onPress={this._logIn.bind(this)}
                            >
                                Sign In
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
                </ImageBackground>
            </View>
        );
    }
}