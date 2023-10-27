import {
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';
import { pxToDp } from '../Dimension'
import { Heading2, MediumStrong } from '../FontFamily'
import { Primary, Secondary, TextLight } from '../Colors'
import { Header } from '../components/HeaderBar'
import { ButtonOrange } from '../components/Button';
import { TextFiled } from '../components/TextInput';
import { Button } from 'react-native-paper';

export default function App() {
  const [input, setInput] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Primary.navy} />

      <Header step={'2'} title={'/3    Personal details'} progress={11 / 26} display={'flex'} />

      <Text style={styles.title_text}>Where do you live?</Text>

      <TextFiled style={styles.input} label="Postcode" type='default' onChange={(text) => setInput(text)} />

      <Button labelStyle={styles.manually} children={'Manually enter address'} onPress={() => router.push('/organic/Decision')} />

      <ButtonOrange style={styles.btn} title='Next' opacity={input == '' ? 0.5 : 1} onPress={() => { input == '' ? null : router.push('/organic/ResidentialStatus') }} />
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
  input: {
    marginTop: pxToDp(24),
  },
  btn: {
    position: 'absolute',
    bottom: pxToDp(16)
  },
  manually: {
    ...MediumStrong,
    textAlign: 'center',
    color: TextLight.low,
    marginTop: pxToDp(38),
  }
});
