import React, { Component } from 'react';
import { StyleSheet, View, Image, FlatList, TouchableOpacity, Text, Modal, KeyboardAvoidingView, Platform } from 'react-native';
import { Block, theme, Input } from 'galio-framework';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Left, Body, Right, Footer, FooterTab } from 'native-base';

import Images from "../../constants/Images";
import { Cards } from "../../components";

import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/FontAwesome';
import IconF from 'react-native-vector-icons/Feather';
import LineIcon from 'react-native-vector-icons/SimpleLineIcons';

import CompanyGalleryCommentModal from '../../screens/company/gallery/CompanyGalleryCommentModal';

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
        commentModal: false,
    }

    setCommentModalVisible = (visible) => { this.setState({ commentModal : visible })}
    closeCommnetModal = () => { this.setState({ commentModal : false })}

    renderItem(item) {
        // console.log(item);        

        return (
            <TouchableOpacity style={{ marginHorizontal: 1 }}>
                <Cards item={item} style={{ width: 200, height: 200, }} />
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
                                <Right>
                                    <LineIcon name="options-vertical" color='#000000' size={20} />
                                </Right>
                            </CardItem>
                            <CardItem cardBody>
                                <Image source={{ uri: Images.Viewed[1] }} style={{ height: 280, width: null, flex: 1 }} />
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Button transparent >
                                        <Icon name="leaf" color='#0B5713' size={20} />
                                        <Text> 1313</Text>
                                    </Button>
                                    <Button transparent onPress={() => {this.setCommentModalVisible(!this.state.commentModal)}}>
                                        <Icon active name="comments" color='#000000' size={20} />
                                        <Text> 4</Text>
                                    </Button>
                                </Left>
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
                        horizontal
                        showsHorizontalScrollIndicator={false} />
                </Block>
                
                <Modal visible={this.state.commentModal} animationType="slide" onRequestClose={() => {this.closeCommnetModal()}}>
                    <CompanyGalleryCommentModal />

                    <KeyboardAvoidingView behavior={/* Platform.OS == 'ios' ? 'padding' : 'padding' */'padding'}
                    keyboardVerticalOffset={ Platform.OS == 'ios' ? -34 : -230 }
                    >
                    <Footer>
                        <FooterTab transparent style={{ backgroundColor: '#ffffff' }}>
                            <Block row>
                                <View style={{ paddingLeft: '3%' }}>
                                    <Input style={styles.text} placeholder="댓글"
                                        placeholderTextColor="#ADB5BD"
                                        onChangeText={(text) => { this.setState({ comment: text }) }} />
                                </View>
                                <View style={styles.send}>
                                    <IconF name="send" size={25}
                                        color={this.state.comment == '' ? '#ADB5BD' : '#0B5713'} />
                                </View>
                            </Block>
                        </FooterTab>
                    </Footer>
                </KeyboardAvoidingView>
                </Modal>
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