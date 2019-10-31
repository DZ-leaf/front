import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Block, Button } from "galio-framework";
import RadioForm from 'react-native-simple-radio-button';

class RepeatModal extends Component {
    state = {
        data: [
            { label: '안 함', value: 0 },
            { label: '매일', value: 1 },
            { label: '매주', value: 2 },
            { label: '매월', value: 3 },
            { label: '매년', value: 4 },
            { label: '직접 설정', value: 5 },
        ]
    }

    selectButton = (selected) => {
        // this.setState({ selectValue: this.state.data[selected] });
        this.props.setRepeat(this.state.data[selected]);
        this.props.closeModal();
    }


    render() {        
        return (
            <Block flex style={styles.container}>
                <Block style={styles.radioContainer}>
                    <RadioForm radio_props={this.state.data}
                        initial={this.props.selectedValue}
                        animation={false}
                        buttonColor={'gray'}
                        onPress={(value) => { this.selectButton(value) }} />
                </Block>
                {/* <Button onPress={() => { this.props.closeModal() }}>취소</Button> */}
            </Block>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f2f0f2',
    },
    radioContainer: {
        marginTop: 50,
        borderRadius: 30,
        paddingHorizontal: '5%',
        paddingBottom: '1%',
        paddingTop: '3%',
        backgroundColor: 'white',
    },
})
export default RepeatModal;