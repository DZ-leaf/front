import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet, Dimensions } from "react-native";
import { Block, Input } from 'galio-framework';
import { Button } from 'native-base';

import Icon from 'react-native-vector-icons/MaterialIcons';
import IconT from 'react-native-vector-icons/FontAwesome5';

const { width } = Dimensions.get('screen');

class Tag extends Component {
    state = {
        tags: [],
        inputText: '',
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.tagContainer}>
                    {this.state.tags.map((tag, index) => {
                        return (
                            <View style={styles.buttonContainer} key={index}>
                                <Button style={styles.button}>
                                    <IconT size={11} style={{ paddingLeft: '1%' }} name="hashtag" />
                                    <Text style={{ fontSize: 12 }}>{tag}</Text>
                                    <Icon name='cancel' size={18} style={{ color: 'white', paddingHorizontal: '1%' }}
                                        onPress={() => { this.setState({ tags: this.state.tags.slice(0, index).concat(this.state.tags.slice(index + 1, this.state.tags.length)) }) }} />
                                </Button>
                            </View>
                        )
                    })}

                </View>
                <View>
                    <Input style={styles.textInput} color='black'  
                        iconContent={<IconT size={11} style={{ paddingRight: '1%', color: 'lightgray' }} name="hashtag" />}
                        placeholder='태그입력'  value={this.state.inputText} 
                        onChangeText={(text) => {   
                            if(text.charAt(text.length-1) === ' ') {
                                this.setState({ tags: this.state.tags.concat(text), inputText: ''})
                            }else {this.setState({inputText: text})}}}
                        />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#f2f0f2',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: '5%',
    },
    textInput: {
        borderWidth: 1,
        marginTop: 5,
        width: width * 0.3

    },
    tagContainer: {
        // flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    button: {
        height: 30,
        borderRadius: 10,
        // paddingHorizontal: '3%',
        backgroundColor: '#25A731',
        marginVertical: 5
    },
    buttonContainer: {
        marginHorizontal: 5,
    }
})
export default Tag;

