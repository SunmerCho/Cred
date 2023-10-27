import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';
import { pxToDp } from '../Dimension'
import { Heading2, Regular3, Samll } from '../FontFamily'
import { Primary, Secondary, TextLight } from '../Colors'
import { Header } from '../components/HeaderBar'
import { ButtonOrange } from '../components/Button';
import { TextFiled } from '../components/TextInput';

export default function App() {
  const [input, setInput] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Primary.navy}  />

      <Header step={'1'} title={'/3    Account setup'} progress={2 / 26} display={'flex'} />

      <Text style={styles.title_text}>What’s your mobile number?</Text>

      <Text style={styles.desc_text}>We will need your mobile phone number to send you security numbers and important news about your account.</Text>

      <TextFiled style={styles.input} label="Mobile phone number" type='numeric' onChange={(text) => setInput(text)} />

      <ButtonOrange style={styles.btn} title='Next' opacity={input == '' ? 0.5 : 1} onPress={() => { input == '' ? null : router.push('/organic/OtpVerification') }} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Primary.navy,
    paddingTop: pxToDp(16),
    top: 0
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
  input: {
    marginTop: pxToDp(24),
  },
  hint_text: {
    ...Samll,
    color: TextLight.low,
    letterSpacing: pxToDp(-0.24),
    marginTop: pxToDp(24),
    marginHorizontal: pxToDp(16),
  },
  btn: {
    position: 'absolute',
    bottom: pxToDp(65)
  },
});
