import React from 'react';
import { View, Picker } from 'react-native';
import { TextInput } from 'react-native-paper';
import ProfileScreenStyles from '../styles/ProfileScreen.Styles';

export default class BasicDetailsComponent extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNo: '',
        gender: '',
        age: '',
    }

    constructor(props) {
        super(props);
        this._handleTextChange = this._handleTextChange.bind(this);
    }

    componentDidMount() {
        this.setState({
            firstName: 'PgToSh'
        });
    }

    _handleTextChange() {
        let userData = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phoneNo: this.state.phoneNo,
            gender: this.state.gender,
            age: this.state.age,
        }
        this.props.onNextClick(userData);
    }

    render() {
        if (this.props.currentPosition === 0) {
            return (
                <View>
                    <TextInput
                        label='First Name'
                        mode='flat'
                        placeholder='Enter your first name'
                        value={this.state.firstName}
                        onChangeText={(firstName) => this.setState({ firstName })}
                        onBlur={this._handleTextChange.bind(this)}
                    />
                    <TextInput
                        label='Last Name'
                        mode='flat'
                        placeholder='Enter your last name'
                        style={ProfileScreenStyles.inputFields}
                        value={this.state.lastName}
                        onChangeText={(lastName) => this.setState({ lastName })}
                        onBlur={this._handleTextChange.bind(this)}
                    />
                    <TextInput
                        label='Email Address'
                        mode='flat'
                        placeholder='Enter your email address'
                        style={ProfileScreenStyles.inputFields}
                        value={this.state.email}
                        onChangeText={(email) => this.setState({ email })}
                        onBlur={this._handleTextChange.bind(this)}
                        disabled={true}
                    />
                    <TextInput
                        label='Phone No'
                        mode='flat'
                        placeholder='Enter your phone number'
                        style={ProfileScreenStyles.inputFields}
                        value={this.state.phoneNo}
                        onChangeText={(phoneNo) => this.setState({ phoneNo })}
                        onBlur={this._handleTextChange.bind(this)}
                    />
                    <Picker
                        selectedValue={this.state.gender}
                        style={[ProfileScreenStyles.backgroundGrey, ProfileScreenStyles.inputFields]}
                        itemStyle={{height: 60}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ gender: itemValue })
                        }>
                        <Picker.Item label="--Select your gender--" value="-1" />
                        <Picker.Item label="Male" value="male" />
                        <Picker.Item label="Female" value="female" />
                        <Picker.Item label="Other" value="other" />
                    </Picker>
                    <TextInput
                        label='Age'
                        mode='flat'
                        placeholder='Enter your age'
                        style={ProfileScreenStyles.inputFields}
                        value={this.state.age}
                        onChangeText={(age) => this.setState({ age })}
                        onBlur={this._handleTextChange.bind(this)}
                    />
                </View>
            );
        }
        else {
            return null;
        }
    }
}