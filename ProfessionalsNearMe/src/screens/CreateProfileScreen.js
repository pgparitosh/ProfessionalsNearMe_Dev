import React from 'react';
import { View } from 'react-native';
import ProfileScreenStyles from '../styles/ProfileScreen.Styles';
import SaveProfileScreen from './SaveProfileScreen';

export default class CreateProfileScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={ProfileScreenStyles.container}>
                <SaveProfileScreen navigation={this.props.navigation} />
            </View>
        );
    }
}
