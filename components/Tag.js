import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet, Dimensions, KeyboardAvoidingView } from "react-native";
import { Block, Input } from 'galio-framework';
import { Button, Content, List, ListItem, Body, Right, Footer, FooterTab } from 'native-base';

import Icon from 'react-native-vector-icons/MaterialIcons';
import IconT from 'react-native-vector-icons/FontAwesome5';

const { width } = Dimensions.get('screen');

class Tag extends Component {
    
    render() {
        console.log(this.props.tags);
        return (            
            <Block style={styles.container}>
                <View style={styles.tagContainer}>
                    {this.props.tags.map((tag, index) => {
                        return (
                            <View style={styles.buttonContainer} key={index}>
                                <Button style={styles.button}>
                                    <IconT size={11} style={{ paddingLeft: '1%' }} name="hashtag" />
                                    <Text style={{ fontSize: 12 }}>{tag}</Text>
                                    <Icon name='cancel' size={18} style={{ color: 'white', paddingHorizontal: '1%' }}
                                        onPress={() => {this.props.deleteTag(index)}} />
                                </Button>
                            </View>
                        )
                    })}

                </View>
            </Block >
            

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#f2f0f2',
        // justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: '5%',
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
    },
})
export default Tag;

