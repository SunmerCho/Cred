import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import { pxToDp, pxToDpW } from '../Dimension'
import { router } from 'expo-router';
import { Primary, TextLight } from '../Colors'
import { Medium } from '../FontFamily'


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Primary.navy} />

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
    backgroundColor: Primary.navy
  },
  ask_text: {
    ...Medium,
    color: TextLight.low,
    marginTop: pxToDp(282)
  },
});
