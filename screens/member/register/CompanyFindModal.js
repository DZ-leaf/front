import React, { useState } from 'react';
import { StyleSheet, Dimensions, View, FlatList } from 'react-native';
import { Block, Button, theme, Input, Text } from 'galio-framework';

const { width, height } = Dimensions.get("screen");

const CompanyFindModal = (props) => {

    const [company, setCompany] = useState('');

    function Item({title}) {
        return (
            <Block flex width={width * 0.9}>
                <View style={styles.item}>
                    <Text onPress={() => {props.selectCompany(title); props.closeModal()}}>{title}</Text>
                </View>
            </Block>
        );
    }

    return (
        <Block flex style={styles.container}>
            <Block width={width * 0.9}>
                <View style={styles.inputs, styles.inputButton}>
                    <Input placeholder="회사" iconContent={<Block />}
                        style={{ borderRadius: 0 }} color={theme.COLORS.BLACK}
                        onChangeText={(text) => { setCompany(text) }} />
                    <Button style={styles.button, { width: '10%' }} shadowless
                        onPress={() => props.findCompany(company)}>찾기</Button>
                </View>
                <FlatList height={height * 0.6}
                    data={props.companyList}
                    renderItem={({ item }) => <Item title={item.companyNm} />}
                    keyExtractor={item => item.companyNm}/>
                <View style={{ paddingTop: '5%', alignItems: 'center' }}>
                    <Button style={styles.button} onPress={props.closeModal} shadowless>닫기</Button>
                </View>
            </Block>
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
    button: {
        width: width - theme.SIZES.BASE * 6,
        height: theme.SIZES.BASE * 3,
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
    item: {
        backgroundColor: 'white',
        height: height * 0.05,
        paddingTop: '2.5%',
        paddingLeft: '4%',
        marginVertical: '1%',
    },
});

export default CompanyFindModal;