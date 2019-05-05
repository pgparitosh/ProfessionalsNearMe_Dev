import React from 'react';
import { View, Image, TouchableHighlight } from 'react-native';
import { Button, Dialog, Paragraph, Portal } from 'react-native-paper';
import { ImagePicker } from 'expo';
import ProfileScreenStyles from '../styles/ProfileScreen.Styles';

export default class PortfolioDetailsComponent extends React.Component {
    state = {
        potfolios: [],
        portfolioId: '',
        portfolioDetail: '',
        portfolioDesc: '',
        images: [],
        image: null,
        selectedImage: '',
        visible: false,
    }

    constructor(props) {
        super(props);
        this._handleImageChange = this._handleImageChange.bind(this);
    }

    componentDidMount() {
        this.setState({
            portfolioId: '1'
        });
    }

    _onImagePress(key) {
        this.setState({
            selectedImage: key,
            visible: true,
        });
    }

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
            mediaTypes: "Images"
        });
        if (!result.cancelled) {
            portfolioImages = this.state.images;
            portfolioImages.push(result.uri);
            this.setState({ images: portfolioImages });
            this._handleImageChange();
        }
    };

    _handleImageChange() {
        let allImages = {
            images: this.state.images,
        }
        this.props.onNextClick(allImages);
    }

    _showDialog = () => this.setState({ visible: true });

    _hideDialog = () => {
        let allImages = this.state.images;
        let key = this.state.selectedImage;
        allImages.splice(key, 1);
        this.setState({ visible: false, images: allImages});
        this._handleImageChange();
    }

    render() {
        imgs = this.state.images;
        let allImages = Object.keys(imgs).map(k => {
            return (
                <TouchableHighlight onPress={() => this._onImagePress(k)} key={k}
                    style={{ width: 200, height: 150, marginTop: 10 }}>
                    <Image source={{ uri: imgs[k] }}
                        style={{ width: 200, height: 150, }} />
                </TouchableHighlight>
            );
        });

        if (this.props.currentPosition === 3) {
            return (
                <View style={{ flex: 0 }}>
                    <View>
                        <Button mode="contained"
                            onPress={this._pickImage.bind(this)}
                            style={{ marginTop: 20, marginBottom: 20 }}>
                            Pick an image
                        </Button>
                        <View style={{justifyContent: "center", alignContent: "center"}}>
                            {allImages}
                        </View>
                    </View>
                    <Portal style={{ height: 200, maxHeight: 200, flex: 0 }}>
                        <Dialog
                            style={{
                                elevation: 1,
                                backgroundColor: "white",
                                flex: 1,
                                // alignItems: "center",
                                justifyContent: "center",
                                height: 200,
                                maxHeight: 200,
                                width: '90%',
                                marginLeft: 20,
                                marginRight: 20,
                            }}
                            visible={this.state.visible}
                            onDismiss={() => this.setState({visible: false})}>
                            <Dialog.Title>Remove Image</Dialog.Title>
                            <Dialog.Content>
                                <Paragraph>Are you sure you want to remove the image?</Paragraph>
                            </Dialog.Content>
                            <Dialog.Actions>
                                <Button onPress={this._hideDialog.bind(this)}>Remove</Button>
                            </Dialog.Actions>
                        </Dialog>
                    </Portal>
                </View>
            );
        }
        else {
            return null;
        }
    }
}