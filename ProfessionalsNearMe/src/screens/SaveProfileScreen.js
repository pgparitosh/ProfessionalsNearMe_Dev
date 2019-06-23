import React from 'react';
import { View, ScrollView, AsyncStorage, KeyboardAvoidingView, Keyboard } from 'react-native';
import { Button, Headline, Appbar } from 'react-native-paper';
import StepIndicator from 'react-native-step-indicator';
import ProfileScreenStyles from '../styles/ProfileScreen.Styles';
import BasicDetailsComponent from '../components/BasicDetailsComponent';
import BusinessDetailsComponent from '../components/BusinessDetailsComponent';
import BusinessAddressDetailsComponent from '../components/BusinessAddressDetailsComponent';
import PortfolioComponent from '../components/PortfolioDetailsComponent';

const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#6200ee',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#6200ee',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#6200ee',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#6200ee',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#6200ee',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#6200ee'
}



export default class SaveProfileScreen extends React.Component {

    state = {
        currentPosition: 0,
        buttonText: 'Next',
        headline: '',
        basicDetails: {
            firstName: '',
            lastName: '',
            email: '',
            phoneNo: '',
            gender: '',
            age: '',
        },
        businessAddressDetails: {
            businessName: '',
            businessPhone: '',
            alternatePhone: '',
            businessEmail: '',
            addressLine1: '',
            addressLine2: '',
            addressLine3: '',
            city: '',
            state: '',
            country: '',
            pincode: '',
        },
        businessDetails: {
            businessName: '',
            businessPhone: '',
            alternatePhone: '',
            businessEmail: '',
            category: '',
            subCategory: '',
            rate: '',
            duration: '',
            description: '',
        },
        portfolioDetails: {
            images: null,
        },
        keyboardVisible: false,
    }

    caller = '';

    constructor(props) {
        super(props);
        this._save = this._save.bind(this);
    }

    componentWillMount() {
        this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
        this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
    }

    componentWillUnmount() {
        this.keyboardDidShowSub.remove();
        this.keyboardDidHideSub.remove();
    }

    keyboardDidShow = (event) => {
        this.setState({ keyboardVisible: true });
    };

    keyboardDidHide = (event) => {
        this.setState({ keyboardVisible: false });
    };

    componentDidMount() {
        const { navigation } = this.props;
        //console.log('Navigation' + navigation);
        if (navigation) {
            this.caller = navigation.getParam('caller');
        }
        let currentPos = this.state.currentPosition;
        this.setState({
            basicDetails: this.userData,
            headline: this.headlines[currentPos],
        });
    }

    headlines = [
        'Basic Details',
        'Business Details',
        'Business Address Details',
        'Portfolio (Optional)',
    ];

    userData = {
        firstName: 'Paritosh',
        lastName: 'Gohel',
        email: 'pgparitoshgohel@gmail.com',
        phoneNo: '7405423686',
        gender: 'male',
        age: '26',
    }

    businessAddressData = {
        addressLine1: '39, Neg Complex',
        addressLine2: 'Satellite',
        addressLine3: 'Nr. Shivranjni Cross Road',
        city: 'Ahmedabad',
        state: 'Gujarat',
        country: 'India',
        pincode: '380015',
    }

    businessDetails = {
        businessName: 'Pgtosh Photographers',
        businessPhone: '079 26779999',
        alternatePhone: '9876543120',
        businessEmail: 'pgphotos@photographers.com',
        category: 'Photography',
        subCategory: 'Wedding Photographer',
        rate: '10000',
        duration: 'hour',
        description: 'I am wedding photgrapher working since 13 years in the industry. I have covered many celebrity weddings as well',
    }

    portfolioDetails = {
        images: null,
    }


    _cancel() {
        const { navigation } = this.props;
        navigation.goBack();
    }

    _prev() {
        let currentPos = this.state.currentPosition;
        let btnText = 'Next';
        this.setState({
            currentPosition: currentPos - 1,
            buttonText: btnText,
            headline: this.headlines[currentPos - 1],
        });
    }

    _save() {
        let currentPos = this.state.currentPosition;
        let btnText = 'Next';
        if (currentPos === 2) {
            btnText = 'Save';
        }
        if (currentPos === 3) {
            let userProfileDetails = {
                json: {
                    basicDetails: this.state.basicDetails,
                    businessDetails: this.state.businessDetails,
                    businessAddressDetails: this.state.businessAddressDetails,
                    portfolioDetails: this.state.portfolioDetails,
                }
            }
            console.log(userProfileDetails);
            // service call to save the user profile details
            // once the service call is successful, navigate to view profile screen
            // based on the result received set the user profile id in async storage
            AsyncStorage.setItem('userProfileId', '1')
                .then(() => {
                    if (this.caller === 'profile') {
                        this.props.navigation.goBack();
                    }
                    else {
                        this.props.navigation.navigate('Root');
                    }
                });

        }
        else {
            this.setState({
                currentPosition: currentPos + 1,
                buttonText: btnText,
                headline: this.headlines[currentPos + 1],
            });
        }
    }

    _handleBasicDetails(userData) {
        let basicDetails = {
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            phoneNo: userData.phoneNo,
            gender: userData.gender,
            age: userData.age,
        }
        this.setState({ basicDetails: basicDetails });
    }

    _handleBusinessDetails(businessDetails) {
        let businessDetailsData = {
            businessName: businessDetails.businessName,
            businessPhone: businessDetails.businessPhone,
            alternatePhone: businessDetails.alternatePhone,
            businessEmail: businessDetails.businessEmail,
            category: businessDetails.category,
            subCategory: businessDetails.subCategory,
            rate: businessDetails.rate,
            duration: businessDetails.duration,
            description: businessDetails.description,
        }
        this.setState({ businessDetails: businessDetailsData });
    }

    _handleBusinessAddressDetails(businessAddressDetails) {
        let businessAddressDetailsData = {
            addressLine1: businessAddressDetails.addressLine1,
            addressLine2: businessAddressDetails.addressLine2,
            addressLine3: businessAddressDetails.addressLine3,
            city: businessAddressDetails.city,
            state: businessAddressDetails.state,
            country: businessAddressDetails.country,
            pincode: businessAddressDetails.pincode,
        }
        this.setState({ businessAddressDetails: businessAddressDetailsData });
    }

    _handlePortfolioDetails(portfolioDetails) {
        let portfolioData = {
            portfolioImages: portfolioDetails.images
        }
        this.setState({ portfolioDetails: portfolioData });
    }

    onPageChange(position) {
        this.setState({ currentPosition: position });
    }

    render() {
        currentPos = this.state.currentPosition;
        return (
            <View style={ProfileScreenStyles.container}>
                <Appbar.Header>
                    <Appbar.Content
                        title={this.caller === 'profile' ? "Save Profile" : "Create Profile"}
                    />
                    <Appbar.Action
                        disabled={this.caller !== 'profile'}
                        icon="close"
                        onPress={this._cancel.bind(this)} />
                </Appbar.Header>
                <View style={ProfileScreenStyles.inputFields}>
                    <StepIndicator
                        customStyles={customStyles}
                        currentPosition={this.state.currentPosition}
                        stepCount={4}
                    />
                    <Headline style={ProfileScreenStyles.headline}>{this.state.headline}</Headline>
                </View>
                <KeyboardAvoidingView behavior={'padding'} style={{ flex: 1 }} keyboardVerticalOffset={60}>
                    <ScrollView>
                        <View style={[ProfileScreenStyles.inputContainer]}>
                            <BasicDetailsComponent
                                currentPosition={this.state.currentPosition}
                                userData={this.state.userData}
                                onNextClick={this._handleBasicDetails.bind(this)} />
                            <BusinessDetailsComponent
                                currentPosition={this.state.currentPosition}
                                userData={this.state.businessDetails}
                                onNextClick={this._handleBusinessDetails.bind(this)} />
                            <BusinessAddressDetailsComponent
                                currentPosition={this.state.currentPosition}
                                userData={this.state.businessAddressDetails}
                                onNextClick={this._handleBusinessAddressDetails.bind(this)} />
                            <PortfolioComponent
                                currentPosition={this.state.currentPosition}
                                onNextClick={this._handlePortfolioDetails.bind(this)} />
                        </View>
                        {/* {this.state.keyboardVisible ? <View style={{ height: 60 }}></View> : null} */}
                    </ScrollView>
                </KeyboardAvoidingView>
                <View style={ProfileScreenStyles.buttonAlignment}>
                    <Button mode="contained"
                        disabled={this.state.currentPosition === 0}
                        onPress={this._prev.bind(this)}>
                        Prev
                        </Button>
                    <Button mode="contained"
                        onPress={this._save.bind(this)}>
                        {this.state.buttonText}
                    </Button>
                </View>
            </View>
        );
    }
}
