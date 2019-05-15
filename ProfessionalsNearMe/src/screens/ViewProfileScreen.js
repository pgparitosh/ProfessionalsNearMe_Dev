import * as React from 'react';
import { ScrollView, View, AsyncStorage, Linking } from 'react-native';
import { Appbar, Button, Portal, Dialog, TextInput, Snackbar } from 'react-native-paper';
import GlobalStyles from '../styles/GlobalStyles.js';
import StarRating from 'react-native-star-rating';
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
        },
    }

    state = {
        starCount: 0,
        review: '',
        ratingPopupVisible: false,
        paymentPopupVisible: false,
        showSnackbar: false,
        resultMsg: '',
    }

    _chat() {

    }

    _rate() {
        this.setState({
            ratingPopupVisible: true,
        });
    }

    _pay() {
        this.setState({
            paymentPopupVisible: true,
        });
    }

    _showRatings() {
        const userProfileId = 2;
        this.props.navigation.navigate('ViewProfessionalRatings', { profileId: userProfileId });
    }

    _onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }

    _payMoney() {
        const transactionId = "transactionId";
        const message = `message`;
        const payTo = "9425437800@upi";
        const payName = "Name";
        const amount = 1;
        let url = `upi://pay?pa=${payTo}&pn=${payName}&tr=${transactionId}&tn=${message}&am=${amount}`;
        this.setState({ paymentPopupVisible: false });
        Linking.canOpenURL(url)
            .then((supported) => {
                if (!supported) {
                    this.setState({
                        showSnackbar: true,
                        resultMsg: 'Sorry. UPI Payments are not supported on your device.'
                    });
                } else {
                    return Linking.openURL(url);
                }
            })
            .catch((err) => console.error('An error occurred', err));
    }

    async _saveRating() {
        await AsyncStorage.getItem('userProfileId')
            .then((retrievedId) => {
                const ratings = this.state.starCount;
                const review = this.state.review;
                const userProfileId = 2;
                var ratingsObj = {
                    json: {
                        ratings: ratings,
                        review: review,
                        userProfileId: userProfileId,
                        loggedInUserProfileId: retrievedId,
                    }
                }
                // Service call
                console.log(ratingsObj);
                this.setState({ ratingPopupVisible: false });
            })
            .catch((e) => console.log(e));
    }

    _goBack() {
        this.props.navigation.goBack();
    }

    _showPortfolioImages() {
        const navigation = this.props.navigation.dangerouslyGetParent();
        navigation.navigate('ViewPortfolio', {
            userDetails: this.userDetails,
        });
    }

    render() {

        return (
            <View style={GlobalStyles.surfaceContainer}>
                <ScrollView>
                    <Appbar.Header>
                        <Appbar.BackAction
                            onPress={this._goBack.bind(this)}
                        />
                        <Appbar.Content
                            title={"Pgtosh Photography Team"}
                        />
                        <Appbar.Action
                            icon="chat"
                            onPress={this._chat.bind(this)} />
                        <Appbar.Action
                            icon="payment"
                            onPress={this._pay.bind(this)} />
                        <Appbar.Action
                            icon="star"
                            onPress={this._rate.bind(this)} />
                    </Appbar.Header>
                    <ViewBasicDetailsComponent userDetails={this.userDetails} />
                    {false ? <ViewPersonalContactDetailsComponent userDetails={this.userDetails} /> : null}
                    <ViewBusinessDetailsComponent userDetails={this.userDetails} />
                    <ViewBusinessAddressDetailsComponent userDetails={this.userDetails} />
                    <View style={{ margin: 20 }}>
                        <Button mode="contained"
                            onPress={this._showPortfolioImages.bind(this)}>
                            View Portfolio Images
                        </Button>
                    </View>
                    <View style={{ marginBottom: 20, marginRight: 20, marginLeft: 20 }}>
                        <Button mode="contained"
                            onPress={this._showRatings.bind(this)}>
                            View Ratings
                        </Button>
                    </View>
                </ScrollView>
                <Portal style={{ height: 160, maxHeight: 160, flex: 0 }}>
                    <Dialog
                        style={{
                            elevation: 1,
                            backgroundColor: "white",
                            flex: 1,
                            justifyContent: "center",
                            height: 250,
                            maxHeight: 250,
                            width: '90%',
                            marginLeft: 20,
                            marginRight: 20,
                        }}
                        visible={this.state.ratingPopupVisible}
                        onDismiss={() => this.setState({ ratingPopupVisible: false })}>
                        <Dialog.Title>Rate Professional</Dialog.Title>
                        <Dialog.Content>
                            <StarRating
                                disabled={false}
                                maxStars={5}
                                rating={this.state.starCount}
                                starSize={35}
                                fullStarColor="#6200ee"
                                halfStarColor="#6200ee"
                                selectedStar={(rating) => this._onStarRatingPress(rating)}
                            />
                            <TextInput
                                label='Review'
                                style={{ marginTop: 20 }}
                                mode='flat'
                                placeholder='Enter your review details'
                                value={this.state.review}
                                onChangeText={(review) => this.setState({ review })}
                            />
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={() => this.setState({ ratingPopupVisible: false })} color="grey">Cancel</Button>
                            <Button onPress={this._saveRating.bind(this)}>Save</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
                <Portal style={{ height: 160, maxHeight: 160, flex: 0 }}>
                    <Dialog
                        style={{
                            elevation: 1,
                            backgroundColor: "white",
                            flex: 1,
                            justifyContent: "center",
                            height: 250,
                            maxHeight: 250,
                            width: '90%',
                            marginLeft: 20,
                            marginRight: 20,
                        }}
                        visible={this.state.paymentPopupVisible}
                        onDismiss={() => this.setState({ paymentPopupVisible: false })}>
                        <Dialog.Title>Pay Professional</Dialog.Title>
                        <Dialog.Content>
                            <TextInput
                                label='Amount'
                                style={{ marginTop: 20 }}
                                mode='flat'
                                placeholder='Enter the amount to be paid'
                                value={this.state.amount}
                                keyboardType='numeric'
                                onChangeText={(amount) => this.setState({ amount })}
                            />
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={() => this.setState({ paymentPopupVisible: false })} color="grey">Cancel</Button>
                            <Button onPress={this._payMoney.bind(this)}>Pay</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
                <Snackbar
                    visible={this.state.showSnackbar}
                    onDismiss={() => this.setState({ showSnackbar: false })}
                    duration={10000}
                    action={{
                        label: 'Ok',
                        onPress: () => {
                            this.setState({ showSnackbar: false })
                        },
                    }}
                >
                    {this.state.resultMsg}
                </Snackbar>
            </View>
        );
    }
}
