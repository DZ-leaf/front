import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, Dimensions } from 'react-native';
import { Block, theme, Input, } from 'galio-framework';
import { Button } from 'native-base';

import Tag from '../../../components/Tag';

// import { useSelector } from 'react-redux';

const { width, height } = Dimensions.get('screen');
// const info = useSelector( state => state.member.memberInfo);

class CompanyGalleryWrite extends Component {    
    
    renderItem(item, i) {
        return (
            <View key={item.md5} style={{ marginHorizontal: 5, flex: 1}}>
                <Image
                    style={{ height: width * 0.85, width: width * 0.85 }}
                    source={{ uri: item.uri }}
                />
            </View>
        )
    }
    render() {
        console.log(this.props.photos);       
        // console.log(info); 
        
        return (
            <Block flex style={{ backgroundColor: '#f2f0f2' }}>
                <View style={styles.header}>
                    <Button style={{ marginHorizontal: 5 }}
                        onPress={() => { this.props.closeModal() }}
                        transparent >
                        <Text style={styles.buttonText}>취소</Text>
                    </Button>
                    
                    {/* 유저명, 파일명, 회사명 전송 */}
                    <Button style={{ marginHorizontal: 5 }}
                        onPress={() => {this.props.closeModal(); this.props.closeAddModal(); this.props.navigation.navigate('CompanyGalleryDetail')}}
                        transparent>
                        <Text style={styles.buttonText}>공유</Text>
                    </Button>
                </View>
                <View style={styles.photoContainer}>
                    <FlatList
                        data={this.props.photos}
                        renderItem={({ item }) => this.renderItem(item)}
                        keyExtractor={item => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    // pagingEnabled
                    />
                </View>
                <View style={styles.tagContainer}>
                    <Tag  tags={this.props.tags} deleteTag={this.props.deleteTag}/>
                </View>
            </Block>
        );
    }
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

export default CompanyGalleryWrite;