import React from 'react';
import { ScrollView, View } from 'react-native';
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
            <ScrollView style={LoginStyles.container}>
                <View style={LoginStyles.logoContainer}>
                    <Avatar.Image
                        size={150}
                        source={require('../../assets/icons/teamwork.png')}
                        style={LoginStyles.avatarImage} />
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
            </ScrollView>

        );
    }
}