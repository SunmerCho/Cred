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
          <Header step={'1'} progress={2 / 26} display={'flex'} />

          <Text style={styles.title_text}>What’s your mobile number?</Text>

          <Text style={styles.desc_text}>We will need your mobile phone number to send you security numbers and important news about your account.</Text>

          <TextFiled style={styles.input} label="Mobile phone number" text={text} keyboardType='numeric' onChange={onChangeText} />

          <ButtonOrange style={{ marginTop: pxToDp(240) }} title='Next' opacity={0.5} onPress={() => navigation.push('/organic/OtpVerification')} />
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
