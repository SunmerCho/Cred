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
import { ButtonOrange } from '../components/Button';
import { TextFiled } from '../components/TextInput';

export default function App() {
  const [input, setInput] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Primary.navy100} />

      <Header step={'1'} title={'/3    Account setup'} progress={4 / 26} display={'flex'} />

      <Text style={styles.title_text}>Whats your email address?</Text>

      <Text style={styles.desc_text}>We need you to create an account so you can access your funds.</Text>

      <TextFiled style={styles.input} label="Email address" onChange={(text) => setInput(text)} />

      <ButtonOrange style={styles.btn} title='Next' opacity={input == '' ? 0.5 : 1} onPress={() => { input == '' ? null : router.push('/organic/Password') }} />
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
    marginTop: pxToDp(24),
    marginHorizontal: pxToDp(16)
  },
  input: {
    marginTop: pxToDp(24),
  },
  btn: {
    position: 'absolute',
    bottom: pxToDp(16)
  },
});
