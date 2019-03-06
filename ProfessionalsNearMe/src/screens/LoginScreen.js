import React from 'react';
import { Surface } from 'react-native-paper';
import GoogleSignInButtonComponent from '../components/GoogleSignInButtonComponent';
import FacebookSignInButtonComponent from '../components/FacebookSignInButtonComponent';

export default class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Surface>
                <GoogleSignInButtonComponent />
                <FacebookSignInButtonComponent />
            </Surface>
        );
    }
}