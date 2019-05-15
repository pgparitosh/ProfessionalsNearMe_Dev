import * as React from 'react';
import {
    ScrollView,
    Dimensions,
    View,
    Image,
    Text,
    Platform,
    TouchableWithoutFeedback
} from "react-native";
import { Appbar, ActivityIndicator, Colors } from 'react-native-paper';
import MapView from "react-native-maps";
import Icon from "react-native-vector-icons/Ionicons";

const { height } = Dimensions.get("window");
const MAP_HEIGHT = height * 0.75;
const CARD_HEIGHT = height - MAP_HEIGHT - 20;
const CARD_WIDTH = 250;
const ACCENT_COLOUR = "#6200ee";


export default class SearchScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    scrollerRef = null;

    state = {
        properties: [
            {
                id: 1,
                title: "Lovely Photography",
                type: "Photography",
                subCategory: "Wedding Photographer",
                price: "₹1000",
                duration: "hour",
                rating: 5,
                reviewsCount: 75,
                imageUrl:
                    "https://images.pexels.com/photos/794254/pexels-photo-794254.jpeg?cs=srgb&dl=bride-ceremony-chairs-794254.jpg&fm=jpg",
                coords: {
                    latitude: 18.595360,
                    longitude: 73.762647
                }
            },
            {
                id: 2,
                title: "Eventelizers",
                type: "Photography",
                subCategory: "Event Photographer",
                price: "₹100000",
                duration: "event",
                rating: 4,
                reviewsCount: 139,
                imageUrl:
                    "https://images.pexels.com/photos/50675/banquet-wedding-society-deco-50675.jpeg?cs=srgb&dl=catering-celebration-chairs-50675.jpg&fm=jpg",
                coords: {
                    latitude: 18.598939,
                    longitude: 73.773429
                }
            },
            {
                id: 3,
                title: "Cosmos Photography",
                type: "Photography",
                subCategory: "Astronomical Photographer",
                price: "₹2000",
                duration: "hour",
                rating: 3,
                reviewsCount: 12,
                imageUrl:
                    "https://images.pexels.com/photos/8170/sky-clouds-trees-moon.jpg?cs=srgb&dl=moon-night-8170.jpg&fm=jpg",
                coords: {
                    latitude: 18.610398,
                    longitude: 73.764485
                }
            },
            {
                id: 4,
                title: "A shed in the garden team",
                type: "Photography",
                subCategory: "Wedding Photographer",
                price: "₹17900",
                duration: "event",
                rating: 2,
                reviewsCount: 255,
                imageUrl:
                    "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?cs=srgb&dl=baby-shower-birthday-buffet-587741.jpg&fm=jpg",
                coords: {
                    latitude: 18.608649,
                    longitude: 73.758909
                }
            }
        ],
        selectedProperty: 0,
        latitude: null,
        longitude: null,
        error: null,
        searchCriteria: null,
    };

    returnData(searchCriteria) {
        if (searchCriteria !== null) {
            // make a service call to update the state for all the search results
        }
        else {
            // The below code would be moved in this block
        }
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null,
                });
            },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
        );
    }

    componentDidUpdate(prevProps, prevState) {
        if (
            this.scrollerRef &&
            prevState.selectedProperty !== this.state.selectedProperty
        ) {
            this.scrollerRef.scrollTo({
                x: this.state.selectedProperty * CARD_WIDTH,
                y: 0,
                animated: true
            });
        }
    }

    _filterSearch() {
        this.props.navigation.navigate('SearchFilter', { returnData: this.returnData.bind(this) });
    }

    _showProfile(property) {
        this.props.navigation.navigate('ViewProfessional', { profileId: property.id });
    }

    render() {

        const { properties, selectedProperty } = this.state;
        const latitude = this.state.latitude;
        const longitude = this.state.longitude;
        if (latitude === null || longitude === null)
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator color={Colors.purple700} />
                </View>
            );
        return (
            <View style={{ flex: 1 }}>
                <Appbar.Header>
                    <Appbar.Content
                        title="Search"
                        subtitle="Search for a professional near you"
                    />
                    <Appbar.Action
                        icon="search"
                        onPress={this._filterSearch.bind(this)} />
                </Appbar.Header>
                <MapView
                    style={{ flex: 1 }}
                    region={{
                        latitude: parseFloat(latitude),
                        longitude: parseFloat(longitude),
                        latitudeDelta: 0.15,
                        longitudeDelta: 0.01
                    }}
                    loadingEnabled
                    showsUserLocation
                >
                    {properties.map((property, index) => (
                        <MapView.Marker key={property.id} coordinate={property.coords}>
                            <View
                                style={{
                                    backgroundColor:
                                        selectedProperty === index ? ACCENT_COLOUR : "#FFFFFF",
                                    height: 30,
                                    width: '100%',
                                    justifyContent: "center",
                                    alignItems: "center",
                                    paddingLeft: 5,
                                    paddingRight: 5,
                                }}
                            >
                                <Text
                                    style={{
                                        color: selectedProperty === index ? "#FFFFFF" : "#000000",
                                    }}
                                >
                                    {property.price}
                                </Text>
                            </View>
                        </MapView.Marker>
                    ))}
                </MapView>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={CARD_WIDTH}
                    ref={ref => (this.scrollerRef = ref)}
                    style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        paddingTop: 20,
                        paddingBottom: 50,
                        backgroundColor: "#FFFFFF"
                    }}
                    contentContainerStyle={{
                        paddingRight: 40,
                        paddingLeft: 20
                    }}
                    onMomentumScrollEnd={e => {
                        this.setState({
                            selectedProperty: Math.round(
                                e.nativeEvent.contentOffset.x / CARD_WIDTH
                            )
                        });
                    }}
                >
                    {properties.map((property, index) => (
                        <TouchableWithoutFeedback key={property.id} onPress={() => this._showProfile(property)}>
                            <View
                                style={{ width: CARD_WIDTH, marginHorizontal: 5 }}
                            >
                                <Image
                                    style={{
                                        width: CARD_WIDTH,
                                        height: CARD_HEIGHT
                                    }}
                                    source={{ uri: property.imageUrl }}
                                />
                                {selectedProperty === index && (
                                    <View
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            height: 4,
                                            width: "100%",
                                            backgroundColor: ACCENT_COLOUR
                                        }}
                                    />
                                )}
                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        paddingTop: 4
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: 9,
                                            fontWeight: "bold"
                                        }}
                                    >
                                        {property.type.toUpperCase()}
                                    </Text>

                                    <View
                                        style={{
                                            backgroundColor: "#555555",
                                            height: 2,
                                            width: 2,
                                            borderRadius: 2,
                                            marginHorizontal: 4
                                        }}
                                    />

                                    <Text style={{ fontSize: 9, fontWeight: "bold" }}>
                                        {property.subCategory}
                                    </Text>
                                </View>
                                <Text
                                    style={{ fontSize: 15, fontWeight: "bold", marginBottom: 4 }}
                                >
                                    {property.title}
                                </Text>
                                <Text style={{ fontSize: 12, fontWeight: "100" }}>
                                    {property.price} per {property.duration}
                                </Text>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        paddingTop: 4
                                    }}
                                >
                                    {Array(5)
                                        .fill(0)
                                        .map((_, index) => (
                                            <Icon
                                                key={index}
                                                color={ACCENT_COLOUR}
                                                name={
                                                    index < property.rating
                                                        ? Platform.OS === "ios" ? "ios-star" : "md-star"
                                                        : Platform.OS === "ios"
                                                            ? "ios-star-outline"
                                                            : "md-star-outline"
                                                }
                                                size={14}
                                            />
                                        ))}
                                    <Text style={{ fontSize: 12, marginLeft: 4 }}>
                                        {property.reviewsCount}
                                    </Text>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    ))}
                </ScrollView>
            </View>
        );
    }
}
