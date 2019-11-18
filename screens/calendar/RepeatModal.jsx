import React from 'react';
import { StyleSheet } from 'react-native';
import { Block } from "galio-framework";
import { ListItem, Text, Radio, Right, Left } from 'native-base';

const RepeatModal = (props) => {

    const data = [
        { label: '안 함', value: 0 },
        { label: '매일', value: 1 },
        { label: '매주', value: 2 },
        { label: '매월', value: 3 },
        { label: '매년', value: 4 },
        { label: '직접 설정', value: 5 },
    ]

    const selectButton = (selected) => {
        props.setRepeat(data[selected]);
        props.closeModal();
    }

    return (
        <Block style={styles.container}>
            <Block style={styles.radioContainer}>
                {data.map((list, index) => {
                    return (
                        <ListItem key={index}
                            onPress={() => { selectButton(index) }}>
                            <Left>
                                <Text>{list.label}</Text>
                            </Left>
                            <Right>
                                <Radio selected={props.selectedValue === index ? true : false}
                                    color='gray' selectedColor='#0B5713' />
                            </Right>
                        </ListItem>
                    )
                })}
            </Block>
        </Block>
    );
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