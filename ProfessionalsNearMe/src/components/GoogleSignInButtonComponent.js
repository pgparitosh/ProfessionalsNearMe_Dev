import React from 'react';
import { Button, Colors } from 'react-native-paper';
import LoginService from '../services/LoginService.js';
import LoginStyles from '../styles/Login.Styles.js';

export default class GoogleSignInButtonComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        loading: false
    }

    loginWithGoogle() {
        this.setState(
            { loading: true }
        );
        LoginService._logInWithGoogle();
        this.setState(
            { loading: false }
        );
    }

    render() {
        return (
            <Button
                onPress={this.loginWithGoogle.bind(this)}
                style={LoginStyles.externalLoginButton}
                icon={require('../../assets/icons/login-google-icon.png')}
                mode="contained"
                color={Colors.red900}
                loading={this.state.loading}
                disabled={this.state.loading}
            >
                Sign In with Google
            </Button>
        );
    }
}