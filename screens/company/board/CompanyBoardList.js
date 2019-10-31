import React, { Component } from 'react';
import { StyleSheet, Dimensions, Text, View } from 'react-native';
import { Block, theme } from "galio-framework";
import { Container, Header, Content, List, ListItem, Thumbnail, Left, Body, Right, Button } from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome';
class CompanyBoardScreen extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Block right style={{ paddingRight: '5%', paddingTop: '4%' }}>
                        <Icon name="pencil" size={20}></Icon>
                    </Block>
                    <List>

                        <ListItem onPress={() => this.props.navigation.navigate("CompanyBoardDetail")}>
                            <Body>
                                <Text style={styles.title}>Sankhadeep</Text>
                                <Text note numberOfLines={2}>
                                    Its time to build a difference . .
                                    Its time to build a difference . .
                                    Its time to build a difference . ..</Text>
                                <Block row>
                                    <Text style={styles.text}>11시간 전 {'\u00A0'}{'\u00A0'}{'\u00A0'}</Text>
                                    <Text style={styles.text}>| {'\u00A0'}{'\u00A0'}{'\u00A0'}작성자</Text>
                                </Block>
                            </Body>
                            <Right style={styles.icons}>
                                <Block row>
                                    <Icon name="leaf" size={20} color='#0B5713' />
                                    <Text>{'\u00A0'}12 {'\u00A0'}{'\u00A0'}</Text>
                                    <Icon name="comments" size={20} />
                                    <Text>{'\u00A0'}4 {'\u00A0'}{'\u00A0'}</Text>
                                </Block>
                            </Right>
                        </ListItem>

                        <ListItem onPress={() => this.props.navigation.navigate("CompanyBoardDetail")}>
                            <Body>
                                <Text style={styles.title}>Sankhadeep</Text>
                                <Text note numberOfLines={2}>
                                    Its time to build a difference . .
                                    Its time to build a difference . .
                                    Its time to build a difference . ..</Text>
                                <Block row>
                                    <Text style={styles.text}>11시간 전 {'\u00A0'}{'\u00A0'}{'\u00A0'}</Text>
                                    <Text style={styles.text}>| {'\u00A0'}{'\u00A0'}{'\u00A0'}작성자</Text>
                                </Block>
                            </Body>
                            <Right style={styles.icons}>
                                <Block row>
                                    <Icon name="leaf" size={20} color='#0B5713' />
                                    <Text>{'\u00A0'}12 {'\u00A0'}{'\u00A0'}</Text>
                                    <Icon name="comments" size={20} />
                                    <Text>{'\u00A0'}4 {'\u00A0'}{'\u00A0'}</Text>
                                </Block>
                            </Right>
                        </ListItem>

                        <ListItem onPress={() => this.props.navigation.navigate("CompanyBoardDetail")}>
                            <Body>
                                <Text style={styles.title}>Sankhadeep</Text>
                                <Text note numberOfLines={2}>
                                    Its time to build a difference . .
                                    Its time to build a difference . .
                                    Its time to build a difference . ..</Text>
                                <Block row>
                                    <Text style={styles.text}>11시간 전 {'\u00A0'}{'\u00A0'}{'\u00A0'}</Text>
                                    <Text style={styles.text}>| {'\u00A0'}{'\u00A0'}{'\u00A0'}작성자</Text>
                                </Block>
                            </Body>
                            <Right style={styles.icons}>
                                <Block row>
                                    <Icon name="leaf" size={20} color='#0B5713' />
                                    <Text>{'\u00A0'}12 {'\u00A0'}{'\u00A0'}</Text>
                                    <Icon name="comments" size={20} />
                                    <Text>{'\u00A0'}4 {'\u00A0'}{'\u00A0'}</Text>
                                </Block>
                            </Right>
                        </ListItem>

                        <ListItem onPress={() => this.props.navigation.navigate("CompanyBoardDetail")}>
                            <Body>
                                <Text style={styles.title}>Sankhadeep</Text>
                                <Text note numberOfLines={2}>
                                    Its time to build a difference . .
                                    Its time to build a difference . .
                                    Its time to build a difference . ..</Text>
                                <Block row>
                                    <Text style={styles.text}>11시간 전 {'\u00A0'}{'\u00A0'}{'\u00A0'}</Text>
                                    <Text style={styles.text}>| {'\u00A0'}{'\u00A0'}{'\u00A0'}작성자</Text>
                                </Block>
                            </Body>
                            <Right style={styles.icons}>
                                <Block row>
                                    <Icon name="leaf" size={20} color='#0B5713' />
                                    <Text>{'\u00A0'}12 {'\u00A0'}{'\u00A0'}</Text>
                                    <Icon name="comments" size={20} />
                                    <Text>{'\u00A0'}4 {'\u00A0'}{'\u00A0'}</Text>
                                </Block>
                            </Right>
                        </ListItem>

                        <ListItem onPress={() => this.props.navigation.navigate("CompanyBoardDetail")}>
                            <Body>
                                <Text style={styles.title}>Sankhadeep</Text>
                                <Text note numberOfLines={2}>
                                    Its time to build a difference . .
                                    Its time to build a difference . .
                                    Its time to build a difference . ..</Text>
                                <Block row>
                                    <Text style={styles.text}>11시간 전 {'\u00A0'}{'\u00A0'}{'\u00A0'}</Text>
                                    <Text style={styles.text}>| {'\u00A0'}{'\u00A0'}{'\u00A0'}작성자</Text>
                                </Block>
                            </Body>
                            <Right style={styles.icons}>
                                <Block row>
                                    <Icon name="leaf" size={20} color='#0B5713' />
                                    <Text>{'\u00A0'}12 {'\u00A0'}{'\u00A0'}</Text>
                                    <Icon name="comments" size={20} />
                                    <Text>{'\u00A0'}4 {'\u00A0'}{'\u00A0'}</Text>
                                </Block>
                            </Right>
                        </ListItem>

                        <ListItem onPress={() => this.props.navigation.navigate("CompanyBoardDetail")}>
                            <Body>
                                <Text style={styles.title}>Sankhadeep</Text>
                                <Text note numberOfLines={2}>
                                    Its time to build a difference . .
                                    Its time to build a difference . .
                                    Its time to build a difference . ..</Text>
                                <Block row>
                                    <Text style={styles.text}>11시간 전 {'\u00A0'}{'\u00A0'}{'\u00A0'}</Text>
                                    <Text style={styles.text}>| {'\u00A0'}{'\u00A0'}{'\u00A0'}작성자</Text>
                                </Block>
                            </Body>
                            <Right style={styles.icons}>
                                <Block row>
                                    <Icon name="leaf" size={20} color='#0B5713' />
                                    <Text>{'\u00A0'}12 {'\u00A0'}{'\u00A0'}</Text>
                                    <Icon name="comments" size={20} />
                                    <Text>{'\u00A0'}4 {'\u00A0'}{'\u00A0'}</Text>
                                </Block>
                            </Right>
                        </ListItem>

                        <ListItem onPress={() => this.props.navigation.navigate("CompanyBoardDetail")}>
                            <Body>
                                <Text style={styles.title}>Sankhadeep</Text>
                                <Text note numberOfLines={2}>
                                    Its time to build a difference . .
                                    Its time to build a difference . .
                                    Its time to build a difference . ..</Text>
                                <Block row>
                                    <Text style={styles.text}>11시간 전 {'\u00A0'}{'\u00A0'}{'\u00A0'}</Text>
                                    <Text style={styles.text}>| {'\u00A0'}{'\u00A0'}{'\u00A0'}작성자</Text>
                                </Block>
                            </Body>
                            <Right style={styles.icons}>
                                <Block row>
                                    <Icon name="leaf" size={20} color='#0B5713' />
                                    <Text>{'\u00A0'}12 {'\u00A0'}{'\u00A0'}</Text>
                                    <Icon name="comments" size={20} />
                                    <Text>{'\u00A0'}4 {'\u00A0'}{'\u00A0'}</Text>
                                </Block>
                            </Right>
                        </ListItem>

                    </List>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 18
    },
    text: {
        color: '#707070',
        paddingTop: '4%'
    },
    icons: {
        paddingTop: '19%',
    }
})

export default CompanyBoardScreen;