import React, { useState } from 'react';
import { withNavigation } from 'react-navigation';
import { StyleSheet, Image, FlatList, TouchableOpacity, Text, Dimensions } from 'react-native';
import { Block } from 'galio-framework';

import Gallerys from "../../constants/gallerys";

const { width } = Dimensions.get("screen");
const thumbMeasure = (width - 48) / 3;

const GalleryList = ({ navigation }) => {

    const [data, setData] = useState(Gallerys)

    const renderItem = (item) => {
        return (
            <TouchableOpacity style={{ marginHorizontal: 4 }} onPress={() => { navigation.navigate('CompanyGalleryDetail') }}>
                <Image style={styles.thumb} source={{ uri: item.image }} />
            </TouchableOpacity>
        )
    }

    return (
        <Block flex/* style={{flexWrap: "wrap",  } } */ style={styles.container} >
            {/* {Images.Viewed.map((img, imgIndex) => (
                    <Image source={{ uri: img }} key={`viewed-${img}`}
                        resizeMode="cover" style={styles.thumb} />))} */}

            <FlatList
                data={data}
                renderItem={({ item }) => renderItem(item)}
                keyExtractor={item => item.id}
                horizontal={false}
                showsVerticalScrollIndicator={false}
                numColumns={3} />
        </Block>

    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    thumb: {
        borderRadius: 4,
        marginVertical: 4,
        alignSelf: "center",
        width: thumbMeasure,
        height: thumbMeasure,
    }
})


export default withNavigation(GalleryList);