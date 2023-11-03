import {
    StyleSheet,
    Text,
    View,
    StatusBar,
} from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';
import { pxToDp } from '../styles/Dimension'
import { Heading2, Medium } from '../styles/FontFamily'
import { Primary, TextLight } from '../styles/Colors'
import Pic from '../../assets/svgs/pic_everything.svg'
import { ButtonOrange } from '../components/Button';

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={Primary.navy100} />

            <Pic width={pxToDp(190)} height={pxToDp(190)} style={{ marginTop: pxToDp(78), alignSelf: 'center' }} />

            <Text style={styles.title_text}>Thank you that’s everything</Text>

            <Text style={styles.desc_text}>When you press submit it may take up to 20 seconds to process everything, so please be patient.</Text>

            <ButtonOrange style={styles.btn} title={'Get results'} onPress={() => router.push('/organic/GifLoading')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Primary.navy100
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
