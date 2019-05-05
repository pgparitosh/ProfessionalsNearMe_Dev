import React from 'react';
import { View, TouchableHighlight, Image } from 'react-native';
import { Appbar, Text } from 'react-native-paper';

export default class PortfolioImagesComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {navigation} = this.props;
        const userDetails = navigation.getParam('userDetails');
    }

    _goBack = () => this.props.navigation.goBack();

    render() {
        // imgs = this.prop.portfolioImages;
        // let allImages = Object.keys(imgs).map(k => {
        //     return (
        //         <TouchableHighlight
        //             style={{ width: 300, height: 225, marginTop: 10 }}>
        //             <Image source={{ uri: imgs[k] }}
        //                 style={{ width: 200, height: 150, }} />
        //         </TouchableHighlight>
        //     );
        // });

        return (
            <View>
                {/* {allImages} */}
                <Appbar.Header>
                    <Appbar.BackAction
                        onPress={this._goBack}
                    />
                    <Appbar.Content
                        title="Portfolio Images"
                    />
                </Appbar.Header>
                <Text>Hi</Text>
            </View>
        );
    }
} 