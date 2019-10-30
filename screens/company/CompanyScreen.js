import React, { Component } from 'react';
import { StyleSheet, Dimensions, Text, ScrollView } from 'react-native';
import { Container, Header, Content, Card, CardItem, Right, Left } from 'native-base';
import { Block, theme, Button } from "galio-framework";

const { width } = Dimensions.get("screen");

import Icon from 'react-native-vector-icons/FontAwesome';
class CompanyScreen extends Component {

    render() {
        return (
            <Block style={styles.container}>
                <ScrollView>
                    <Block style={{ padding: '3%' }}>
                        <Card>
                            <CardItem header bordered style={styles.cardItem}>
                                <Left>
                                    <Text>게시판</Text>
                                </Left>
                                <Right>
                                    <Text onPress={() => alert("This is Card Body")}
                                        style={{ color: '#0B5713' }}>More...</Text>
                                </Right>
                            </CardItem>
                            <CardItem style={styles.cardItem}>
                                <Left>
                                    <Text>Google Plus</Text>
                                </Left>
                                <Right>
                                    <Block row>
                                        <Icon name="leaf" size={20} color='#0B5713' />
                                        <Text>{'\u00A0'}12 {'\u00A0'}{'\u00A0'}</Text>
                                        <Icon name="comments" size={20} />
                                        <Text>{'\u00A0'}4 {'\u00A0'}{'\u00A0'}</Text>
                                        <Text>11시간 전</Text>
                                    </Block>
                                </Right>
                            </CardItem>
                            <CardItem style={styles.cardItem}>
                                <Left>
                                    <Text>Google Plus</Text>
                                </Left>
                                <Right>
                                    <Block row>
                                        <Icon name="leaf" size={20} color='#0B5713' />
                                        <Text>{'\u00A0'}12 {'\u00A0'}{'\u00A0'}</Text>
                                        <Icon name="comments" size={20} />
                                        <Text>{'\u00A0'}4 {'\u00A0'}{'\u00A0'}</Text>
                                        <Text>11시간 전</Text>
                                    </Block>
                                </Right>
                            </CardItem>
                            <CardItem style={styles.cardItem}>
                                <Left>
                                    <Text>Google Plus</Text>
                                </Left>
                                <Right>
                                    <Block row>
                                        <Icon name="leaf" size={20} color='#0B5713' />
                                        <Text>{'\u00A0'}12 {'\u00A0'}{'\u00A0'}</Text>
                                        <Icon name="comments" size={20} />
                                        <Text>{'\u00A0'}4 {'\u00A0'}{'\u00A0'}</Text>
                                        <Text>11시간 전</Text>
                                    </Block>
                                </Right>
                            </CardItem>
                            <CardItem style={styles.cardItem}>
                                <Left>
                                    <Text>Google Plus</Text>
                                </Left>
                                <Right>
                                    <Block row>
                                        <Icon name="leaf" size={20} color='#0B5713' />
                                        <Text>{'\u00A0'}12 {'\u00A0'}{'\u00A0'}</Text>
                                        <Icon name="comments" size={20} />
                                        <Text>{'\u00A0'}4 {'\u00A0'}{'\u00A0'}</Text>
                                        <Text>11시간 전</Text>
                                    </Block>
                                </Right>
                            </CardItem>
                            <CardItem style={styles.cardItem}>
                                <Left>
                                    <Text>Google Plus</Text>
                                </Left>
                                <Right>
                                    <Block row>
                                        <Icon name="leaf" size={20} color='#0B5713' />
                                        <Text>{'\u00A0'}12 {'\u00A0'}{'\u00A0'}</Text>
                                        <Icon name="comments" size={20} />
                                        <Text>{'\u00A0'}4 {'\u00A0'}{'\u00A0'}</Text>
                                        <Text>11시간 전</Text>
                                    </Block>
                                </Right>
                            </CardItem>
                        </Card>
                    </Block>
                </ScrollView>
            </Block>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F2F0',
        // width: width * 0.9
    },
    cardItem: {
        alignItems: 'center',
        alignSelf: 'center'
    }
})

export default CompanyScreen;