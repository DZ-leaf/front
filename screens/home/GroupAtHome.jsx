import React from "react";
import { ScrollView, StyleSheet, Dimensions } from "react-native";
import { Block, Text, theme } from "galio-framework";

const { width } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;
const cardWidth = width - theme.SIZES.BASE * 2;

const GroupAtHome = () => {

    const renderCards = () => {
        return (
            <Block flex style={styles.group}>
                <Text bold size={16} style={styles.title}>
                    {"\n"}그룹
                </Text>
                <Block flex>
                    <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
                        <Text>뭐 넣겟지</Text>
                    </Block>
                </Block>
            </Block>
        );
    };

    return (
        <Block flex center>
            <ScrollView showsVerticalScrollIndicator={false}>
                {renderCards()}
            </ScrollView>
        </Block>
    );
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
    }
});

export default GroupAtHome;
