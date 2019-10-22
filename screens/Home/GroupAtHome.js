import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground, ScrollView, TouchableWithoutFeedback, Image } from 'react-native';
import { Block, theme } from "galio-framework";

import { articles, Images, argonTheme } from "../../constants";
import { Card } from "../../components/";

const { width } = Dimensions.get("screen");
const thumbMeasure = (width - 48 - 32) / 3;
const cardWidth = width - theme.SIZES.BASE * 2;

class GroupAtHome extends Component {

    renderProduct = (item, index) => {
        const { navigation } = this.props;
    
        return (
          <TouchableWithoutFeedback
            style={{ zIndex: 3 }}
            key={`product-${item.title}`}
            onPress={() => navigation.navigate("Pro", { product: item })}
          >
            <Block center style={styles.productItem}>
              <Image
                resizeMode="cover"
                style={styles.productImage}
                source={{ uri: item.image }}
              />
              <Block center style={{ paddingHorizontal: theme.SIZES.BASE }}>
                <Text
                  center
                  size={16}
                  color={theme.COLORS.MUTED}
                  style={styles.productPrice}
                >
                  {item.price}
                </Text>
                <Text center size={34}>
                  {item.title}
                </Text>
                <Text
                  center
                  size={16}
                  color={theme.COLORS.MUTED}
                  style={styles.productDescription}
                >
                  {item.description}
                </Text>
              </Block>
            </Block>
          </TouchableWithoutFeedback>
        );
      };
    
    render() {
        return (
            <Block flex style={styles.group}>
        <Text bold size={16} style={styles.title}>
          Cards
        </Text>
        <Block flex>
          <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
            <Card item={articles[0]} horizontal />
            <Block flex row>
              <Card
                item={articles[1]}
                style={{ marginRight: theme.SIZES.BASE }}
              />
              <Card item={articles[2]} />
            </Block>
            <Card item={articles[4]} full />
            <Block flex card shadow style={styles.category}>
              <ImageBackground
                source={{ uri: Images.Products["View article"] }}
                style={[
                  styles.imageBlock,
                  { width: width - theme.SIZES.BASE * 2, height: 252 }
                ]}
                imageStyle={{
                  width: width - theme.SIZES.BASE * 2,
                  height: 252
                }}
              >
                <Block style={styles.categoryTitle}>
                  <Text size={18} bold color={theme.COLORS.WHITE}>
                    View article
                  </Text>
                </Block>
              </ImageBackground>
            </Block>
          </Block>
          <Block flex style={{ marginTop: theme.SIZES.BASE / 2 }}>
            <ScrollView
              horizontal={true}
              pagingEnabled={true}
              decelerationRate={0}
              scrollEventThrottle={16}
              snapToAlignment="center"
              showsHorizontalScrollIndicator={false}
              snapToInterval={cardWidth + theme.SIZES.BASE * 0.375}
              contentContainerStyle={{
                paddingHorizontal: theme.SIZES.BASE / 2
              }}
            >
            </ScrollView>
          </Block>
        </Block>
      </Block>
        );
    }
}

const styles = StyleSheet.create({
    title: {
      paddingBottom: theme.SIZES.BASE,
      paddingHorizontal: theme.SIZES.BASE * 2,
      marginTop: 22,
      color: argonTheme.COLORS.HEADER
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

export default GroupAtHome;