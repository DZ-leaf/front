import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { Block, Button } from 'galio-framework';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Platform, Dimensions } from 'react-native';
import { Content, Item, Input, Footer, FooterTab } from 'native-base';


const { width, height } = Dimensions.get("screen");

import Icon from 'react-native-vector-icons/FontAwesome';

class BoardWrite extends Component {
    render() {
        return (
            <Block flex>
                <Content>
                    <View style={{ padding: '3%' }}>
                        <Item>
                            <Input placeholder='제목' style={{ fontSize: 20 }} />
                        </Item>
                    </View>
                    <View style={{ padding: '4%' }}>
                        <TextInput
                            multiline={true}
                            numberOfLines={15}
                            placeholder="게시글 써봐"
                            textAlignVertical={'top'}
                            style={{ fontSize: 17 }}
                        />

                    </View>
                </Content>
                <KeyboardAvoidingView behavior="padding"
                    keyboardVerticalOffset={Platform.OS == 'ios' ? 55 : 90}>
                    <Footer>
                        <FooterTab style={{ backgroundColor: 'white' }}>
                            {/* <Block row> */}
                            <View style={{ paddingLeft: '5%', paddingTop: '4%'}}>
                                <Icon name="photo" size={25} />
                            </View>
                            <View style={{alignItems: 'flex-end', paddingRight: '5%', paddingTop: '1.5%'}}>
                            <View >
                                <Button style={styles.button} shadowless>완료</Button>
                            </View>
                            </View>
                        </FooterTab>
                    </Footer>
                </KeyboardAvoidingView>
            </Block>
        );
    }
}

const styles = StyleSheet.create({
    button : {
        width: width * 0.15,
        borderRadius: 10
    }
})

export default withNavigation(BoardWrite);