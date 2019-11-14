import * as React from 'react';
import { Image, View, Text } from 'react-native';
import { Button } from 'native-base';

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

export default class ImagePickerExample extends React.Component {
    state = {
        image: null,
        hasCameraRollPermission: null,
    };

    render() {
        let { image } = this.state;

        if (Constants.platform.ios) {
            if (this.state.hasCameraRollPermission === null) {
                return (
                    <View>
                        <Text>null</Text>
                    </View>
                )
            } else if (this.state.hasCameraRollPermission === false) {
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Button
                        onPress={this.getPermissionAsync}
                    ><Text>설정</Text>
                    </Button>
                </View>
            } else {
                return (
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Button onPress={this._pickImage}>
                            <Text>Pick an image from camera roll</Text>
                        </Button>
                        {image &&
                            <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                    </View>
                );
            }
        } else {
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Button onPress={this._pickImage}>
                        <Text>Pick an image from camera roll</Text>
                    </Button>
                    {image &&
                        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                </View>
            );
        }
    }

    componentDidMount() {
        this.getPermissionAsync();
    }

    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            this.setState({ hasCameraRollPermission: status === 'granted' })
        }
    }

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
        });

        console.log(result);

        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }
    };
}