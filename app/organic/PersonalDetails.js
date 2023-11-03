import {
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';
import React, { useState } from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import { pxToDp } from '../styles/Dimension'
import { Heading2 } from '../styles/FontFamily'
import { Primary, Secondary } from '../styles/Colors'
import { Header } from '../components/HeaderBar'
import { ButtonOrange } from '../components/Button';
import { TextFiled } from '../components/TextInput';

export default function App() {
  const { title } = useLocalSearchParams();
  console.log(title)

  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Primary.navy100} />

      <Header step={'2'} title={'/3    Personal details'} progress={9 / 26} display={'flex'} />

      <Text style={styles.title_text}>Your personal details</Text>

      <TextFiled style={styles.first_input} label="First name" type='default' onChange={(text) => setFirst(text)} />

      <TextFiled style={styles.last_input} label="Last name" type='default' autoFocus={false} onChange={(text) => setLast(text)} />

      <ButtonOrange style={styles.btn} title='Next' opacity={first == '' || last == '' ? 0.5 : 1} onPress={() => { first == '' || last == '' ? null : router.push('/organic/DateOfBirth') }} />
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
  first_input: {
    marginTop: pxToDp(34),
  },
  last_input: {
    marginTop: pxToDp(16),
  },
  btn: {
    position: 'absolute',
    bottom: pxToDp(16)
  },
});
