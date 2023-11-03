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
import {  Medium, Medium2, Heading2} from '../styles/FontFamily'
import { Primary, Secondary, TextLight } from '../styles/Colors'
import Pic from '../../assets/svgs/pic_pre-contractual.svg'
import { ButtonOrange } from '../components/Button';

export default function App() {
    return (
        <View style={{ flex: 1, backgroundColor: Primary.navy100, }}>
            <StatusBar backgroundColor={Primary.navy100} />

            <ScrollView style={{ flex: 1, marginBottom: pxToDp(90) }}>
                <View style={{ flex: 1 }}>

                    <Pic width={pxToDp(76)} height={pxToDp(76)} style={{ marginTop: pxToDp(56), alignSelf: 'center' }} />

                    <Text style={{ ...Heading2, color: Secondary.white, marginTop: pxToDp(20), }}>Pre-contractual information</Text>

                    <Text style={{ ...Medium2, color: TextLight.low, marginTop: pxToDp(14), marginHorizontal: pxToDp(24) }}>Quisque tristique pellentesque eu feugiat volutpat eu, sodales accumsan mauris enim eu quis eget fermentum.</Text>

                    <View style={{ width: pxToDpW(70), height: pxToDp(1), backgroundColor: Primary.navy40, marginTop: pxToDp(32), marginLeft: pxToDpW(190) }} />

                    <Text style={{ ...Medium, color: TextLight.low, marginTop: pxToDp(32), marginHorizontal: pxToDp(24), textAlign: 'left' }}>
                        Sed lacus tortor hac condimentum at massa in et adipiscing elit tellus pellentesque vulputate diam pulvinar nibh in sed risus tortor rhoncus sit dignissim faucibus sed aliquam id orci quisque ac fermentum nisl aliquam aliquam amet mi faucibus aliquet est id justo, eget felis quisque.

                        Fames egestas cras commodo quisque luctus tellus donec quisque faucibus viverra id pulvinar adipiscing in est convallis vivamus scelerisque quis nulla nunc orci, vitae ut neque porta diam lectus sem tellus

                        Quisque tristique pellentesque eu feugiat volutpat eu, sodales accumsan mauris enim eu quis eget fermentum in donec tellus cras feugiat rhoncus vel porttitor commodo. quisque faucibus viverra id pulvinar adipiscing in est convallis vivamus scelerisque quis nulla nunc orci, vitae

                        Sed lacus tortor hac condimentum at massa in et adipiscing elit tellus pellentesque vulputate diam pulvinar nibh in sed risus tortor rhoncus sit dignissim faucibus sed aliquam id orci quisque ac fermentum nisl aliquam aliquam amet mi faucibus aliquet est id justo, eget felis quisque.

                        Fames egestas cras commodo quisque luctus tellus donec quisque faucibus viverra id pulvinar adipiscing in est convallis vivamus scelerisque quis nulla nunc orci, vitae ut neque porta diam lectus sem tellus

                        Quisque tristique pellentesque eu feugiat volutpat eu, sodales accumsan mauris enim eu quis eget fermentum in donec tellus cras feugiat rhoncus vel porttitor commodo. quisque faucibus viverra id pulvinar adipiscing in est convallis vivamus scelerisque quis nulla nunc orci, vitae

                        Sed lacus tortor hac condimentum at massa in et adipiscing elit tellus pellentesque vulputate diam pulvinar nibh in sed risus tortor rhoncus sit dignissim faucibus sed aliquam id orci quisque ac fermentum nisl aliquam aliquam amet mi faucibus aliquet est id justo, eget felis quisque.

                        Fames egestas cras commodo quisque luctus tellus donec quisque faucibus viverra id pulvinar adipiscing in est convallis vivamus scelerisque quis nulla nunc orci, vitae ut neque porta diam lectus sem tellus

                        Quisque tristique pellentesque eu feugiat volutpat eu, sodales accumsan mauris enim eu quis eget fermentum in donec tellus cras feugiat rhoncus vel porttitor commodo. quisque faucibus viverra id pulvinar adipiscing in est convallis vivamus scelerisque quis nulla nunc orci, vitae

                        Sed lacus tortor hac condimentum at massa in et adipiscing elit tellus pellentesque vulputate diam pulvinar nibh in sed risus tortor rhoncus sit dignissim faucibus sed aliquam id orci quisque ac fermentum nisl aliquam aliquam amet mi faucibus aliquet est id justo, eget felis quisque.

                        Fames egestas cras commodo quisque luctus tellus donec quisque faucibus viverra id pulvinar adipiscing in est convallis vivamus scelerisque quis nulla nunc orci, vitae ut neque porta diam lectus sem tellus

                        Quisque tristique pellentesque eu feugiat volutpat eu, sodales accumsan mauris enim eu quis eget fermentum in donec tellus cras feugiat rhoncus vel porttitor commodo. quisque faucibus viverra id pulvinar adipiscing in est convallis vivamus scelerisque quis nulla nunc orci, vitae

                    </Text>
                </View >
            </ScrollView>

            <View style={styles.bottom}>
                <ButtonOrange title='I have read and I agree' onPress={() => { router.push('/organic/LoanAgreement') }} />
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    bottom: {
        width: '100%',
        height: pxToDp(84),
        backgroundColor: Primary.navy90,
        bottom: 0,
        position: 'absolute',
        justifyContent: 'center'
    }
});
