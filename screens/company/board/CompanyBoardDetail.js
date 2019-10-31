import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class CompanyBoardDetail extends Component {
    
    render() {
        return (
            <View style={styles.container}>
                <Text>회사 게시글</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default CompanyBoardDetail;