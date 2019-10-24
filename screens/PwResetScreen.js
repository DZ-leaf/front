import React, { Component } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Block, Button, Text, theme, Input } from 'galio-framework';
import { withNavigation } from 'react-navigation'

const { width } = Dimensions.get("screen");

class IdConfirmScreen extends Component {
    render() {
        const { navigation } = this.props

        const navigate = () => {
            this.props.onClickListener()
            navigation.navigate('Login')
        }

        return (
            <Block flex>
                <Block style={styles.container}>
                <Text style={styles.text}>비밀번호를 다시 설정해 주세요</Text>
                <Block style={styles.input}>
                    <Input placeholder='비밀번호 재설정' style={{marginTop: -8}}/>
                    <Input placeholder='비밀번호 재설정 확인' />
                </Block>
                <Button style={styles.button} onPress={() => {navigate()}} shadowless>확인</Button>
                </Block>
            </Block>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F0F2F0',
        paddingTop: 50,
    },
    text: {
        fontSize: 17,
    },
    input: {
        alignItems: 'center',
        marginTop: theme.SIZES.BASE * 2,  
        width: width - theme.SIZES.BASE * 6,
    },
    button: {
        width: width - theme.SIZES.BASE * 6,
        height: theme.SIZES.BASE * 3,
        marginTop: 20,
    }
});

export default withNavigation(IdConfirmScreen);