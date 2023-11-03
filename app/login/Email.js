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
import { BackHeader } from '../components/HeaderBar'
import { ButtonOrange } from '../components/Button';
import Logo from '../../assets/svgs/ic_email.svg'


export default function App() {
  const [input, setInput] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Primary.navy100} />

      <BackHeader />

      <Logo width={pxToDp(40)} height={pxToDp(40)} />

      <Text style={styles.title_text}>Whats your email address?</Text>

      {/* <TextFiled style={styles.input} label="Email address" onChange={(text) => setInput(text)} /> */}

      <ButtonOrange style={styles.btn} title='Next' opacity={input == '' ? 0.5 : 1} onPress={() => { input == '' ? null : router.push('/login/Password') }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
    height: pxToDp(60),
    marginTop: pxToDp(24),
  },
  btn: {
    position: 'absolute',
    bottom: pxToDp(16)
  },
});
