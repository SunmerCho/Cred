
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { pxToDp, pxToDpW } from '../Dimension';
import { ProgressBar } from 'react-native-paper';
import { Regular1, Regular2 } from '../FontFamily';
import { Primary, Secondary, TextLight } from '../Colors'
import Back from '../../assets/svgs/ic_back.svg'
import { router } from 'expo-router';

export function Header(props) {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'baseline', marginTop: pxToDp(20) }}>

                <Text style={{ ...Regular2, color: TextLight.low, }}>{props.step}</Text>

                <Text style={{ ...Regular1, color: TextLight.low, }}>{props.title}</Text>
            </View>

            <ProgressBar progress={props.progress} color={Secondary.blue} style={{ width: pxToDpW(223), height: pxToDp(2), backgroundColor: Primary.navy80, borderRadius: pxToDp(2) }} />

            <Back width={pxToDp(24)} height={pxToDp(24)} style={{ left: pxToDp(20), position: 'absolute', display: props.display }} onPress={() => router.back()} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: pxToDp(56),
        alignItems: 'center',
        justifyContent: 'center'
    },
});