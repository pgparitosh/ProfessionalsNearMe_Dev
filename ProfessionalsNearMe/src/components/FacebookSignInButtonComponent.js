import React from 'react';
import { Button, Colors } from 'react-native-paper';
import LoginService from '../services/LoginService.js';
import LoginStyles from '../styles/Login.Styles.js';

export default class FacebookSignInButtonComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        loading: false
    }

    loginWithFacebook() {
        this.setState(
            { loading: true }
        );
        LoginService._logInWithFacebook();
        this.setState(
            { loading: false }
        );
    }

    render() {
        return (
            <Button
                onPress={this.loginWithFacebook.bind(this)}
                style={LoginStyles.externalLoginButton}
                icon={require('../../assets/icons/login-facebook-icon.png')}
                mode="contained"
                color={Colors.blue900}
                loading={this.state.loading}
                disabled={this.state.loading}
            >
                Sign In with Facebook
            </Button>
        );
    }
}