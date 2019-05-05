import React from 'react';
import { View, Picker } from 'react-native';
import { TextInput } from 'react-native-paper';
import ProfileScreenStyles from '../styles/ProfileScreen.Styles';

export default class BusinessAddressDetailsComponent extends React.Component {
    state = {
        addressLine1: '',
        addressLine2: '',
        addressLine3: '',
        city: '',
        state: '',
        country: '',
        pincode: '',
    }

    constructor(props) {
        super(props);
        this._handleTextChange = this._handleTextChange.bind(this);
    }

    componentDidMount() {
        this.setState({
            addressLine1: '39, Ved Building',
        });
    }

    _handleTextChange() {
        let businessAddressData = {
            addressLine1: this.state.addressLine1,
            addressLine2: this.state.addressLine2,
            addressLine3: this.state.addressLine3,
            city: this.state.city,
            state: this.state.state,
            country: this.state.country,
            pincode: this.state.pincode,
        }
        this.props.onNextClick(businessAddressData);
    }

    render() {
        if (this.props.currentPosition === 2) {
            return (
                <View>
                    <TextInput
                        label='Address Line 1'
                        mode='flat'
                        placeholder='Enter your building/street name'
                        value={this.state.addressLine1}
                        onChangeText={(addressLine1) => this.setState({ addressLine1 })}
                        onBlur={this._handleTextChange.bind(this)}
                    />
                    <TextInput
                        label='Address Line 2'
                        mode='flat'
                        placeholder='Enter area name'
                        style={ProfileScreenStyles.inputFields}
                        value={this.state.addressLine2}
                        onChangeText={(addressLine2) => this.setState({ addressLine2 })}
                        onBlur={this._handleTextChange.bind(this)}
                    />
                    <TextInput
                        label='Address Line 3'
                        mode='flat'
                        placeholder='Enter landmark near you'
                        style={ProfileScreenStyles.inputFields}
                        value={this.state.addressLine3}
                        onChangeText={(addressLine3) => this.setState({ addressLine3 })}
                        onBlur={this._handleTextChange.bind(this)}
                    />
                    <Picker
                        selectedValue={this.state.state}
                        style={[ProfileScreenStyles.backgroundGrey, ProfileScreenStyles.inputFields]}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ state: itemValue })
                        }>
                        <Picker.Item label="--Select your state--" value="-1" />
                        <Picker.Item label="Gujarat" value="gujarat" />
                        <Picker.Item label="Maharashtra" value="maharashtra" />
                        <Picker.Item label="Rajasthan" value="rajasthan" />
                        <Picker.Item label="Madhya Pradesh" value="madhyapradesh" />
                    </Picker>
                    <Picker
                        selectedValue={this.state.city}
                        style={[ProfileScreenStyles.backgroundGrey, ProfileScreenStyles.inputFields]}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ city: itemValue })
                        }>
                        <Picker.Item label="--Select your city--" value="-1" />
                        <Picker.Item label="Ahmedabad" value="ahmedabad" />
                        <Picker.Item label="Vadodara" value="vadodara" />
                        <Picker.Item label="Surat" value="surat" />
                        <Picker.Item label="Rajkot" value="rajkot" />
                        <Picker.Item label="Gandhinagar" value="gandhinagar" />
                        <Picker.Item label="Mumbai" value="mumbai" />
                        <Picker.Item label="Pune" value="pune" />
                        <Picker.Item label="Nagpur" value="nagpur" />
                        <Picker.Item label="Aurangabad" value="aurangabad" />
                        <Picker.Item label="Udaipur" value="udaipur" />
                        <Picker.Item label="Jaipur" value="jaipur" />
                        <Picker.Item label="Falna" value="flana" />
                        <Picker.Item label="Indore" value="indore" />
                        <Picker.Item label="Bhopal" value="bhopal" />
                        <Picker.Item label="Jabalpur" value="jabalpur" />
                        <Picker.Item label="Ujjain" value="ujjain" />
                    </Picker>
                    <TextInput
                        label='Pincode'
                        mode='flat'
                        placeholder='Enter your pincode'
                        style={ProfileScreenStyles.inputFields}
                        value={this.state.pincode}
                        onChangeText={(pincode) => this.setState({ pincode })}
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