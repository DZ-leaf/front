import React from "react";
import { StyleSheet, StatusBar, Dimensions } from "react-native";
import { Block, Button, Text, theme, Input } from "galio-framework";
import { withNavigation } from 'react-navigation'

const { width } = Dimensions.get("screen");

class FindIdScreen extends React.Component {
    render() {
        const { navigation } = this.props;           
        
        return (
            <Block flex>
                <StatusBar hidden />
                <Block style={styles.textView}>
                    <Text style={[styles.text, { fontWeight: 'bold' }, { fontSize: 16 }]}>아이디 찾기</Text>
                    <Text style={styles.text}>가입 당시 입력한 이메일을 통해 인증하세요</Text>
                </Block>
                <Block flex space="between" style={styles.padded}>
                    <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
                        <Block style={styles.input}>
                            <Input placeholder="이름" />
                        </Block>
                        <Block style={[styles.input, styles.email]}>
                                <Input placeholder='이메일' style={[{width: width - theme.SIZES.BASE * 9.5}, {Color:'black'}]}/>
                                {/* <Input placeholder='이메일' style={[{width: '80rem'}, {Color:'black'}]}/> */}
                                <Button style={styles.mailButton} shadowless>전송</Button>
                        </Block>
                        <Block style={styles.input}>
                            <Input
                                placeholder="인증번호" />
                        </Block>
                        <Button
                            style={styles.button}
                            onPress={() => {navigation.navigate('Find', {order:2})}}>
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
    email: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    mailButton: {
        width: '18%',
        marginLeft: '1%',
        borderRadius: 8,
    },
    input: {
        marginBottom: -5,
    }
});

export default withNavigation(FindIdScreen);
