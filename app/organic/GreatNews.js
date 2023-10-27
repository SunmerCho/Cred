import {
    StyleSheet,
    Text,
    View,
    StatusBar,
} from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';
import { pxToDp} from '../Dimension'
import { Large, LargeStrong, Medium2, Heading1, Heading3, Heading4, Heading5 } from '../FontFamily'
import { Primary, Secondary, TextLight } from '../Colors'
import Pic from '../../assets/svgs/pic_success.svg'
import { ButtonOrange } from '../components/Button';

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={Primary.navy} />

            <Pic width={pxToDp(76)} height={pxToDp(76)} style={{ marginTop: pxToDp(102), alignSelf: 'center' }} />

            <Text style={{ ...Heading1, color: Secondary.white, marginTop: pxToDp(18), }}>Great news!</Text>

            <Text style={{ ...Large, color: TextLight.low, marginTop: pxToDp(16), letterSpacing: -0.2 }}>We are able to offer up to</Text>

            <Text style={{ ...LargeStrong, color: TextLight.high, letterSpacing: -0.2 }}>£10,000.00</Text>

            <Text style={{ ...Heading4, color: Primary.navy40, marginTop: pxToDp(34) }}>APR</Text>

            <View style={{ flexDirection: 'row', marginTop: pxToDp(6), alignItems: 'baseline' }}>

                <Text style={{ ...Heading3, color: Secondary.white }}>19.9</Text>

                <Text style={{ ...Heading5, color: Secondary.white }}>%</Text>
            </View>

            <Text style={{ ...Medium2, color: Primary.navy40, marginTop: pxToDp(46), marginHorizontal: pxToDp(24) }}>When you press submit it may take up to 20 seconds to process everything, so please be patient.</Text>

            <ButtonOrange style={styles.btn} title={'Continue'} onPress={() => router.push('/organic/TheLegalBit')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Primary.navy,
        alignItems: 'center',
    },
    btn: {
        position: 'absolute',
        bottom: pxToDp(16)
    },
});
