import React, { Component } from 'react';
import { StyleSheet, View, Image, FlatList, TouchableOpacity, Text } from 'react-native';
import { Block, theme } from 'galio-framework';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Left, Body, Right } from 'native-base';

import Images from "../../constants/Images";
import { Cards } from "../../components";
import Icon from 'react-native-vector-icons/FontAwesome';

class Gallery extends Component {
    state = {
        data: [
            {
                id: 'da1',
                image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?fit=crop&w=240&q=80',
                title: 'Is makeup one of your daily esse …',
            },
            {
                id: 'dfs2',
                image: 'https://images.unsplash.com/photo-1503642551022-c011aafb3c88?fit=crop&w=240&q=80',
                title: 'Is makeup one of your daily esse …',
            },
            {
                id: 'eeef3',
                image: 'https://images.unsplash.com/photo-1482686115713-0fbcaced6e28?fit=crop&w=240&q=80',
                title: 'Is makeup one of your daily esse …',
            }
        ],
        page: 1
    }

    renderItem(item) {
        // console.log(item);

        return (
            <TouchableOpacity style={{ marginHorizontal: 1 }}>
                <Cards item={item} style={{  width: 200, height: 200, }}/>
                {/* <Image style={{ width: 200, height: 200, }} resizeMode='contain' source={{ uri: item.image }} /> */}
            </TouchableOpacity>
        )
    }
    render() {
        return (
            <Block flex>
                <Block style={styles.galleryContainer}>
                    <Block style={styles.cardContainer}>
                            {/* <Content> */}
                                <Card>
                                    <CardItem>
                                        <Left>
                                            <Thumbnail source={{ uri: Images.Viewed[1] }} />
                                            <Body>
                                                <Text>NativeBase</Text>
                                                <Text note>GeekyAnts</Text>
                                            </Body>
                                        </Left>
                                    </CardItem>
                                    <CardItem cardBody>
                                        <Image source={{ uri: Images.Viewed[1] }} style={{ height: 280, width: null, flex: 1 }} />
                                    </CardItem>
                                    <CardItem>
                                        <Left>
                                            <Button transparent>
                                                <Icon name="leaf" color='#0B5713' size={20} />
                                                <Text> 1313</Text>
                                            </Button>
                                            <Button transparent>
                                                <Icon active name="comments" color='#000000' size={20} />
                                                <Text> 4</Text>
                                            </Button>
                                        </Left>
                                        {/* <Body> */}
                                            {/* <Button transparent>
                                                <Icon active name="comments" color='#0B5713' size={20} />
                                                <Text> 4</Text>
                                            </Button> */}
                                        {/* </Body> */}
                                        <Right>
                                            <Text>11시간 전</Text>
                                        </Right>
                                    </CardItem>
                                </Card>
                            {/* </Content> */}
                    </Block>
                </Block>
                <Block style={styles.listContainer}>
                    <FlatList
                        data={this.state.data}
                        renderItem={({ item }) => this.renderItem(item)}
                        keyExtractor={item => item.id}
                        horizontal />
                </Block>
            </Block>
        );
    }
}

const styles = StyleSheet.create({
    container: {

    },
    galleryContainer: {
        flex: 2,
        paddingHorizontal: '3%',
        paddingTop: '2%',
    },
    listContainer: {
        flex: 1,
        // borderWidth: 1,
    },
    cardContainer: {
        flex: 7,
    },
})
export default Gallery;