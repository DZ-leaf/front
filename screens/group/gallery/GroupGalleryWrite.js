import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, Dimensions } from 'react-native';
import { Block, theme, Input, } from 'galio-framework';
import { Button } from 'native-base';

import Tag from '../../../components/Tag';

const { width, height } = Dimensions.get('screen');

class GroupGalleryWrite extends Component {
    render() {
        return (
            <Block flex>
                {/* <View style={{flex: 1, width: width, height: 30, borderWidth:1}}>  */}
                <View style={styles.header}>
                    <Button style={{ marginHorizontal: 5 }}
                        onPress={() => { this.props.closeModal() }}
                        transparent >
                        <Text style={styles.buttonText}>취소</Text>
                    </Button>
                    {/* <Text>{headerText}</Text> */}
                    <Button style={{ marginHorizontal: 5 }}
                        // onPress={() => this.prepareCallback()}
                        transparent>
                        <Text style={styles.buttonText}>공유</Text>
                    </Button>
                </View>
                {/* </View> */}
                <View style={{ flex: 1, borderWidth: 1 }}>
                    <Tag/>
                </View>
                <View style={{ flex: 2 }}>
                    <FlatList
                        data={this.props.photos}
                        renderItem={({ item }) => this.renderItem(item)}
                        keyExtractor={item => item.md5}
                        horizontal
                    // pagingEnabled
                    />
                </View>
            </Block>
        );
    }
}

export default GroupGalleryWrite;