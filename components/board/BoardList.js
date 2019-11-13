import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Block } from "galio-framework";
import { Container, Content, List, ListItem, Body, Right } from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome';

class BoardList extends Component {

    render() {
        const { navigation, moveWrite, moveDetail } = this.props;

        return (
            <Container>
                <Content>
                    <Block right>
                        <View style={{ paddingRight: '5%', paddingTop: '4%' }}>
                            <Icon name="pencil" size={25}
                                onPress={() => navigation.navigate(moveWrite)}></Icon>
                        </View>
                    </Block>
                    <List>

                        <ListItem onPress={() => navigation.navigate(moveDetail)}>
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

                        <ListItem onPress={() => navigation.navigate(moveDetail)}>
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

                        <ListItem onPress={() => navigation.navigate(moveDetail)}>
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
            </Container >
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
        paddingTop: '20%',
    }
})

export default withNavigation(BoardList);