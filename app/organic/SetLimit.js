import {
    StyleSheet,
    Text,
    View,
    StatusBar,
} from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';
import { pxToDp, pxToDpW } from '../styles/Dimension'
import { Medium2, MediumStrong2, Heading2, Heading3, Heading4, Heading5, Samll } from '../styles/FontFamily'
import { Primary, Secondary, TextLight } from '../styles/Colors'
import Back from '../../assets/svgs/ic_back.svg'
import Minus from '../../assets/svgs/ic_minus.svg'
import Plus from '../../assets/svgs/ic_plus.svg'
import { ButtonOrange } from '../components/Button';

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={Primary.navy100} />

            <Back width={pxToDp(24)} height={pxToDp(24)} style={{ marginTop: pxToDp(16), marginLeft: pxToDp(20) }} onPress={() => router.back()} />

            <Text style={{ ...Heading2, color: Secondary.white, marginTop: pxToDp(40), }}>Select your limit</Text>

            <View style={styles.box} >

                <Text style={{ ...Heading4, color: Secondary.white }}>Set your credit limit</Text>

                <View style={{ flexDirection: 'row', height: pxToDp(56), marginTop: pxToDp(16) }}>
                    <View width={pxToDp(56)} height={pxToDp(56)} style={{ backgroundColor: Primary.navy80, alignItems: 'center', justifyContent: 'center' }} >
                        <Minus width={pxToDp(24)} height={pxToDp(24)} />
                    </View>

                    <View style={{ height: pxToDp(56), backgroundColor: Primary.navy95, flex: 1, justifyContent: 'center' }}>
                        <Text style={{ ...Heading3, color: TextLight.high }}>£10,000</Text>
                    </View>

                    <View width={pxToDp(56)} height={pxToDp(56)} style={{ backgroundColor: Primary.navy80, alignItems: 'center', justifyContent: 'center' }} >
                        <Plus width={pxToDp(24)} height={pxToDp(24)} />
                    </View>
                </View>

                <View style={{ height: pxToDp(38), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: pxToDp(12), paddingLeft: pxToDp(6), paddingRight: pxToDp(22) }}>
                    <Text style={{ ...Samll, color: TextLight.low }}>£100</Text>
                    <View style={{ flex: 1 }} />
                    <Text style={{ ...Samll, color: TextLight.low }}>£10,000</Text>
                </View>

                <Text style={{ ...Heading4, color: Primary.navy40, marginTop: pxToDp(58) }}>APR</Text>

                <View style={{ flexDirection: 'row', marginTop: pxToDp(6), alignItems: 'baseline' }}>

                    <Text style={{ ...Heading3, color: Secondary.white }}>19.9</Text>

                    <Text style={{ ...Heading5, color: Secondary.white }}>%</Text>
                </View>

                <Text style={{ ...MediumStrong2, color: Secondary.blue, marginTop: pxToDp(40) }}>Terms and conditions</Text>

            </View>

            <ButtonOrange style={styles.btn} title={'Set Limit'} onPress={() => router.push('/organic/AccountOpen')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Primary.navy100,
    },
    box: {
        backgroundColor: Primary.navy90,
        marginTop: pxToDp(24),
        marginHorizontal: pxToDpW(18),
        paddingTop: pxToDp(18),
        paddingBottom: pxToDp(158),
        borderRadius: pxToDpW(4),
        alignItems: 'center'
    },
    // set: {
    //     flex:
    //     backgroundColor: Primary.navy90,
    //     marginTop: pxToDp(24),
    //     marginHorizontal: pxToDpW(18),
    //     paddingTop: pxToDp(18),
    //     // paddingBottom: pxToDp(16),
    //     borderRadius: pxToDpW(4),
    //     alignItems: 'center'
    // },
    btn: {
        position: 'absolute',
        bottom: pxToDp(16)
    },
});
