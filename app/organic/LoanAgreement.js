import {
    StyleSheet,
    Text,
    View,
    StatusBar
} from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';
import { pxToDp, pxToDpW } from '../styles/Dimension'
import { MediumStrong2, Heading2, Samll, SamllStrong } from '../styles/FontFamily'
import { Primary, Secondary, TextLight } from '../styles/Colors'
import Back from '../../assets/svgs/ic_back.svg'
import Pic from '../../assets/svgs/pic_pre-contractual.svg'
import { ButtonOrange } from '../components/Button';

export default function App() {

    return (
        <View style={{ flex: 1, backgroundColor: Primary.navy100, }}>
            <StatusBar backgroundColor={Primary.navy100} />

            <Back width={pxToDp(24)} height={pxToDp(24)} style={{ marginTop: pxToDp(16) ,marginLeft: pxToDp(20)} } onPress={() => router.back()}/>

            <Pic width={pxToDp(76)} height={pxToDp(76)} style={{ marginTop: pxToDp(16), alignSelf: 'center' }} />

            <Text style={{ ...Heading2, color: Secondary.white, marginTop: pxToDp(20), }}>Loan Agreement</Text>

            <View style={{ width: pxToDpW(70), height: pxToDp(1), backgroundColor: Primary.navy40, marginTop: pxToDp(44), marginLeft: pxToDpW(190) }} />

            <Text style={{ ...MediumStrong2, color: TextLight.high, marginTop: pxToDp(32), marginLeft: pxToDp(24), textAlign: 'left' }}>1. Contract details </Text>

            <Item style={{ marginTop: pxToDp(22) }} label='Creditor' value='Line of Credit' />
            <Item style={{ marginTop: pxToDp(14) }} label='The total amout of credit' value='We will set your Credit Limit when we open your account and tell you what it is. We reserve the right to vary the limit.' />
            <Item style={{ marginTop: pxToDp(22) }} label='How and when credit will be provided' value='We will provide credit to you through a personal loan as well\ras through the charging of purchases cash advances and\ror cash advance transactions to your account.' />
            <Item style={{ marginTop: pxToDp(22) }} label='Urna in elementum sem accumsan turpis et, vitae' value='Ullamcorper ipsum sed tellus eleifend ipsum ultricies id viverra leo enim, praesent nam lorem diam cursus enim donec accumsan, quam vitae semper' />

            <View style={styles.bottom}>
                <ButtonOrange title='I have read and I agree' onPress={() => { router.push('/organic/DirectDebit') }} />
            </View>
        </View >
    );
}

const Item = (props) => {
    return (
        <View style={[{ flexDirection: 'row' }, props.style]}>
            <Text style={styles.item_label}>{props.label}</Text>
            <Text style={styles.item_value}>{props.value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    bottom: {
        width: '100%',
        height: pxToDp(84),
        backgroundColor: Primary.navy90,
        bottom: 0,
        position: 'absolute',
        justifyContent: 'center'
    },
    item_label: {
        width: pxToDpW(140),
        ...SamllStrong,
        color: TextLight.high,
        marginLeft: pxToDp(28),
        textAlign: 'left'
    },
    item_value: {
        ...Samll,
        color: TextLight.low,
        marginLeft: pxToDpW(20),
        width: pxToDpW(176),
        letterSpacing: -0.2,
        textAlign: 'left'
    },
});
