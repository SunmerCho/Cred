import {
    StyleSheet,
    Text,
    View,
    StatusBar,
} from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';
import { pxToDp } from '../Dimension'
import { Heading2, Medium } from '../FontFamily'
import { Primary, TextLight } from '../Colors'
import Pic from '../../assets/svgs/pic_account_open.svg'
import { ButtonOrange } from '../components/Button';

export default function App() {

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={Primary.navy} />

            <Pic width={pxToDp(190)} height={pxToDp(190)} style={{ marginTop: pxToDp(78), alignSelf: 'center' }} />

            <Text style={styles.title_text}>Your account with Cred is now open</Text>

            <ButtonOrange style={styles.btn} title={'Take me to my dashboard'} onPress={() => router.push('/dash/Dashboard')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Primary.navy
    },
    title_text: {
        ...Heading2,
        color: TextLight.high,
        marginTop: pxToDp(24),
    },
    desc_text: {
        ...Medium,
        color: TextLight.low,
        marginTop: pxToDp(24),
        marginHorizontal: pxToDp(16)
    },
    btn: {
        position: 'absolute',
        bottom: pxToDp(16)
    },
});
