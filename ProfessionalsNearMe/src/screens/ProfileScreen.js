import * as React from 'react';
import { ScrollView, View } from 'react-native';
import { Surface, Text, Appbar, Button } from 'react-native-paper';
import GlobalStyles from '../styles/GlobalStyles.js';
import ProfileScreenStyles from '../styles/ProfileScreen.Styles.js';
import ViewBasicDetailsComponent from '../components/ViewBasicDetailsComponent.js';
import ViewPersonalContactDetailsComponent from '../components/ViewPersonalContactDetailsComponent.js';
import ViewBusinessDetailsComponent from '../components/ViewBusinessDetailsComponent.js';
import ViewBusinessAddressDetailsComponent from '../components/ViewBusinessAddressDetailsComponent.js';

export default class ProfileScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    userDetails = {
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
        }
    }

    _editProfile() {
        const navigation = this.props.navigation.dangerouslyGetParent();
        navigation.navigate('SaveProfile', {
             userDetails: this.userDetails,
             caller: 'profile',
        });
    }

    _showPortfolioImages() {
        //console.log(this.props.navigation);
        const navigation = this.props.navigation.dangerouslyGetParent();

        navigation.navigate('ViewPortfolio', {
             userDetails: this.userDetails,
        });
    }

    render() {
        return (
            <Surface style={GlobalStyles.surfaceContainer}>
                <ScrollView>
                    <Appbar.Header>
                        <Appbar.Content
                            title={"My Profile"}
                        />
                        <Appbar.Action
                            icon="create"
                            onPress={this._editProfile.bind(this)} />
                    </Appbar.Header>
                    <ViewBasicDetailsComponent userDetails={this.userDetails} />
                    <ViewPersonalContactDetailsComponent userDetails={this.userDetails} />
                    <ViewBusinessDetailsComponent userDetails={this.userDetails} />
                    <ViewBusinessAddressDetailsComponent userDetails={this.userDetails} />
                    <View style={{margin: 20}}>
                        <Button mode="contained"
                                onPress={this._showPortfolioImages.bind(this)}>
                            View Portfolio Images
                        </Button>
                    </View>
                </ScrollView>
            </Surface>
        );
    }
}
