import * as React from 'react';
import { View, AsyncStorage } from 'react-native';
import { List, TouchableRipple, Portal, Dialog, Text, TextInput, Button, Snackbar } from 'react-native-paper';
import HeaderComponent from '../components/HeaderComponent.js';
import GlobalStyles from '../styles/GlobalStyles';

export default class SettingsScreen extends React.Component {

    constructor(props) {
        super(props);
        this._showPrivacySettings = this._showPrivacySettings.bind(this);
        this._onLogout = this._onLogout.bind(this);
        this._onConfirmLogOut = this._onConfirmLogOut.bind(this);
        this._showFeedbackBox = this._showFeedbackBox.bind(this);
        this._sendFeedback = this._sendFeedback.bind(this);
        this._showChangePasswordPopup = this._showChangePasswordPopup.bind(this);
        this._updatePassword = this._updatePassword.bind(this);
        this._showPrivacyPolicy = this._showPrivacyPolicy.bind(this);
    }

    state = {
        logoutPopupVisible: false,
        feedbackPopupVisible: false,
        changePasswordPopupVisible: false,
        snackbarVisible: false,
        feedback: '',
        resultMsg: '',
        hasValidationError: false,
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
        validationMessage: '',
    }

    _showFeedbackBox() {
        this.setState({ feedbackPopupVisible: true });
    }

    _sendFeedback() {
        const feedback = this.state.feedback;
        console.log(feedback);
        // service call
        this.setState({
            resultMsg: 'Feedback submitted successfully.',
            feedbackPopupVisible: false,
            snackbarVisible: true,
        });
    }

    _onLogout() {
        this.setState({ logoutPopupVisible: true });
    }

    _showChangePasswordPopup() {
        this.setState({ changePasswordPopupVisible: true });
    }

    _updatePassword() {
        const currentPassword = this.state.currentPassword;
        const confirmPassword = this.state.confirmPassword;
        const newPassword = this.state.newPassword;
        if (currentPassword.trim() === '' || newPassword.trim() === '' || confirmPassword.trim() === '') {
            this.setState({
                resultMsg: 'All fields are mandatory',
                hasValidationError: true,
                validationMessage: 'All fields are mandatory',
                // changePasswordPopupVisible: false,
                // snackbarVisible: true,
            });
        }
        else if (newPassword.trim() !== confirmPassword.trim()) {
            this.setState({
                resultMsg: 'New password and confirm password do not match',
                hasValidationError: true,
                validationMessage: 'New password and confirm password do not match',
                // changePasswordPopupVisible: false,
                // snackbarVisible: true,
            });
        }
        else {
            console.log(newPassword);
            // service call
            this.setState({
                resultMsg: 'Password changed successfully',
                hasValidationError: false,
                validationMessage: '',
                newPassword: '',
                currentPassword: '',
                confirmPassword: '',
                changePasswordPopupVisible: false,
                snackbarVisible: true,
            });
        }
    }

    _onConfirmLogOut() {
        const parentNav = this.props.navigation.dangerouslyGetParent();
        
        AsyncStorage.clear().then(
            () => { parentNav.navigate('AuthLoading') }
        );

    }

    _showPrivacySettings() {
        console.log("pressed")
    }

    _showPrivacyPolicy() {
        console.log("Privacy policy settings");
    }

    render() {
        return (
            <View style={{ height: '100%' }}>
                <HeaderComponent title="Settings" subtitle="One place to manage all your settings" />
                <View style={{
                    marginLeft: 10,
                    marginRight: 10,
                    marginBottom: 20,
                }}>
                    <TouchableRipple onPress={this._showPrivacySettings} style={GlobalStyles.bottomBorder}>
                        <List.Item
                            title="Privacy Settings"
                            left={props => <List.Icon {...props} color="#f84037" icon="remove-red-eye" />}
                        />
                    </TouchableRipple>
                    <TouchableRipple style={GlobalStyles.bottomBorder} onPress={this._showFeedbackBox}>
                        <List.Item
                            title="Feedback"
                            left={props => <List.Icon {...props} color="#0580f6" icon="feedback" />}
                        />
                    </TouchableRipple>
                    <TouchableRipple style={GlobalStyles.bottomBorder}>
                        <List.Item
                            title="Need help?"
                            left={props => <List.Icon {...props} color="#1cc63d" icon="live-help" />}
                        />
                    </TouchableRipple>
                    <TouchableRipple style={GlobalStyles.bottomBorder} onPress={this._showPrivacyPolicy}>
                        <List.Item
                            title="Privacy Policy"
                            left={props => <List.Icon {...props} color="#5f54d2" icon="business" />}
                        />
                    </TouchableRipple>
                    <TouchableRipple style={GlobalStyles.bottomBorder} onPress={this._showChangePasswordPopup}>
                        <List.Item
                            title="Change Password"
                            left={props => <List.Icon {...props} color="#8e8d90" icon="lock" />}
                        />
                    </TouchableRipple>
                    <TouchableRipple onPress={this._onLogout}>
                        <List.Item
                            title="Logout"
                            titleStyle={{ color: "red" }}
                            left={props => <List.Icon {...props} color="red" icon="power-settings-new" />}
                        />
                    </TouchableRipple>
                </View>
                <Portal style={{ height: 200, maxHeight: 200, flex: 0 }}>
                    <Dialog
                        style={{
                            elevation: 1,
                            backgroundColor: "white",
                            flex: 1,
                            justifyContent: "center",
                            height: 200,
                            maxHeight: 200,
                            width: '90%',
                            marginLeft: 20,
                            marginRight: 20,
                        }}
                        visible={this.state.feedbackPopupVisible}
                        onDismiss={() => this.setState({ feedbackPopupVisible: false })}>
                        <Dialog.Title>Feedback</Dialog.Title>
                        <Dialog.Content>
                            <TextInput
                                label='Provide Feedback'
                                mode='flat'
                                placeholder='Enter your feedback'
                                value={this.state.feedback}
                                onChangeText={(feedback) => this.setState({ feedback })}
                            />
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={() => this.setState({ feedbackPopupVisible: false })} color="grey">Cancel</Button>
                            <Button onPress={this._sendFeedback.bind(this)}>Send</Button>
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
                            height: 160,
                            maxHeight: 160,
                            width: '90%',
                            marginLeft: 20,
                            marginRight: 20,
                        }}
                        visible={this.state.logoutPopupVisible}
                        onDismiss={() => this.setState({ logoutPopupVisible: false })}>
                        <Dialog.Title>Logout</Dialog.Title>
                        <Dialog.Content>
                            <Text>Are you sure you want to logout?</Text>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={() => this.setState({ logoutPopupVisible: false })} color="grey">Cancel</Button>
                            <Button onPress={this._onConfirmLogOut} color="red">Logout</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
                <Portal style={{ height: 200, maxHeight: 200, flex: 0 }}>
                    <Dialog
                        style={{
                            elevation: 1,
                            backgroundColor: "white",
                            flex: 1,
                            justifyContent: "center",
                            height: 350,
                            maxHeight: 350,
                            width: '90%',
                            marginLeft: 20,
                            marginRight: 20,
                        }}
                        visible={this.state.changePasswordPopupVisible}
                        onDismiss={() => this.setState({ changePasswordPopupVisible: false })}>
                        <Dialog.Title>Change Password</Dialog.Title>
                        <Dialog.Content>
                            <TextInput
                                label='Current Password'
                                mode='flat'
                                secureTextEntry={true}
                                placeholder='Enter your current password'
                                style={{ marginBottom: 10 }}
                                value={this.state.currentPassword}
                                onChangeText={(currentPassword) => this.setState({ currentPassword })}
                            />
                            <TextInput
                                label='New Password'
                                mode='flat'
                                secureTextEntry={true}
                                placeholder='Set your new password'
                                style={{ marginBottom: 10 }}
                                value={this.state.newPassword}
                                onChangeText={(newPassword) => this.setState({ newPassword })}
                            />
                            <TextInput
                                label='Confirm Password'
                                mode='flat'
                                secureTextEntry={true}
                                placeholder='Confirm new password'
                                value={this.state.confirmPassword}
                                onChangeText={(confirmPassword) => this.setState({ confirmPassword })}
                            />
                            <View style={{ marginTop: 5, height: 10, maxHeight: 10 }}>
                                {this.state.hasValidationError ?
                                    <Text style={{ color: 'red' }}>*{this.state.validationMessage}</Text> : null}
                            </View>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={() => this.setState({ changePasswordPopupVisible: false })} color="grey">Cancel</Button>
                            <Button onPress={this._updatePassword}>Update</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
                <Snackbar
                    visible={this.state.snackbarVisible}
                    style={{ bottom: 0 }}
                    onDismiss={() => this.setState({ snackbarVisible: false })}
                    duration={10000}
                    action={{
                        label: 'Ok',
                        onPress: () => {
                            this.setState({ snackbarVisible: false })
                        },
                    }}
                >
                    {this.state.resultMsg}
                </Snackbar>
            </View>
        );
    }
}
