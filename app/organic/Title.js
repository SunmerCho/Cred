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

      <Header step={'2'} title={'/3    Personal details'} progress={8 / 26} display={'flex'} />

      <Text style={styles.title_text}>What’s your title?</Text>

      <ButtonOrange style={{ marginVertical: pxToDp(6), marginTop: pxToDp(34) }} title='Mr' onPress={() => router.push({ pathname: "/organic/PersonalDetails", params: { title: "Mr" } })} />

      <ButtonOrange style={{ marginVertical: pxToDp(6) }} title={'Mrs'} onPress={() => router.push('/organic/PersonalDetails')} />

      <ButtonOrange style={{ marginVertical: pxToDp(6) }} title={'Miss'} onPress={() => router.push('/organic/PersonalDetails')} />

      <ButtonOrange style={{ marginVertical: pxToDp(6) }} title={'Ms'} onPress={() => router.push('/organic/PersonalDetails')} />

      <ButtonOrange style={{ marginVertical: pxToDp(6) }} title={'Dr'} onPress={() => router.push('/organic/PersonalDetails')} />

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
