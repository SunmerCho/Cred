import {
    StyleSheet,
    Text,
    View,
    StatusBar
} from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';
import { pxToDp, pxToDpW } from '../styles/Dimension'
import { Heading2, Medium } from '../styles/FontFamily'
import { Primary, Secondary, TextLight } from '../styles/Colors'
import Back from '../../assets/svgs/ic_back.svg'
import { ButtonOrange } from '../components/Button';
import { DropdownInput } from '../components/TextInput';


export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={Primary.navy100} />

            <Back width={pxToDp(24)} height={pxToDp(24)} style={{ marginTop: pxToDp(16), marginLeft: pxToDp(20) }} onPress={() => router.back()} />

            <Text style={{ ...Heading2, color: Secondary.white, marginTop: pxToDp(40) }}>Payment date</Text>

            <Text style={styles.tip}>
                Please select the day you would like the payment to leave your account each month.
            </Text>

            <Text style={styles.tip}>
                If the payment day ever falls on a weekend, we will always take any payment on the following Monday.
            </Text>

            <DropdownInput style={{ marginTop: pxToDp(38) }} label="Payment date" disabled={false} onPress={() => router.push()} />

            <ButtonOrange style={styles.btn} title='Submit' onPress={() => { router.push('/organic/PaymentBasis') }} />
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Primary.navy100,
    },
    tip: {
        ...Medium,
        color: TextLight.low,
        marginTop: pxToDp(16),
        marginHorizontal: pxToDpW(16),
    },
    bottom: {
        width: '100%',
        height: pxToDp(84),
        backgroundColor: Primary.navy90,
        bottom: 0,
        position: 'absolute',
        justifyContent: 'center',
    },
    btn: {
        position: 'absolute',
        bottom: pxToDp(16)
    },
});
