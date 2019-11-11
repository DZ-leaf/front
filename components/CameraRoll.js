import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Image } from 'react-native';
import { ImageBrowser } from 'expo-multiple-imagepicker';

export default class CameraRoll extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageBrowserOpen: true,
            photos: []
        }
    }
    imageBrowserCallback = (callback) => {
        callback.then((photos) => {
            this.setState({
                imageBrowserOpen: false,
                photos
            })
            console.log(this.state.photos, this.props.navigation.navigate('CompanyGalleryWrite'));
            // this.props.navigation.navigate('CompanyGalleryWrite');
        }).catch((e) => console.log(e))
    }

    renderImage(item, i) {
        return (
            <Image
                style={{ height: 100, width: 100 }}
                source={{ uri: item.file }}
                key={i}
            />
        )
    }

    render() {
        return (<ImageBrowser max={10} callback={this.imageBrowserCallback} />);
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});