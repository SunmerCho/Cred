import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { pxToDp } from '../styles/Dimension'
import { router } from 'expo-router';
import { Primary, Secondary } from '../styles/Colors'
import { Heading2 } from '../styles/FontFamily'
import { ButtonOrange } from '../components/Button';
import { Header } from '../components/HeaderBar'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Primary.navy100} />

      <Header step={'2'} title={'/3    Personal details'} progress={13 / 26} display={'flex'} />

      <Text style={styles.title_text}>What is your residential status?</Text>

      <ButtonOrange style={{ marginVertical: pxToDp(6), marginTop: pxToDp(36) }} title='Full time employed' onPress={() => router.push('/organic/BankDetails')} />

      <ButtonOrange style={{ marginVertical: pxToDp(6) }} title={'Part time employed'} onPress={() => router.push('/organic/BankDetails')} />

      <ButtonOrange style={{ marginVertical: pxToDp(6) }} title={'Self employed'} onPress={() => router.push('/organic/BankDetails')} />

      <ButtonOrange style={{ marginVertical: pxToDp(6) }} title={'Temporarily employed'} onPress={() => router.push('/organic/BankDetails')} />

      <ButtonOrange style={{ marginVertical: pxToDp(6) }} title={'Student'} onPress={() => router.push('/organic/BankDetails')} />

      <ButtonOrange style={{ marginVertical: pxToDp(6) }} title={'Pension'} onPress={() => router.push('/organic/BankDetails')} />

      <ButtonOrange style={{ marginVertical: pxToDp(6) }} title={'Disability benefits'} onPress={() => router.push('/organic/BankDetails')} />
      
      <ButtonOrange style={{ marginVertical: pxToDp(6) }} title={'Unemployed'} onPress={() => router.push('/organic/BankDetails')} />

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
});
