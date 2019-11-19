import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, FlatList, Dimensions, Alert } from 'react-native';
import { Block } from 'galio-framework';
import { Button } from 'native-base';

import { useSelector } from 'react-redux';

import { AjaxGallery } from '../../lib/galleryUrl';

import Tag from './Tag';
import { setProvidesAudioData } from 'expo/build/AR';

const { width } = Dimensions.get('screen');

const GalleryWrite = (props) => {
    const info = useSelector(state => state.member.memberInfo);

    let uri = props.photos.map((photo, index) => {
        return (
            {
                uri: photo.uri
            }
        )
    })

    console.log(uri);
    
    const data = {
        'memberId': info.memberId,
        'companyName': info.companyName,
        'photoUris': uri
    }

    console.log(data);
        

    const photoUpload = (data) => {
        return AjaxGallery.photoUpload(data)
        .then((responseJson) => {
            if(responseJson.message == 'success') {
                Alert.alert('갤러리를 등록했습니다')
            }else if(responseJson.message == 'fail') {
                Alert.alert('갤러리 등록에 실패했습니다')
            }
        })
    }

    const renderItem = (item, i) => {
        return (
            <View key={item.md5} style={{ marginHorizontal: 5, flex: 1 }}>
                <Image
                    style={{ height: width * 0.85, width: width * 0.85 }}
                    source={{ uri: item.uri }}
                />
            </View>
        )
    }


    return (
        <Block flex style={{ backgroundColor: '#f2f0f2' }}>

            <View style={styles.header}>
                <Button style={{ marginHorizontal: 5 }}
                    onPress={() => { props.closeModal() }}
                    transparent >
                    <Text style={styles.buttonText}>취소</Text>
                </Button>
                {/* <Text>{headerText}</Text> */}

                {/* 유저명, 파일명, 회사명 전송 */}
                <Button style={{ marginHorizontal: 5 }}
                    onPress={() => {
                        photoUpload(data)
                        props.closeModal(); props.closeAddModal();
                        props.navigation.navigate('CompnayGalleryDetail')
                    }}
                    transparent>
                    <Text style={styles.buttonText}>공유</Text>
                </Button>
            </View>
            <View style={styles.photoContainer}>
                <FlatList
                    data={props.photos}
                    renderItem={({ item }) => renderItem(item)}
                    keyExtractor={item => item.md5}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                // pagingEnabled
                />
            </View>
            <View style={styles.tagContainer}>
                <Tag tags={props.tags} deleteTag={props.deleteTag} />
            </View>
        </Block>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 50,
        width: width,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginTop: 20
    },
    photoContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '5%',
        paddingHorizontal: '5%',
    },
    tagContainer: {
        flex: 2,
        paddingVertical: '5%'
    },
    buttonText: {
        color: '#0B5713',
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default GalleryWrite;