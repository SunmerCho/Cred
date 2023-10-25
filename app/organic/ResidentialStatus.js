import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { pxToDp } from '../Dimension'
import { router } from 'expo-router';
import { Primary, Secondary } from '../Colors'
import { Heading2 } from '../FontFamily'
import { ButtonOrange } from '../components/Button';
import { Header } from '../components/HeaderBar'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Primary.navy} />

      <Header step={'2'} title={'/3    Personal details'} progress={12 / 26} display={'flex'} />

      <Text style={styles.title_text}>What is your residential status?</Text>

      <ButtonOrange style={{ marginVertical: pxToDp(6), marginTop: pxToDp(36) }} title='Homeowner, no mortgage' onPress={() => router.push('/organic/EmploymentStatus')} />

      <ButtonOrange style={{ marginVertical: pxToDp(6) }} title={'Homeowner, with a mortgage'} onPress={() => router.push('/organic/EmploymentStatus')} />

      <ButtonOrange style={{ marginVertical: pxToDp(6) }} title={'Joint home owner, mortgage'} onPress={() => router.push('/organic/EmploymentStatus')} />

      <ButtonOrange style={{ marginVertical: pxToDp(6) }} title={'Joint home owner, no mortgage'} onPress={() => router.push('/organic/EmploymentStatus')} />

      <ButtonOrange style={{ marginVertical: pxToDp(6) }} title={'Living with family'} onPress={() => router.push('/organic/EmploymentStatus')} />

      <ButtonOrange style={{ marginVertical: pxToDp(6) }} title={'Renting'} onPress={() => router.push('/organic/EmploymentStatus')} />

      <ButtonOrange style={{ marginVertical: pxToDp(6) }} title={'Armed forces accommodation'} onPress={() => router.push('/organic/EmploymentStatus')} />

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
});
