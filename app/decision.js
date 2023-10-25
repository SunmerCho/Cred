import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, } from 'react-native';
import { pxToDp } from './Dimension'
import { router } from 'expo-router';
import { Primary } from './Colors'
import { ButtonBorderOrange } from './components/Button';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Primary.navy} />

      <ButtonBorderOrange title='Organic' onPress={() => router.push('/organic/T$Cs')} />

      <ButtonBorderOrange style={{ marginTop: pxToDp(14) }} title={'API'} onPress={() => (router.push('/organic/T$Cs'))} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Primary.navy
  }
});
