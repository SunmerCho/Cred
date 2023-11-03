import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text} from 'react-native';
import { pxToDp } from '../styles/Dimension'
import { router } from 'expo-router';
import { Primary, TextLight } from '../styles/Colors'
import { Medium } from '../styles/FontFamily'
import { ButtonBorderOrange } from '../components/Button';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Primary.navy100} />

      <Text style={styles.ask_text}>Is the postcode ‘out of area’? </Text>

      <ButtonBorderOrange style={{ marginTop: pxToDp(40) }} title='No' onPress={() => router.back()} />

      <ButtonBorderOrange style={{ marginTop: pxToDp(14) }} title={'Yes'} onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Primary.navy100
  },
  ask_text: {
    ...Medium,
    color: TextLight.low,
    marginTop:pxToDp(282)
  },
});
