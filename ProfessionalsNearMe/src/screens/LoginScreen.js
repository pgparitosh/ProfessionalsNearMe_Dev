import React from 'react';
import { ScrollView, View, ImageBackground } from 'react-native';
import { Button, Avatar, Text, Colors } from 'react-native-paper';
import GoogleSignInButtonComponent from '../components/GoogleSignInButtonComponent';
import FacebookSignInButtonComponent from '../components/FacebookSignInButtonComponent';
import LoginStyles from '../styles/Login.Styles';

export default class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={LoginStyles.container}>
                <ImageBackground source={require('../../assets/images/back.jpg')} style={{ width: '100%', height: '100%' }}>
                    <View style={LoginStyles.logoContainer}>
                        <Text style={LoginStyles.appName}>
                            EXPERTLINK
                    </Text>
                        <Text style={LoginStyles.tagLine}>
                            Grow Your Business
                    </Text>
                    </View>
                    <View style={LoginStyles.contentContainer}>
                        <GoogleSignInButtonComponent />
                        <FacebookSignInButtonComponent />
                        <Button
                            style={LoginStyles.externalLoginButton}
                            icon="mail"
                            mode="contained"
                            color={Colors.pink50}
                            onPress={() => this.props.navigation.navigate('SignInUsingEmail')}
                        >
                            Sign In using Email
                    </Button>
                        <Text style={LoginStyles.separator}>
                            OR
                    </Text>
                        <Button
                            style={LoginStyles.externalLoginButton}
                            icon="person-add"
                            mode="contained"
                            color={Colors.violet900}
                            onPress={() => this.props.navigation.navigate('SignUpUsingEmail')}
                        >
                            Create account
                    </Button>
                    </View>
                </ImageBackground>
            </View>

        );
    }
}