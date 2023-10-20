
import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { pxToDp } from '../tools/Dimension';
import ProgressBar from './Bar'
import { colors, Regular1, Regular2 } from '../GlobalStyle';
import Back from '../../assets/svgs/back.svg'
import { useRouter } from 'expo-router';

export function Header(props) {
    const navigation = useRouter()
    return (
        <View style={styles.container}>
            <View style={[styles.container, { flexDirection: 'row' }]}>
                <Text style={styles.step_text}>{props.step}</Text>

                <Text style={styles.header_text}>/3    Account setup</Text>
            </View>

            <ProgressBar progress={props.progress} width={pxToDp(223)} height={2} backgroundColor={'#474F63'} color={'#768DC6'} borderRadius={2} />

            <Pressable style={styles.back} onPress={() => navigation.back()}>
                <Back width={pxToDp(24)} height={pxToDp(24)} style={[{ display: props.display }]} />
            </Pressable>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: pxToDp(56),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.navy
    },
    header_text: {
        ...Regular1,
        color: colors.light_text,
    },
    step_text: {
        ...Regular2,
        color: colors.light_text
    },
    back: {
        left: pxToDp(20),
        position: 'absolute'
    },
});