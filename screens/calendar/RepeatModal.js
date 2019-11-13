import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Block, Button } from "galio-framework";
import { Container, Header, Content, ListItem, Text, Radio, Right, Left } from 'native-base';

class RepeatModal extends Component {
    state = {
        data: [
            { label: '안 함', value: 0 },
            { label: '매일', value: 1 },
            { label: '매주', value: 2 },
            { label: '매월', value: 3 },
            { label: '매년', value: 4 },
            { label: '직접 설정', value: 5 },
        ]
    }

    selectButton = (selected) => {
        this.props.setRepeat(this.state.data[selected]);
        this.props.closeModal();
    }


    render() {
        return (
            <Block style={styles.container}>
                <Block style={styles.radioContainer}>
                    {this.state.data.map((list, index) => {
                        return (
                            <ListItem key={index}
                                onPress={
                                    () => { this.selectButton(index) }}>
                                <Left>
                                    <Text>{list.label}</Text>
                                </Left>
                                <Right>
                                    <Radio selected={this.props.selectedValue === index ? true : false}
                                        color='gray' selectedColor='#0B5713' />
                                </Right>
                            </ListItem>
                        )
                    })}
                </Block>
            </Block>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f2f0f2',
    },
    radioContainer: {
        marginTop: 50,
        borderRadius: 30,
        paddingHorizontal: '5%',
        paddingBottom: '1%',
        paddingTop: '3%',
        backgroundColor: 'white',
    },
})
export default RepeatModal;