
import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { pxToDp, pxToDpW } from '../Dimension';
import { ProgressBar } from 'react-native-paper';
import { Regular1, Regular2 } from '../FontFamily';
import { Primary, TextLight } from '../Colors'
import Back from '../../assets/svgs/back.svg'
import { useRouter } from 'expo-router';

export function Header(props) {
    const navigation = useRouter()
    return (
        <View style={styles.container}>
            <View style={[styles.container, { flexDirection: 'row' }]}>

                <Text style={styles.step_text}>{props.step}</Text>

                <Text style={styles.header_text}>{props.title}</Text>
            </View>

            <ProgressBar progress={props.progress} color={'#768DC6'} style={{ width: pxToDpW(223), height: pxToDp(2), backgroundColor: Primary.navy80, borderRadius: pxToDp(2) }} />

            <Pressable style={styles.back} onPress={() => navigation.back()}>
                <Back width={pxToDp(24)} height={pxToDp(24)} style={[{ display: props.display }]} />
            </Pressable>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        height: pxToDp(56),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Primary.navy
    },
    header_text: {
        ...Regular1,
        color: TextLight.low,
    },
    step_text: {
        ...Regular2,
        color: TextLight.low,
    },
    back: {
        left: pxToDp(20),
        position: 'absolute'
    },
});