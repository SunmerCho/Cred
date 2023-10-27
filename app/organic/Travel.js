import {
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';
import { pxToDp } from '../Dimension'
import { Heading2 } from '../FontFamily'
import { Primary, Secondary } from '../Colors'
import { Header } from '../components/HeaderBar'
import { ButtonOrange } from '../components/Button';
import { TextFiled } from '../components/TextInput';

export default function App() {
  const [input, setInput] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Primary.navy} />

      <Header step={'3'} title={'/3    Your finances'} progress={20 / 26} display={'flex'} />

      <Text style={styles.title_text}>How much do you pay each month on travel, including the running of a personal car?</Text>

      <TextFiled style={styles.input} label="Amount (£)" type='numeric' onChange={(text) => setInput(text)} />

      <ButtonOrange style={styles.btn} title='Next' opacity={input == '' ? 0.5 : 1} onPress={() => { input == '' ? null : router.push('/organic/Insurance') }} />
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
    marginHorizontal:(16)
  },
  input: {
    marginTop: pxToDp(24),
  },
  btn: {
    position: 'absolute',
    bottom: pxToDp(16)
  },
});
