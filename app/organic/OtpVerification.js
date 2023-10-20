import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    StatusBar,
} from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { pxToDp, pxToDpW } from '../tools/Dimension'
import { colors, Heading2, Regular3, MediumStrong, MediumStrong2 } from '../GlobalStyle'
import { Header } from '../components/HeaderBar'
import Pin from '../../assets/svgs/pin.svg'
import { Button } from 'react-native-paper';

export default function App() {
    const navigation = useRouter()
    const [text, onChangeText] = useState("");
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" backgroundColor='#19233C' />

            <ScrollView >
                <View>
                    <Header step={'1'} progress={3 / 26} display={'flex'} />

                    <Pin width={pxToDp(75)} height={pxToDp(73)} style={{ marginTop: pxToDp(30), alignSelf: 'center' }} />

                    <Text style={styles.title_text}>Please enter your verification code</Text>

                    <Text style={styles.desc_text}>We’ve sent a verification code to</Text>

                    <Text style={styles.phone_text}>07234 569999</Text>

                    <View style={styles.circle_group}>
                        <View style={styles.circle} />
                        <View style={styles.circle} />
                        <View style={styles.circle} />
                        <View style={styles.circle} />
                        <View style={styles.circle} />
                        <View style={styles.circle} />
                    </View>

                    <Button style={styles.sms_btn} children={'Haven’t received the SMS?'} labelStyle={[MediumStrong, { color: colors.light_text }]} onPress={() => navigation.push('organic/EmailAddress')} />

                </View>
            </ScrollView>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.navy,
        paddingTop: pxToDp(16),
    },
    pin: {
        alignSelf: 'center',
    },
    title_text: {
        ...Heading2,
        color: colors.white,
        marginTop: pxToDp(24),
    },
    desc_text: {
        ...Regular3,
        color: colors.light_text,
        marginTop: pxToDp(24),
        marginHorizontal: pxToDp(16)
    },
    phone_text: {
        ...MediumStrong2,
        color: colors.light_text,
        marginHorizontal: pxToDp(16),
    },
    input: {
        height: pxToDp(30),
        marginTop: pxToDp(30),
        marginHorizontal: pxToDp(16),
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
        backgroundColor: '#757B8A',
        borderStyle: 'solid',
        borderRadius: pxToDp(16),
        margin: 8
    }
});
