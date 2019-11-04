import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { StyleSheet, Text } from 'react-native';
import { Card, CardItem, Right, Left } from 'native-base';
import { Block } from "galio-framework";

import Icon from 'react-native-vector-icons/FontAwesome';

class BoardCard extends Component {

    render() {
        const { navigation } = this.props;
        return (
            <Block style={{ padding: '3%' }}>
                <Card>
                    <CardItem header bordered style={styles.cardItem}>
                        <Left>
                            <Text>게시판</Text>
                        </Left>
                        <Right>
                            <Text onPress={() => navigation.navigate("CompanyBoard")}
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
                                <Text>{'\u00A0'}12{'\u00A0'}{'\u00A0'}{'\u00A0'}</Text>
                                <Icon name="comments" size={20} />
                                <Text>{'\u00A0'}4{'\u00A0'}{'\u00A0'}{'\u00A0'}</Text>
                                <Text>{'\u00A0'}11시간 전</Text>
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
                                <Text>{'\u00A0'}12{'\u00A0'}{'\u00A0'}{'\u00A0'}</Text>
                                <Icon name="comments" size={20} />
                                <Text>{'\u00A0'}4{'\u00A0'}{'\u00A0'}{'\u00A0'}</Text>
                                <Text>{'\u00A0'}11시간 전</Text>
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
                                <Text>{'\u00A0'}12{'\u00A0'}{'\u00A0'}{'\u00A0'}</Text>
                                <Icon name="comments" size={20} />
                                <Text>{'\u00A0'}4{'\u00A0'}{'\u00A0'}{'\u00A0'}</Text>
                                <Text>{'\u00A0'}11시간 전</Text>
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
                                <Text>{'\u00A0'}12{'\u00A0'}{'\u00A0'}{'\u00A0'}</Text>
                                <Icon name="comments" size={20} />
                                <Text>{'\u00A0'}4{'\u00A0'}{'\u00A0'}{'\u00A0'}</Text>
                                <Text>{'\u00A0'}11시간 전</Text>
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
                                <Text>{'\u00A0'}12{'\u00A0'}{'\u00A0'}{'\u00A0'}</Text>
                                <Icon name="comments" size={20} />
                                <Text>{'\u00A0'}4{'\u00A0'}{'\u00A0'}{'\u00A0'}</Text>
                                <Text>{'\u00A0'}11시간 전</Text>
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
                                <Text>{'\u00A0'}12{'\u00A0'}{'\u00A0'}{'\u00A0'}</Text>
                                <Icon name="comments" size={20} />
                                <Text>{'\u00A0'}4{'\u00A0'}{'\u00A0'}{'\u00A0'}</Text>
                                <Text>{'\u00A0'}11시간 전</Text>
                            </Block>
                        </Right>
                    </CardItem>
                </Card>
            </Block>
        );
    }
}

const styles = StyleSheet.create({
    cardItem: {
        alignItems: 'center',
        alignSelf: 'center'
    }
})

export default withNavigation(BoardCard);