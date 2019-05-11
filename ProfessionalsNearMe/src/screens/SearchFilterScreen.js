import React from 'react';
import { ScrollView, View, Picker, Slider } from 'react-native';
import { Appbar, Headline, Text, Switch, Button } from 'react-native-paper';
import ProfileScreenStyles from '../styles/ProfileScreen.Styles';
import SearchStyles from '../styles/Search.Styles';
import DatePicker from 'react-native-datepicker'
import HelperService from '../services/HelperService';

export default class SearchFilterScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        loadDefault: true,
        category: '',
        subCategory: '',
        duration: '',
        value: 1000,
        minValue: 0,
        maxValue: 50000,
        city: '',
        state: '',
        date: '',
    }


    componentDidMount() {
        this.setState({
            category: '',
            subCategory: '',
            duration: '',
            value: 1000,
            minValue: 0,
            maxValue: 50000,
            city: '',
            state: '',
            date: '',
        });
    }

    _goBack() {
        this.props.navigation.navigate('SearchResults');
    }

    _clearSearch() {
        var searhCriteria = this.getSearchCriteria(true);
        this.props.navigation.state.params.returnData(searhCriteria);
        this.props.navigation.navigate('SearchResults');
    }

    _filterSearch() {
        var searhCriteria = this.getSearchCriteria(false);
        this.props.navigation.state.params.returnData(searhCriteria);
        this.props.navigation.navigate('SearchResults');
    }

    getSearchCriteria(loadDefault) {
        var searchCriteria = {
            loadDefault: loadDefault,
            category: this.state.category,
            subCategory: this.state.subCategory,
            duration: this.state.duration,
            value: this.state.value,
            city: this.state.city,
            state: this.state.state,
            date: this.state.date,
        }
        return searchCriteria;
    }

    render() {
        let date = new Date();
        const minDate = HelperService.formatDate(date);
        const currentYear = date.getFullYear();
        date.setFullYear(currentYear + 1);
        const maxDate = HelperService.formatDate(date);

        return (
            <ScrollView>
                <Appbar.Header>
                    <Appbar.BackAction
                        onPress={this._goBack}
                    />
                    <Appbar.Content
                        title="Filter your search"
                        subtitle="Searching professionals as per your need"
                    />
                </Appbar.Header>
                <View style={{ margin: 20 }}>
                    <Headline style={ProfileScreenStyles.headline}>Category</Headline>
                    <Picker
                        selectedValue={this.state.category}
                        style={[ProfileScreenStyles.backgroundGrey, ProfileScreenStyles.inputFields]}
                        itemStyle={{ height: 60 }}
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
                        itemStyle={{ height: 60 }}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ subCategory: itemValue })
                        }>
                        <Picker.Item label="--Select your sub category category--" value="-1" />
                        <Picker.Item label="Wedding Photographer" value="weddingphotographer" />
                        <Picker.Item label="Wild Life Photographer" value="wildlifephotographer" />
                        <Picker.Item label="Celebrity Photgraher" value="celebrityphotographer" />
                    </Picker>
                    <Headline style={ProfileScreenStyles.headline}>Range</Headline>
                    <Text style={{ margin: 20 }}>Select Rate</Text>
                    <Slider
                        style={{ width: '100%' }}
                        step={1}
                        minimumValue={this.state.minValue}
                        maximumValue={this.state.maxValue}
                        value={this.state.value}
                        onValueChange={val => this.setState({ value: val })}
                        thumbTintColor='#6200ee'
                        maximumTrackTintColor='#000000'
                        minimumTrackTintColor='#6200ee'
                    />
                    <View style={SearchStyles.textCon}>
                        <Text style={SearchStyles.colorGrey}>₹{this.state.minValue}</Text>
                        <Text style={SearchStyles.colorViolet}>
                            {'₹' + this.state.value}
                        </Text>
                        <Text style={SearchStyles.colorGrey}>₹{this.state.maxValue}</Text>
                    </View>
                    <Picker
                        selectedValue={this.state.duration}
                        style={[ProfileScreenStyles.backgroundGrey, ProfileScreenStyles.inputFields]}
                        itemStyle={{ height: 60 }}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ duration: itemValue })
                        }>
                        <Picker.Item label="--Select your price per--" value="-1" />
                        <Picker.Item label="Hour" value="hour" />
                        <Picker.Item label="Occassion" value="occassion" />
                        <Picker.Item label="Week" value="week" />
                        <Picker.Item label="Month" value="month" />
                    </Picker>
                    <Headline style={ProfileScreenStyles.headline}>Location</Headline>
                    <Picker
                        selectedValue={this.state.state}
                        itemStyle={{ height: 60 }}
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
                        itemStyle={{ height: 60 }}
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
                    <Headline style={ProfileScreenStyles.headline}>Check for Availability</Headline>
                    <DatePicker
                        style={{ width: '90%', margin: 20 }}
                        date={this.state.date}
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        minDate={minDate}
                        maxDate={maxDate}
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                        }}
                        onDateChange={(date) => { this.setState({ date: date }) }}
                    />
                </View>
                <View style={{ marginLeft: 20, marginRight: 20, marginBottom: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Button mode="contained"
                        color="white"
                        onPress={this._clearSearch.bind(this)}>
                        Clear
                    </Button>
                    <Button mode="contained"
                        onPress={this._filterSearch.bind(this)}>
                        Search
                    </Button>
                </View>
            </ScrollView>
        );
    }
}