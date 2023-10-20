import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { pxToDp } from '../tools/Dimension'
import { colors, Heading2, Regular3, Samll } from '../GlobalStyle'
import { Header } from '../components/HeaderBar'
import { ButtonOrange } from '../components/Button';
import { TextFiled } from '../components/TextInput';

export default function App() {
  const navigation = useRouter()
  const [text, onChangeText] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" backgroundColor='#19233C' />

      <ScrollView >
        <View >
          <Header step={'1'} progress={5 / 26} display={'flex'} />

          <Text style={styles.title_text}>Create a password for your account</Text>

          <Text style={styles.desc_text}>Your password is used to protect and secure your account with us.</Text>

          <TextFiled style={styles.input} label="Password" text={text} keyboardType='email-address' onChange={onChangeText} />

          <ButtonOrange style={{ marginTop: pxToDp(240) }} title='Next' opacity={0.5} onPress={() => navigation.push('/organic/SecurityNumber')} />

        </View>
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.navy,
    paddingTop: pxToDp(16),
  },
  title_text: {
    ...Heading2,
    color: colors.white,
    marginTop: pxToDp(24),
  },
  desc_text: {
    ...Regular3,
    color: colors.light_text,
    marginTop: pxToDp(24),
    marginHorizontal: pxToDp(16)
  },
  input: {
    height: pxToDp(56),
    top: pxToDp(24),
    marginHorizontal: pxToDp(16),
  },
  hint_text: {
    ...Samll,
    color: colors.light_text,
    letterSpacing: pxToDp(-0.24),
    marginTop: pxToDp(24),
    marginHorizontal: pxToDp(16),
  },
});
