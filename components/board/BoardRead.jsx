import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, ActionSheetIOS, Platform, Alert } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Block } from 'galio-framework';
import { List, ListItem, Thumbnail, Left, Body, Right } from 'native-base';
import ActionSheet from 'react-native-actionsheet'

import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/SimpleLineIcons';

import BoardComment from './BoardComment.jsx';

import Images from "../../constants/Images";

const { width } = Dimensions.get("screen");

const BoardRead = ({ navigation, moveDelete }) => {

    const [like, setLike] = useState(false);
    const [comment, setComment] = useState('');

    const likeButton = () => {
        if (!like) setLike(true)
        else if (like) setLike(false)
    }

    const optionButton = (index) => {
        // 0: 수정
        // 1: 돌아가기
        // 2: 삭제
        if (index == 0) { // 수정

        } else if (index == 2) { // 삭제
            cancleAlert();
        }
    }

    const callOptionButton = () => {
        if (Platform.OS == 'android') {
            this.ActionSheet.show()
        } else {
            ActionSheetIOS.showActionSheetWithOptions(
                {
                    options: ['돌아가기', '삭제', '수정'],
                    destructiveButtonIndex: 1,
                    cancelButtonIndex: 0,
                },
                (index) => {
                    if (index == 1) { // 삭제
                        cancleAlert();
                    } else if (index == 2) { // 수정

                    }
                },
            );
        }
    }

    const cancleAlert = () => {
        Alert.alert(
            '삭제하시겠습니까?',
            '삭제하시면 게시글을 볼수 없습니다',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'OK',
                    onPress: () => {
                        navigation.navigate(moveDelete)
                    }
                },
            ],
            { cancelable: false },
        );
    }
    return (
        <Block flex>
            <ActionSheet
                ref={o => this.ActionSheet = o}
                options={['수정', '돌아가기', '삭제']}
                cancelButtonIndex={1}
                destructiveButtonIndex={2}
                onPress={(index) => optionButton(index)} />
            <List>
                <ListItem thumbnail>
                    <Left>
                        <Thumbnail square source={Images.ProfilePicture} resizeMode={"center"} />
                    </Left>
                    <Body>
                        <Text style={{ fontWeight: 'bold' }}>작성자</Text>
                        <Text note>11시간 전</Text>
                    </Body>
                    <Right>
                        <Icon name='leaf' size={20}
                            color={!like ? '#ADB5BD' : '#0B5713'}
                            onPress={likeButton} />
                    </Right>
                    <Right>
                        <Icons name='options-vertical' size={15}
                            onPress={callOptionButton} />
                    </Right>

                </ListItem>
            </List>
            <View style={styles.text}>
                <Text>
                    ㅁㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄹ
                    ㅁㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄹ
                    ㅁㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄹ
                    ㅁㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄹ
                    ㅁㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄹ
                    ㅁㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄹ
                    </Text>
            </View>
            <View style={{ paddingLeft: '5%' }}>
                <Block row>
                    <Icon name="leaf" size={20} color='#0B5713' />
                    <Text>{'\u00A0'}12 {'\u00A0'}{'\u00A0'}</Text>
                    <Icon name="comments" size={20} />
                    <Text>{'\u00A0'}4 {'\u00A0'}{'\u00A0'}</Text>
                </Block>
            </View>
            <Block middle>
                <View
                    style={{
                        paddingBottom: '3%',
                        borderBottomColor: '#DCDCDC',
                        borderBottomWidth: 1,
                        width: width * 0.9,
                    }}
                />
            </Block>
            <BoardComment />
        </Block>
    );
}

const styles = StyleSheet.create({
    text: {
        padding: '5%'
    },

})

export default withNavigation(BoardRead);