import React from "react";
import { Image, StyleSheet, StatusBar, Dimensions, View, CheckBox } from "react-native";
import { Block, Button, Text, theme, Input } from "galio-framework";

import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get("screen");

// import Images from "../constants/Images";
import Tab from '../components/Tabs';

class FindScreen extends React.Component {

    render() {
        const { navigation } = this.props;

        return (
            <Block flex style={[styles.container, { paddingTop: 50 }]}>
                <StatusBar hidden />
                <Block style={[styles.textView, styles.tab]}>
                    <Tab />
                </Block>
                <Block style={styles.textView}>
                    <Text style={[styles.text, { fontWeight: 'bold' }, { fontSize: 16 }]}>등록된 이메일로 찾기</Text>
                    <Text style={styles.text}>가입 당시 입력한 이메일을 통해 인증하세요</Text>
                </Block>
                <Block flex space="between" style={styles.padded}>
                    <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
                        <Block style={styles.input}>
                            <Input
                                placeholder="ID"
                                iconContent={<Icon size={20} style={{ marginRight: 10 }} name="person" />} />
                        </Block>
                        <Block style={styles.input}>
                            <View style={styles.inputButton}>
                                <Input placeholder='이메일' iconContent={<Block />} />
                                <Text>{'\u00A0'}{'\u00A0'}{'\u00A0'}</Text>
                                <Button style={styles.button, { width: '10%' }}>찾기</Button>
                            </View>
                        </Block>
                        <Block style={styles.input}>
                            <Input
                                placeholder="인증번호" />
                        </Block>
                        <Button
                            style={styles.button}
                            onPress={() => navigation.navigate("Home")}>
                            아이디 찾기
                         </Button>

                    </Block>
                </Block>
            </Block>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F0F2F0'
    },
    padded: {
        paddingTop: 30,
        paddingHorizontal: theme.SIZES.BASE * 2,
        // position: "relative",
        bottom: theme.SIZES.BASE,
        zIndex: 2,
    },
    button: {
        width: width - theme.SIZES.BASE * 6,
        height: theme.SIZES.BASE * 3,
        shadowRadius: 0,
        shadowOpacity: 0,
        marginTop: 20,
    },
    title: {
        marginTop: '-5%'
    },
    subTitle: {
        marginTop: 20
    },
    text: {
        marginTop: '1.5%',
        fontSize: 15,
    },
    textView: {
        paddingHorizontal: theme.SIZES.BASE * 3.5,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop: '3%',
    },
    textAuto: {
        flexDirection: 'row',
        paddingTop: '1%',
        paddingBottom: '3%',
    },
    mailButton: {
        width: width - theme.SIZES.BASE * 30,
        height: theme.SIZES.BASE * 2.5,
        shadowRadius: 0,
        shadowOpacity: 0,
        paddingHorizontal: '3%',
    },
    inputButton: {
        flexDirection: 'row',
        alignItems: 'center',
        width: width * 1.2
    },
    tab: {
        alignItems: 'center',
        marginVertical: 20,
        marginHorizontal: 50,
        borderColor: '#F0F2F0',
        borderBottomColor: '#25A731',
        borderWidth: 8,
    },
    input: {
        marginBottom: -5,
    }
});

export default FindScreen;
