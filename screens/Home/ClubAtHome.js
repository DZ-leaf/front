import React from "react";
import { ScrollView, StyleSheet, Image, TouchableWithoutFeedback, ImageBackground, Dimensions, View } from "react-native";

import { Block, Text, theme } from "galio-framework";

import articles from "../../constants/articles";
import Images from "../../constants/Images";
import { Cards } from "../../components";

const { width } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;
const cardWidth = width - theme.SIZES.BASE * 2;

class ClubAtHome extends React.Component {

    renderCards = () => {
        return (
            <Block flex style={styles.group}>
                <Text bold size={16} style={styles.title}>
                    {"\n"}{"\n"}
                    동아리
                </Text>
                <Block flex>
                    <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
                    <Cards item={articles[4]} full />
                        <Block flex card shadow style={styles.category}>
                            <ImageBackground
                                source={{ uri: Images.Products["View article"] }}
                                style={[ styles.imageBlock, { width: width - theme.SIZES.BASE * 2, height: 252 }]}
                                imageStyle={{ width: width - theme.SIZES.BASE * 2, height: 252 }}>
                                <Block style={styles.categoryTitle}>
                                    <Text size={18} bold color={theme.COLORS.WHITE}>
                                        View article
                                    </Text>
                                </Block>
                            </ImageBackground>
                        </Block>
                    </Block>
                </Block>
            </Block>
        );
    };

    renderAlbum = () => {
        const { navigation } = this.props;

        return (
            <Block flex style={[styles.group, { paddingBottom: theme.SIZES.BASE * 5 }]}>
                <Text bold size={16} style={styles.title}>
                    Album
                </Text>
                <Block style={{ marginHorizontal: theme.SIZES.BASE * 2 }}>
                    <Block flex right>
                        <Text size={12} color={theme.COLORS.PRIMARY}
                            onPress={() => navigation.navigate("Home")}>
                            View All
                        </Text>
                    </Block>
                    <Block row space="between" style={{ marginTop: theme.SIZES.BASE, flexWrap: "wrap" }}>
                        {Images.Viewed.map((img, index) => (
                            <Block key={`viewed-${img}`} style={styles.shadow}>
                                <Image resizeMode="cover" source={{ uri: img }} style={styles.albumThumb}/>
                            </Block>
                        ))}
                    </Block>
                </Block>
            </Block>
        );
    };

    render() {
        return (
            <Block flex center>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {this.renderCards()}
                    {/* {this.renderAlbum()} */}
                </ScrollView>
            </Block>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        paddingHorizontal: theme.SIZES.BASE,
        color: '#525F7F'
    },
    group: {
        paddingTop: theme.SIZES.BASE
    },
    albumThumb: {
        borderRadius: 4,
        marginVertical: 4,
        alignSelf: "center",
        width: thumbMeasure,
        height: thumbMeasure
    },
    category: {
        backgroundColor: theme.COLORS.WHITE,
        marginVertical: theme.SIZES.BASE / 2,
        borderWidth: 0
    },
    categoryTitle: {
        height: "100%",
        paddingHorizontal: theme.SIZES.BASE,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        alignItems: "center"
    },
    imageBlock: {
        overflow: "hidden",
        borderRadius: 4
    },
    productItem: {
        width: cardWidth - theme.SIZES.BASE * 2,
        marginHorizontal: theme.SIZES.BASE,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 7 },
        shadowRadius: 10,
        shadowOpacity: 0.2
    },
    productImage: {
        width: cardWidth - theme.SIZES.BASE,
        height: cardWidth - theme.SIZES.BASE,
        borderRadius: 3
    },
    productPrice: {
        paddingTop: theme.SIZES.BASE,
        paddingBottom: theme.SIZES.BASE / 2
    },
    productDescription: {
        paddingTop: theme.SIZES.BASE
        // paddingBottom: theme.SIZES.BASE * 2,
    }
});

export default ClubAtHome;
