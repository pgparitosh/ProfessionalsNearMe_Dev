import React from 'react';
import { View, ScrollView, Platform } from 'react-native';
import { Appbar, Text, Headline, Paragraph } from 'react-native-paper';
import StarRating from 'react-native-star-rating';
import Icon from "react-native-vector-icons/Ionicons";

export default class ViewRatingComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        overallRatings: 0,
        totalReviews: 0,
        reviewsAndRatings: null,
    }

    componentDidMount() {
        const { navigation } = this.props;
        const profileId = navigation.getParam('profileId');
        // service call to fetch all ratings for the particular user
        let ratingsAndReviewsObj = this._getRatingsAndReviews(profileId);
        this.setState({
            overallRatings: ratingsAndReviewsObj.overallRatings,
            totalReviews: ratingsAndReviewsObj.totalReviews,
            reviewsAndRatings: ratingsAndReviewsObj.reviewsAndRatings,
        });
    }

    _getRatingsAndReviews(profileId) {
        // service call based on profile id
        let reviewsAndRatingsObj = {
            overallRatings: 4,
            totalReviews: 6,
            reviewsAndRatings: [
                {
                    id: 1,
                    userName: 'John Doe',
                    ratings: 5,
                    review: 'Great Experience',
                    date: '01-Jan-2019'
                },
                {
                    id: 2,
                    userName: 'Donny Ray',
                    ratings: 3,
                    review: 'Good to work with him',
                    date: '10-Feb-2019'
                },
                {
                    id: 3,
                    userName: 'Tyson Gimp',
                    ratings: 5,
                    review: 'Amazing Experience',
                    date: '19-Feb-2019'
                },
                {
                    id: 4,
                    userName: 'Tyson Gimp',
                    ratings: 5,
                    review: 'Amazing Experience',
                    date: '1-Mar-2019'
                },
                {
                    id: 5,
                    userName: 'Chuk Lee',
                    ratings: 4,
                    review: 'Great to work with you',
                    date: '9-Apr-2019'
                },
                {
                    id: 6,
                    userName: 'Stan Flew',
                    ratings: 5,
                    review: 'Very Helpful',
                    date: '8-May-2019'
                },
            ]
        }

        return reviewsAndRatingsObj;
    }

    _goBack = () => this.props.navigation.goBack();

    render() {
        const reviewsAndRatings = this.state.reviewsAndRatings;
        const overallRatings = this.state.overallRatings;
        const totalReviews = this.state.totalReviews;
        if (reviewsAndRatings === null || overallRatings === 0 || totalReviews === 0) return null;
        return (
            <ScrollView>
                <Appbar.Header>
                    <Appbar.BackAction
                        onPress={this._goBack}
                    />
                    <Appbar.Content
                        title="Reviews and Ratings"
                    />
                </Appbar.Header>
                <View style={{ marginTop: 20, marginLeft: 20, marginRight: 20 }}>
                    <Headline style={{ fontSize: 20, color: "#6200ee" }}>Overall Ratings</Headline>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        paddingTop: 4,
                    }}>
                        {Array(5)
                            .fill(0)
                            .map((_, index) => (
                                <Icon
                                    key={index}
                                    color="#6200ee"
                                    style={{ marginRight: 5 }}
                                    name={
                                        index < overallRatings
                                            ? Platform.OS === "ios" ? "ios-star" : "md-star"
                                            : Platform.OS === "ios"
                                                ? "ios-star-outline"
                                                : "md-star-outline"
                                    }
                                    size={40}
                                />
                            ))}
                    </View>
                </View>
                <ScrollView>
                    <Headline style={{ marginTop: 20, marginLeft: 20, marginRight: 20, fontSize: 18 }}>
                        All Reviews ({totalReviews})
                    </Headline>
                    {reviewsAndRatings.map((reviewsAndRatings, index) => (
                        <View key={reviewsAndRatings.id}
                            style={{
                                marginLeft: 20,
                                marginRight: 20,
                                marginTop: 10,
                                marginBottom: 5,
                                borderLeftColor: 'white',
                                borderRightColor: 'white',
                                borderTopColor: 'white',
                                borderWidth: 1
                            }}>
                            <View style={{
                                flexDirection: "row",
                                alignItems: "center",
                                paddingTop: 4,
                                marginLeft: 5,
                            }}>
                                {Array(5)
                                    .fill(0)
                                    .map((_, index) => (
                                        <Icon
                                            key={index}
                                            color="#6200ee"
                                            name={
                                                index < reviewsAndRatings.ratings
                                                    ? Platform.OS === "ios" ? "ios-star" : "md-star"
                                                    : Platform.OS === "ios"
                                                        ? "ios-star-outline"
                                                        : "md-star-outline"
                                            }
                                            size={30}
                                        />
                                    ))}
                            </View>
                            <Headline style={{ color: "#6200ee", fontSize: 16, marginLeft: 5, }}>{reviewsAndRatings.userName}</Headline>
                            <Paragraph style={{ fontSize: 14, marginLeft: 5, }}>{reviewsAndRatings.review}</Paragraph>
                            <Paragraph style={{ fontWeight: "bold", marginLeft: 5, marginBottom: 5 }}>{reviewsAndRatings.date}</Paragraph>
                        </View>
                    ))}
                </ScrollView>
            </ScrollView>
        );
    }
} 