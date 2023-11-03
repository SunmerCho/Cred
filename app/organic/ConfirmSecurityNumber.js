import {
    StyleSheet,
    Text,
    View,
    StatusBar,
} from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';
import { pxToDp } from '../styles/Dimension'
import { Heading2, Regular3 } from '../styles/FontFamily'
import { Primary, Secondary, TextLight } from '../styles/Colors'
import { Header } from '../components/HeaderBar'
import { TextInput } from 'react-native-paper';

export default function App() {
    const [input, setInput] = useState('');
    const handleInput = (text) => {
        setInput(text);

        if (text.length == 6) {
            router.push('organic/Title')
        }
    }
    
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={Primary.navy100} />

            <Header step={'1'} title={'/3    Account setup'} progress={7 / 26} display={'flex'} />

            <Text style={styles.title_text}>Re-enter security number</Text>

            <Text style={styles.desc_text}>Make sure it matches your last entry.</Text>

            <TextInput style={styles.input} keyboardType='numeric' onChangeText={handleInput} maxLength={6} autoFocus={true}/>

            <View style={styles.circle_group}>
                <View style={[styles.circle, { backgroundColor: input.length > 0 ? Primary.orange : Primary.navy60 }]} />
                <View style={[styles.circle, { backgroundColor: input.length > 1 ? Primary.orange : Primary.navy60 }]} />
                <View style={[styles.circle, { backgroundColor: input.length > 2 ? Primary.orange : Primary.navy60 }]} />
                <View style={[styles.circle, { backgroundColor: input.length > 3 ? Primary.orange : Primary.navy60 }]} />
                <View style={[styles.circle, { backgroundColor: input.length > 4 ? Primary.orange : Primary.navy60 }]} />
                <View style={[styles.circle, { backgroundColor: input.length > 5 ? Primary.orange : Primary.navy60 }]} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Primary.navy100,
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
        marginTop: pxToDp(12),
        marginHorizontal: pxToDp(16)
    },
    input: {
        width: 0,
        height: 0,
        position: 'absolute',
        top: -100
    },
    circle_group: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: pxToDp(20),
    },
    circle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: pxToDp(16),
        height: pxToDp(16),
        backgroundColor: Primary.navy60,
        borderStyle: 'solid',
        borderRadius: pxToDp(16),
        margin: 8
    }
});
