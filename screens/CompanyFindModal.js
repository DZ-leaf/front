import React, { useState } from 'react';
import { StyleSheet, Dimensions, View, Text } from 'react-native';
import { Block, Button, theme, Input } from 'galio-framework';
import { Images, argonTheme } from "../constants";
const { width } = Dimensions.get("screen");

const CompanyFindModal = (props) => {

    const [company, setCompany] = useState('');

    return (
        <Block style={styles.container}>
            <Block width={width * 0.9}>
                <View style={styles.inputs, styles.inputButton}>
                    <Input placeholder="회사" iconContent={<Block />}
                        style={{ borderRadius: 0 }} color={argonTheme.COLORS.BLACK}
                        onChangeText={(text) => { setCompany(text) }} />
                    <Button style={styles.button, { width: '10%' }} shadowless
                        onPress={() => props.findCompany(company)}>찾기</Button>
                </View>
            </Block>
            <Button style={styles.button} onPress={props.closeModal}>확인</Button>
        </Block>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F0F2F0',
        paddingTop: 50,
    },
    // text: {
    //     fontSize: 17,
    // },
    // input: {
    //     alignItems: 'center',
    //     marginTop: theme.SIZES.BASE * 2,  
    //     width: width - theme.SIZES.BASE * 6,
    // },
    button: {
        width: width - theme.SIZES.BASE * 6,
        height: theme.SIZES.BASE * 3,
        marginTop: 20,
    },
    logo: {
        paddingTop: '10%'
    },
    padded: {
        paddingHorizontal: theme.SIZES.BASE * 2,
        position: "relative",
        bottom: theme.SIZES.BASE,
        zIndex: 2,
    },
    button: {
        width: width - theme.SIZES.BASE * 6,
        height: theme.SIZES.BASE * 3,
        shadowRadius: 0,
        shadowOpacity: 0,
    },
    inputs: {
        marginTop: '-4%',
        borderRadius: 0,
    },
    inputButton: {
        flexDirection: 'row',
        alignItems: 'center',
        width: width * 1.43
    },
});

export default CompanyFindModal;