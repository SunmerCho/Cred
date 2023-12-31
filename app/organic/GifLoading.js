import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import { pxToDp, pxToDpW } from '../styles/Dimension'
import { router } from 'expo-router';
import { Primary, TextLight } from '../styles/Colors'
import { Medium } from '../styles/FontFamily'


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Primary.navy100} />

      <Image
        style={{ width: pxToDpW(295), height: pxToDp(360) }}
        source={require('../../assets/loading.gif')} />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Primary.navy100
  },
  ask_text: {
    ...Medium,
    color: TextLight.low,
    marginTop: pxToDp(282)
  },
});
