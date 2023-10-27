import {
    StyleSheet,
    Text,
    View,
    StatusBar
} from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';
import { pxToDp, pxToDpW } from '../Dimension'
import { Heading2, Heading4, Medium } from '../FontFamily'
import { Primary, Secondary, TextLight } from '../Colors'
import { CheckboxRound } from '../components/CheckBox';
import Back from '../../assets/svgs/ic_back.svg'
import { ButtonOrange } from '../components/Button';


export default function App() {
    const [minimumChecked, setMinimumChecked] = useState(false);
    const [statementChecked, setStatementChecked] = useState(false);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={Primary.navy} />

            <Back width={pxToDp(24)} height={pxToDp(24)} style={{ marginTop: pxToDp(16), marginLeft: pxToDp(20) }} onPress={() => router.back()} />

            <Text style={{ ...Heading2, color: Secondary.white, marginTop: pxToDp(40) }}>How would you like to pay?</Text>

            <View style={[styles.box, { marginTop: pxToDp(32) }]}>
                <Text style={{ ...Heading4, color: Secondary.white, marginLeft: pxToDp(20), flex: 1, textAlign: 'left' }}>Make the minimum payment</Text>
                <CheckboxRound checked={minimumChecked} onChange={() => setMinimumChecked(!minimumChecked)} />
            </View>

            <View style={[styles.box, { marginTop: pxToDp(4) }]}>
                <Text style={{ ...Heading4, color: Secondary.white, marginLeft: pxToDp(20), flex: 1, textAlign: 'left' }}>Pay the statement balance</Text>
                <CheckboxRound checked={statementChecked} onChange={() => setStatementChecked(!statementChecked)} />
            </View>

            <Text style={styles.tip}>
                Please note that paying the statement balance each month requires you to pay the full statement balance in one payment each month, whereas if you only make the minimum payment then over time you will pay more interest.
            </Text>

            <ButtonOrange style={styles.btn} title='Submit' onPress={() => { router.push('/organic/SetLimit') }} />
        </View >
    );
}

const Item = (props) => {
    return (
        <View style={styles.box}>
            <Text style={styles.item_label}>{props.label}</Text>
            <Text style={styles.item_value}>{props.value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Primary.navy,
    },
    box: {
        height: pxToDp(54),
        backgroundColor: Primary.navy90,
        marginHorizontal: pxToDpW(16),
        borderRadius: pxToDpW(8),
        alignItems: 'center',
        flexDirection: 'row',
        paddingRight: pxToDpW(10)
    },
    tip: {
        ...Medium,
        color: TextLight.low,
        marginTop: pxToDp(32),
        marginHorizontal: pxToDpW(16),
    },
    btn: {
        position: 'absolute',
        bottom: pxToDp(16)
    },
});
