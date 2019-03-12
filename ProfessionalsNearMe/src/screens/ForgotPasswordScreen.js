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
    }

    _goBack() {
        // code for navigating back to login page
        this.props.navigation.navigate('SignInUsingEmail');
    }

    _sendEmail() {
        var emailAddress = this.state.emailId;
        var msg = '';
        if (emailAddress.trim() === '') {
            msg = 'Email address cannot be black'
        }
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress))) {
            msg = 'Please enter a valid email address'
        }
        else {
            // Make a service call
            msg = 'A temporary password has been sent to your registered email address. Please login using the temporary password.'
        }
        this.setState(state => ({
            resultMsg: msg,
            visible: true
            })
        );
    }

    render() {
        var forgotPasswordInstructions = '**An email with temporary password would be sent to your registered email address.';
        return (
            <View style={LoginStyles.container}>
                <View style={LoginStyles.signInContentContainer}>
                    <Text style={LoginStyles.appName}>
                        Forgot Password
                    </Text>
                    <TextInput
                        label='Email'
                        mode='flat'
                        placeholder='Enter your registered Email Address'
                        style={LoginStyles.inputFields}
                        value={this.state.emailId}
                        onChangeText={(emailId) => this.setState({ emailId })}
                    />
                    <View style={LoginStyles.loginButtons}>
                        <Button
                            style={LoginStyles.loginPageButton}
                            icon="vpn-key"
                            mode="contained"
                            color={Colors.violet900}
                            onPress={this._sendEmail.bind(this)}
                        >
                            Submit
                        </Button>
                        <Button
                            style={LoginStyles.loginPageButton}
                            icon="arrow-back"
                            mode="contained"
                            color={Colors.red500}
                            onPress={this._goBack.bind(this)}
                        >
                            Go Back
                        </Button>
                    </View>
                </View>
                <Text style={LoginStyles.forgotPasswordText}>
                    {forgotPasswordInstructions}
                </Text>
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
