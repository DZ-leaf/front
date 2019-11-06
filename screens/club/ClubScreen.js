import React from "react";
import { ScrollView, StyleSheet, Image, ImageBackground, Dimensions, View } from "react-native";
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import { Block, Text, theme } from "galio-framework";

import articles from "../../constants/articles";
import Images from "../../constants/Images";
import { Cards } from "../../components";

// import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;
const cardWidth = width - theme.SIZES.BASE * 2;

class ClubScreen extends React.Component {

    renderCard = () => {
        return (
            <Block flex style={styles.group}>
                <Block right style={{paddingRight: '5%'}}>
                    <Icon name='search' size={20} />
                </Block>
                <Block flex>
                    <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
                        <Block flex row>
                            <Cards item={articles[1]} style={{ marginRight: theme.SIZES.BASE }} />
                            <Cards item={articles[2]} />
                        </Block>
                        <Block flex cards shadow style={styles.category}>
                            <ImageBackground
                                source={{ uri: Images.Products["View article"] }}
                                style={[styles.imageBlock, { width: width - theme.SIZES.BASE * 2, height: 252 }]}
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

    render() {
        return (
            <Block flex center>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {this.renderCard()}
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

export default ClubScreen;
