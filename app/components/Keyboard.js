import React, { useState } from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { pxToDp, pxToDpW } from '../Dimension';
import { Primary,TextLight } from '../Colors'
import { Button } from 'react-native-paper';
import Delete from '../../assets/svgs/ic_delete.svg'
import Tab from '../../assets/svgs/ic_keyboard_tab.svg'

const NumberKeyboard = (props, { onInputChange, onDone }) => {

    const [input, setInput] = useState('');

    const handleNumberPress = (number) => {
        setInput(input + number);
        onInputChange(input + number);
    }

    const deleteLastNumber = () => {
        let numbers = input.slice(0, -1)
        setInput(numbers);
        onInputChange(numbers)
    }

    return (
        <View style={styles.container}>
            <View style={styles.cloum}>
                <View style={styles.numberRow}>
                    <Button mode='text' style={styles.btn_common} labelStyle={styles.btn_text} children={'1'} onPress={() => handleNumberPress('1')} />
                    <Button mode='text' style={styles.btn_common} labelStyle={styles.btn_text} children={'2'} onPress={() => handleNumberPress('2')} />
                    <Button mode='text' style={styles.btn_common} labelStyle={styles.btn_text} children={'3'} onPress={() => handleNumberPress('3')} />
                </View>

                <View style={styles.numberRow}>
                    <Button mode='text' style={styles.btn_common} labelStyle={styles.btn_text} children={'4'} onPress={() => handleNumberPress('4')} />
                    <Button mode='text' style={styles.btn_common} labelStyle={styles.btn_text} children={'5'} onPress={() => handleNumberPress('5')} />
                    <Button mode='text' style={styles.btn_common} labelStyle={styles.btn_text} children={'6'} onPress={() => handleNumberPress('6')} />
                </View>

                <View style={styles.numberRow}>
                    <Button mode='text' style={styles.btn_common} labelStyle={styles.btn_text} children={'7'} onPress={() => handleNumberPress('7')} />
                    <Button mode='text' style={styles.btn_common} labelStyle={styles.btn_text} children={'8'} onPress={() => handleNumberPress('8')} />
                    <Button mode='text' style={styles.btn_common} labelStyle={styles.btn_text} children={'9'} onPress={() => handleNumberPress('9')} />
                </View>

                <View style={styles.numberRow}>
                    <Button mode='text' style={styles.btn_common} labelStyle={styles.btn_text} children={'0'} onPress={() => handleNumberPress('0')} />
                </View>
            </View>

            <Pressable onPress={deleteLastNumber}>
                <Delete style={styles.delete} width={pxToDpW(26)} height={pxToDp(18)} />
            </Pressable>

            <Pressable onPress={onDone}>
                <Tab style={styles.tab} width={pxToDpW(53)} height={pxToDp(32)} />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: pxToDpW(390),
        height: pxToDp(228),
        backgroundColor: '#0C111D',
        position: 'absolute',
        bottom: 0
    },
    cloum: {
        flex: 1,
        justifyContent: 'space-evenly',
    },
    numberRow: {
        flex: 1,
        width: pxToDpW(390),
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    btn_common: {
        justifyContent: 'center',
    },
    btn_text: {
        flex: 1,
        fontSize: pxToDp(30),
        lineHeight: pxToDp(35.16),
        fontWeight: '400',
        color: '#A3A7B1',
    },
    delete: {
        borderRadius: pxToDp(4),
        position: 'absolute',
        bottom: pxToDp(80),
        right: pxToDp(24),
    },
    tab: {
        borderRadius: pxToDp(4),
        backgroundColor: Primary.orange,
        position: 'absolute',
        bottom: pxToDp(20),
        right: pxToDp(20),
    },

});

export default NumberKeyboard;