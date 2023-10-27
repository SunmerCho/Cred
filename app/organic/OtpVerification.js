import {
    StyleSheet,
    Text,
    View,
    StatusBar,
} from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';
import { pxToDp, pxToDpW } from '../Dimension'
import { Heading2, Regular3, MediumStrong, MediumStrong2 } from '../FontFamily'
import { Primary, Secondary, TextLight } from '../Colors'
import { Header } from '../components/HeaderBar'
import Pic from '../../assets/svgs/pic_otp.svg'
import { Button, TextInput } from 'react-native-paper';

export default function App() {
    const [input, setInput] = useState('');
    const handleInput = (text) => {
        setInput(text);

        if (text.length == 6) {
            router.push('organic/EmailAddress')
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={Primary.navy} />

            <Header step={'1'} title={'/3    Account setup'} progress={3 / 26} display={'flex'} />

            <Pic width={pxToDp(75)} height={pxToDp(73)} style={{ marginTop: pxToDp(30), alignSelf: 'center' }} />

            <Text style={styles.title_text}>Please enter your verification code</Text>

            <Text style={styles.desc_text}>We’ve sent a verification code to</Text>

            <Text style={styles.phone_text}>07234 569999</Text>

            <TextInput style={styles.input} keyboardType='numeric' onChangeText={handleInput} maxLength={6} autoFocus={true}/>

            <View style={styles.circle_group}>
                <View style={[styles.circle, { backgroundColor: input.length > 0 ? Primary.orange : Primary.navy60 }]} />
                <View style={[styles.circle, { backgroundColor: input.length > 1 ? Primary.orange : Primary.navy60 }]} />
                <View style={[styles.circle, { backgroundColor: input.length > 2 ? Primary.orange : Primary.navy60 }]} />
                <View style={[styles.circle, { backgroundColor: input.length > 3 ? Primary.orange : Primary.navy60 }]} />
                <View style={[styles.circle, { backgroundColor: input.length > 4 ? Primary.orange : Primary.navy60 }]} />
                <View style={[styles.circle, { backgroundColor: input.length > 5 ? Primary.orange : Primary.navy60 }]} />
            </View>

            <Button style={styles.sms_btn} children={'Haven’t received the SMS?'} labelStyle={[MediumStrong, { color: TextLight.low }]} onPress={() => router.push('organic/EmailAddress')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Primary.navy,
        paddingTop: pxToDp(16),
    },
    title_text: {
        ...Heading2,
        color: Secondary.white,
        marginTop: pxToDp(24),
    },
    desc_text: {
        ...Regular3,
        color: TextLight.low,
        marginTop: pxToDp(24),
        marginHorizontal: pxToDp(16)
    },
    phone_text: {
        ...MediumStrong2,
        color: TextLight.low,
        marginHorizontal: pxToDp(16),
    },
    input: {
        width: 0,
        height: 0,
        position: 'absolute',
        top: -100
    },
    sms_btn: {
        width: pxToDpW(356),
        height: pxToDp(48),
        marginTop: pxToDp(24),
        alignContent: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    circle_group: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: pxToDp(30),
    },
    circle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: pxToDp(16),
        height: pxToDp(16),
        borderStyle: 'solid',
        borderRadius: pxToDp(16),
        margin: 8
    }
});
