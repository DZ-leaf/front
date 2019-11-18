import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { Block } from 'galio-framework';
import { Button } from 'native-base';

import Tag from '../../../components/gallery/Tag';

const GroupGalleryWrite = () => {

    return (
        <Block flex>
            {/* <View style={{flex: 1, width: width, height: 30, borderWidth:1}}>  */}
            {/* <View style={styles.header}>
                <Button style={{ marginHorizontal: 5 }}
                    onPress={() => { this.props.closeModal() }}
                    transparent >
                    <Text style={styles.buttonText}>취소</Text>
                </Button>
          
                <Button style={{ marginHorizontal: 5 }}
                
                    transparent>
                    <Text style={styles.buttonText}>공유</Text>
                </Button>
            </View>
 
            <View style={{ flex: 1, borderWidth: 1 }}>
                <Tag />
            </View>
            <View style={{ flex: 2 }}>
                <FlatList
                    data={this.props.photos}
                    renderItem={({ item }) => this.renderItem(item)}
                    keyExtractor={item => item.md5}
                    horizontal
    
                />
            </View> */}
        </Block>
    );
}

export default GroupGalleryWrite;