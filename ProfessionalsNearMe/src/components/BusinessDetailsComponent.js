import React from 'react';
import { View, Picker, Button, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import { ImagePicker } from 'expo';
import ProfileScreenStyles from '../styles/ProfileScreen.Styles';

export default class BusinessDetailsComponent extends React.Component {
    state = {
        businessName: '',
        businessPhone: '',
        alternatePhone: '',
        businessEmail: '',
        category: '',
        subCategory: '',
        rate: '',
        duration: '',
        description: '',
    }

    constructor(props) {
        super(props);
        this._handleTextChange = this._handleTextChange.bind(this);
    }

    componentDidMount() {
        this.setState({
            businessName: 'PgToSh Photography Team'
        });
    }

    _handleTextChange() {
        let businessDetails = {
            businessName: this.state.businessName,
            businessPhone: this.state.businessPhone,
            alternatePhone: this.state.alternatePhone,
            businessEmail: this.state.businessEmail,
            category: this.state.category,
            subCategory: this.state.subCategory,
            rate: this.state.rate,
            duration: this.state.duration,
            description: this.state.description,
        }
        this.props.onNextClick(businessDetails);
    }

    render() {
        if (this.props.currentPosition === 1) {
            return (
                <View>
                    <TextInput
                        label='Business Name'
                        mode='flat'
                        placeholder='Enter your business name'
                        value={this.state.businessName}
                        onChangeText={(businessName) => this.setState({ businessName })}
                        onBlur={this._handleTextChange.bind(this)}
                    />
                    <TextInput
                        label='Business Phone Number'
                        mode='flat'
                        placeholder='Enter your business phone number'
                        style={ProfileScreenStyles.inputFields}
                        value={this.state.businessPhone}
                        onChangeText={(businessPhone) => this.setState({ businessPhone })}
                        onBlur={this._handleTextChange.bind(this)}
                    />
                    <TextInput
                        label='Alternate Phone Number'
                        mode='flat'
                        placeholder='Enter your alternate phone number'
                        style={ProfileScreenStyles.inputFields}
                        value={this.state.alternatePhone}
                        onChangeText={(alternatePhone) => this.setState({ alternatePhone })}
                        onBlur={this._handleTextChange.bind(this)}
                    />
                    <TextInput
                        label='Business email Address'
                        mode='flat'
                        placeholder='Enter your business email address'
                        style={ProfileScreenStyles.inputFields}
                        value={this.state.businessEmail}
                        onChangeText={(businessEmail) => this.setState({ businessEmail })}
                        onBlur={this._handleTextChange.bind(this)}
                    />
                    <Picker
                        selectedValue={this.state.category}
                        style={[ProfileScreenStyles.backgroundGrey, ProfileScreenStyles.inputFields]}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ category: itemValue })
                        }>
                        <Picker.Item label="--Select your category--" value="-1" />
                        <Picker.Item label="Photography" value="male" />
                        <Picker.Item label="Videography" value="female" />
                        <Picker.Item label="Miscellaneous" value="miscellaneous" />
                    </Picker>
                    <Picker
                        selectedValue={this.state.subCategory}
                        style={[ProfileScreenStyles.backgroundGrey, ProfileScreenStyles.inputFields]}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ subCategory: itemValue })
                        }>
                        <Picker.Item label="--Select your sub category category--" value="-1" />
                        <Picker.Item label="Wedding Photographer" value="weddingphotographer" />
                        <Picker.Item label="Wild Life Photographer" value="wildlifephotographer" />
                        <Picker.Item label="Celebrity Photgraher" value="celebrityphotographer" />
                    </Picker>
                    <TextInput
                        label='Rate'
                        mode='flat'
                        placeholder='Enter the price you would like to charge'
                        style={ProfileScreenStyles.inputFields}
                        value={this.state.rate}
                        onChangeText={(rate) => this.setState({ rate })}
                        onBlur={this._handleTextChange.bind(this)}
                    />
                    <Picker
                        selectedValue={this.state.duration}
                        style={[ProfileScreenStyles.backgroundGrey, ProfileScreenStyles.inputFields]}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ duration: itemValue })
                        }>
                        <Picker.Item label="--Select your price per--" value="-1" />
                        <Picker.Item label="Hour" value="hour" />
                        <Picker.Item label="Occassion" value="occassion" />
                        <Picker.Item label="Week" value="week" />
                        <Picker.Item label="Month" value="month" />
                    </Picker>
                    <TextInput
                        label='Description'
                        mode='flat'
                        placeholder='Describe your business'
                        style={ProfileScreenStyles.inputFields}
                        value={this.state.description}
                        onChangeText={(description) => this.setState({ description })}
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