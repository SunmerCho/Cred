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

      <Header step={'3'} title={'/3    Your finances'} progress={26 / 26} display={'flex'} />

      <Text style={styles.title_text}>Do you expect your income to drop?</Text>

      <ButtonOrange style={{ marginVertical: pxToDp(6), marginTop: pxToDp(24) }} title='Yes' onPress={() => router.push('/organic/SpendGambling')} />

      <ButtonOrange style={{ marginVertical: pxToDp(6) }} title={'No'} onPress={() => router.push('/organic/SpendGambling')} />

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
    marginHorizontal: (16)
  },
});
