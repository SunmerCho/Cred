import {
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';
import { pxToDp } from '../Dimension'
import { Heading2, Regular3, Samll } from '../FontFamily'
import { Primary, Secondary, TextLight } from '../Colors'
import { Header } from '../components/HeaderBar'
import { ButtonOrange } from '../components/Button';
import { PasswordInput } from '../components/TextInput';

export default function App() {
  const [input, setInput] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Primary.navy} />

      <Header step={'1'} title={'/3    Account setup'} progress={5 / 26} display={'flex'} />

      <Text style={styles.title_text}>Create a password for your account</Text>

      <Text style={styles.desc_text}>Your password is used to protect and secure your account with us.</Text>

      <PasswordInput style={styles.input} label="Password" onChange={(text) => setInput(text)} />

      <ButtonOrange style={styles.btn} title='Next' opacity={input == '' ? 0.5 : 1} onPress={() => { input == '' ? null : router.push('/organic/SecurityNumber') }} />

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
    bottom: pxToDp(16)
  },
});
