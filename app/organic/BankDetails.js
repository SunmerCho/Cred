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
import { DropdownInput } from '../components/TextInput';

export default function App() {
  let i = 0
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Primary.navy} />

      <Header step={'2'} title={'/3    Personal details'} progress={14 / 26} display={'flex'} />

      <Text style={styles.title_text}>Bank details</Text>

      <DropdownInput style={{ marginTop: pxToDp(32) }} label="Who do you bank with?" disabled={false} onPress={() => router.push('/organic/Income')} />

      <DropdownInput style={{ marginTop: pxToDp(24) }} label="Sort code" disabled={true} onPress={() => null} />

      <DropdownInput style={{ marginTop: pxToDp(16) }} label="Account number" disabled={true} onPress={() => null} />

      <ButtonOrange style={styles.btn} title='Next' opacity={i > 0 ? 0.5 : 1} onPress={() => { input == '' ? null : router.push('/organic/Address') }} />
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
    marginTop: pxToDp(32),
  },
  btn: {
    position: 'absolute',
    bottom: pxToDp(15)
  },
});
