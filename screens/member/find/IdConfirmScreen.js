import React, { Component } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Block, Button, Text, theme, } from 'galio-framework';
import { withNavigation } from 'react-navigation';

const { width } = Dimensions.get("screen");

class IdConfirmScreen extends Component {
    render() {
        const { navigation } = this.props;

        const navigate = () => {
            this.props.onClickListener()
            navigation.navigate('Login')
        }

        return (
            <Block flex>
                <Block style={styles.container}>
                    <Text style={styles.text}>이메일 정보와 일치하는 아이디입니다.</Text>
                    <Block style={styles.msgContiner}>
                        <Text style={{ fontSize: 15 }}>{navigation.getParam('memberId')}</Text>
                    </Block>
                    <Block middle>
                        <Button style={styles.button} 
                        onPress={() => { navigate() }} shadowless>확인</Button>
                    </Block>
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
        // paddingHorizontal: 56,
    },
    msgContiner: {
        backgroundColor: "white",
        alignItems: 'center',
        marginTop: theme.SIZES.BASE * 2,
        paddingVertical: theme.SIZES.BASE * 2,
        width: width - theme.SIZES.BASE * 6,
        borderWidth: 1,
    },
    button: {
        width: width - theme.SIZES.BASE * 6,
        height: theme.SIZES.BASE * 3,
        marginTop: 20,
    }
});

export default withNavigation(IdConfirmScreen);