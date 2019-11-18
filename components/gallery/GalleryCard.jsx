import React from 'react';
import { withNavigation } from 'react-navigation';
import { Image, Text, StyleSheet, Dimensions } from 'react-native';
import { Block } from 'galio-framework';
import { Card, CardItem, Left, Right } from 'native-base';

import { HeaderHeight } from "../../constants/utils";

import Images from "../../constants/Images";

const { width } = Dimensions.get("screen");
const thumbMeasure = (width - 48 - 32) / 3;

const GalleryCard = ({ navigation }) => {

    return (
        <Block style={{ padding: '3%' }}>
            <Card>
                <CardItem header bordered style={styles.cardItem}>
                    <Left>
                        <Text>갤러리</Text>
                    </Left>
                    <Right>
                        <Text onPress={() => navigation.navigate("CompanyGallery")}
                            style={{ color: '#0B5713' }}>More...</Text>
                    </Right>
                </CardItem>
                <CardItem cardBody>
                    <Block style={{ paddingBottom: -HeaderHeight * 2 }}>
                        <Block row space="between" style={{ flexWrap: "wrap", padding: '3%' }}>
                            {Images.Viewed.map((img, imgIndex) => (
                                <Image source={{ uri: img }} key={`viewed-${img}`}
                                    resizeMode="cover" style={styles.thumb} />))}
                        </Block>
                    </Block>
                </CardItem>
            </Card>
        </Block>
    );
}

const styles = StyleSheet.create({
    cardItem: {
        alignItems: 'center',
        alignSelf: 'center'
    },
    thumb: {
        borderRadius: 4,
        marginVertical: 4,
        alignSelf: "center",
        width: thumbMeasure,
        height: thumbMeasure
    }
})

export default withNavigation(GalleryCard);