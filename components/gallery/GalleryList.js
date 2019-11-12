import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { StyleSheet, View, Image, FlatList, TouchableOpacity, Text, Dimensions, Modal } from 'react-native';
import { Block, theme } from 'galio-framework';

import Gallerys from "../../constants/gallerys";

const { width } = Dimensions.get("screen");
const thumbMeasure = (width - 48 ) / 3;

class GalleryList extends Component {
    state = {
        data: Gallerys
    }

    renderItem(item) {
        // console.log(item);

        return (
            <TouchableOpacity style={{ marginHorizontal: 4 }} onPress={() => {this.props.navigation.navigate('CompanyGalleryDetail')}}>
                <Image style={styles.thumb} source={{ uri: item.image }} />
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <Block flex/* style={{flexWrap: "wrap",  } } */ style={styles.container} >
                {/* {Images.Viewed.map((img, imgIndex) => (
                    <Image source={{ uri: img }} key={`viewed-${img}`}
                        resizeMode="cover" style={styles.thumb} />))} */}

                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => this.renderItem(item)}
                    keyExtractor={item => item.id}
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    numColumns={3} />
            </Block>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        // alignSelf: 'center',
    },
    thumb: {
        borderRadius: 4,
        marginVertical: 4,
        alignSelf: "center",
        width: thumbMeasure,
        height: thumbMeasure,
        // borderWidth:2,
    }
})


export default withNavigation(GalleryList);