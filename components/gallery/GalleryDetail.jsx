import React, { useState } from 'react';
import { StyleSheet, View, Image, FlatList, TouchableOpacity, Text, Modal, KeyboardAvoidingView, Platform, Dimensions } from 'react-native';
import { Block, Input } from 'galio-framework';
import { Card, CardItem, Thumbnail, Left, Body, Right, Footer, FooterTab, Button } from 'native-base';
import ActionSheet from 'react-native-actionsheet';

import Images from "../../constants/Images";
import { Cards } from "..";

import Icon from 'react-native-vector-icons/FontAwesome';
import IconF from 'react-native-vector-icons/Feather';
import LineIcon from 'react-native-vector-icons/SimpleLineIcons';

import GalleryCommend from './GalleryCommend';

const { width } = Dimensions.get('screen');

const GalleryDetail = ({ navigation }) => {

    const data = [
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
    ]

    const tagData = [
        {
            title: 'bit',
            id: 1,
        },
        {
            title: 'douzon',
            id: 2,
        },
        {
            title: 'leaf',
            id: 3,
        },
        {
            title: 'gallery',
            id: 4,
        },
    ]

    const [commentModal, setCommentModal] = useState(false);
    const [comment, setComment] = useState('');

    setCommentModalVisible = (visible) => { setCommentModal(visible) }
    closeCommnetModal = () => { setCommentModal(false) }

    const renderItem = (item) => {
        return (
            <TouchableOpacity style={{ marginHorizontal: 1 }}>
                <Cards item={item} /* style={{ width: 200, height: 150, }} */ />
                {/* <Image style={{ width: 200, height: 200, }} resizeMode='contain' source={{ uri: item.image }} /> */}
            </TouchableOpacity>
        )
    }

    const renderTag = (tag) => {
        return (
            <View style={{marginHorizontal: 5 , borderRadius: 5/* , borderColor: '#0B5713' , borderWidth: 2 */}}>
                <Text style={{fontSize:18, paddingHorizontal: '5%'}}>#{tag.title}</Text>
            </View> 
        )
    }

    const optionButton = () => {
        if (Platform.OS == 'android') {
            this.ActionSheet.show()
        } else {
            ActionSheetIOS.showActionSheetWithOptions(
                {
                    options: ['삭제', '취소'],
                    cancelButtonIndex: 1,
                    destructiveButtonIndex: 0,
                },
                (index) => {
                    if (index == 0) {
                        navigation.navigate.goBack();
                    }
                }
            );
        }
    }

    return (
        <Block flex>
            <Block style={styles.galleryContainer}>
                <Block >
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
                                <LineIcon name="options-vertical" color='#000000' size={20} onPress={() => { optionButton() }} />
                            </Right>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={{ uri: Images.Viewed[1] }} style={{ height: 280, width: null, flex: 1 }} />
                        </CardItem>
                        <Block style={{marginTop: 5}}>
                            <FlatList
                                data={tagData}
                                renderItem={({ item }) => renderTag(item)}
                                keyExtractor={item => item.id}
                                horizontal
                                showsHorizontalScrollIndicator={false} />
                        </Block>
                        <CardItem style={{paddingVertical: '-5%'}}>
                            <Left>
                                <Button transparent >
                                    <Icon name="leaf" color='#0B5713' size={20} />
                                    <Text> 1313</Text>
                                </Button>
                                <Button transparent onPress={() => { setCommentModalVisible(!commentModal) }}>
                                    <Icon active name="comments" color='#000000' size={20} />
                                    <Text> 4</Text>
                                </Button>
                            </Left>
                            <Right>
                                <Text>11시간 전</Text>
                            </Right>
                        </CardItem>
                    </Card>
                </Block>
            </Block>
            <Block style={styles.listContainer}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => renderItem(item)}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false} />
            </Block>

            <Modal visible={commentModal} animationType="slide" onRequestClose={() => { closeCommnetModal() }}>
                <GalleryCommend />

                <KeyboardAvoidingView behavior={/* Platform.OS == 'ios' ? 'padding' : 'padding' */'padding'}
                    keyboardVerticalOffset={Platform.OS == 'ios' ? -34 : -230}
                >
                    <Footer>
                        <FooterTab transparent style={{ backgroundColor: '#ffffff' }}>
                            <Block row>
                                <View style={{ paddingLeft: '3%' }}>
                                    <Input style={styles.text} placeholder="댓글"
                                        placeholderTextColor="#ADB5BD" color='black'
                                        onChangeText={(text) => { setComment(text) }} />

                                </View>
                                <View style={styles.send}>
                                    <IconF name="send" size={25}
                                        color={comment == '' ? '#ADB5BD' : '#0B5713'} />
                                </View>
                            </Block>
                        </FooterTab>
                    </Footer>
                </KeyboardAvoidingView>
            </Modal>
            <ActionSheet
                ref={o => this.ActionSheet = o}
                // title={'일정을 삭제할까요?'}
                options={['수정', '삭제', '취소']}
                cancelButtonIndex={2}
                destructiveButtonIndex={1}
                onPress={(index) => {
                    if (index == 0) {
                        // this.props.navigation.navigate()
                    }
                    else if (index == 1) {
                        navigation.goBack();
                    }
                }}
            />
        </Block>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    galleryContainer: {
        flex: 2.5,
        paddingHorizontal: '3%',
        paddingTop: '2%',
    },
    listContainer: {
        flex: 1,
    },
    send: {
        paddingTop: '4%',
        paddingLeft: '3%',
        paddingRight: '2%'
    },
    text: {
        backgroundColor: '#f2f0f2',
        width: width * 0.85,
    },
})
export default GalleryDetail;