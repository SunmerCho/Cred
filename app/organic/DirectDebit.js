import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    ScrollView
} from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';
import { pxToDp, pxToDpW } from '../styles/Dimension'
import { Heading2, Heading4, Heading5, Medium, Samll } from '../styles/FontFamily'
import { Primary, Secondary, TextLight } from '../styles/Colors'
import Back from '../../assets/svgs/ic_back.svg'
import Pic from '../../assets/svgs/pic_pre-contractual.svg'
import { ButtonOrange } from '../components/Button';

export default function App() {
    return (
        <View style={{ flex: 1, backgroundColor: Primary.navy100, }}>
            <StatusBar backgroundColor={Primary.navy100} />

            <ScrollView style={{ flex: 1, marginBottom: pxToDp(90) }}>
                <View style={{ flex: 1 }}>

                    <Back width={pxToDp(24)} height={pxToDp(24)} style={{ marginTop: pxToDp(16), marginLeft: pxToDp(20) }} onPress={() => router.back()} />

                    <Pic width={pxToDp(76)} height={pxToDp(76)} style={{ marginTop: pxToDp(16), alignSelf: 'center' }} />

                    <Text style={{ ...Heading2, color: Secondary.white, marginTop: pxToDp(20) }}>Direct Debit mandate</Text>

                    <View style={styles.box} >

                        <Text style={{ ...Heading4, color: Secondary.white }}>Your Direct Debit details</Text>

                        <Text style={{ height:pxToDp(56), ...Samll, color: TextLight.high, letterSpacing: -0.2, marginTop: pxToDp(12), marginHorizontal: pxToDpW(16) }}>Any payments for your Cred account will be taken from the account detailed below</Text>

                        <Text style={{ ...Heading5, color: Primary.navy40 }}>Account name</Text>
                        <Text style={{ ...Heading4, color: Secondary.white }}>Dave Cheers</Text>

                        <Text style={{ ...Heading5, color: Primary.navy40, marginTop: pxToDp(12) }}>Sort code</Text>
                        <Text style={{ ...Heading4, color: Secondary.white }}>09 87 44</Text>

                        <Text style={{ ...Heading5, color: Primary.navy40, marginTop: pxToDp(12) }}>Account number</Text>
                        <Text style={{ ...Heading4, color: Secondary.white }}>2334555533</Text>

                    </View>

                    <Text style={{ ...Medium, color: TextLight.low, marginTop: pxToDp(30), marginHorizontal: pxToDpW(16), textAlign: 'left' }}>
                        Sed lacus tortor hac condimentum at massa in et adipiscing elit tellus pellentesque vulputate diam pulvinar nibh in sed risus tortor rhoncus sit dignissim faucibus sed aliquam id orci quisque ac fermentum nisl aliquam aliquam amet mi faucibus aliquet est id justo, eget felis quisque.

                        Fames egestas cras commodo quisque luctus tellus donec quisque faucibus viverra id pulvinar adipiscing in est convallis vivamus scelerisque quis nulla nunc orci, vitae ut neque porta diam lectus sem tellus

                        Quisque tristique pellentesque eu feugiat volutpat eu, sodales accumsan mauris enim eu quis eget fermentum in donec tellus cras feugiat rhoncus vel porttitor commodo. quisque faucibus viverra id pulvinar adipiscing in est convallis vivamus scelerisque quis nulla nunc orci, vitae

                    </Text>
                </View >
            </ScrollView>

            <View style={styles.bottom}>
                <ButtonOrange title='I have read and I agree' onPress={() => { router.push('/organic/PaymentDate') }} />
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: Primary.navy80,
        marginTop: pxToDp(24),
        marginHorizontal: pxToDpW(16),
        paddingTop: pxToDp(24),
        paddingBottom: pxToDp(16),
        borderRadius: pxToDpW(4),
        alignItems: 'center'
    },
    bottom: {
        width: '100%',
        height: pxToDp(84),
        backgroundColor: Primary.navy90,
        bottom: 0,
        position: 'absolute',
        justifyContent: 'center',
    }
});
