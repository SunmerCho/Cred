import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { pxToDp, pxToDpW } from '../Dimension'
import { router } from 'expo-router';
import { Primary, TextLight } from '../Colors'
import { Heading2, Large } from '../FontFamily'
import { Divider } from 'react-native-paper';
import { ButtonBorderOrange } from '../components/Button';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Primary.navy} />

      <Text style={styles.title_text}>Your details</Text>

      <Text style={styles.tip_text}>Please review your details below.</Text>

      <Item />
      <Item />
      <Item />
    </View>
  );
}

const Item = (prop) => {
  return (
    <View style={styles.item}>
      <Divider style={styles.divider} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Primary.navy
  },
  title_text: {
    ...Heading2,
    color: TextLight.high,
    marginTop: pxToDp(96),

  },
  tip_text: {
    ...Large,
    color: TextLight.low,
    marginTop: pxToDp(18),
    marginHorizontal: (16)
  },
  divider: {
    width: pxToDpW(358),
    backgroundColor: '#757B8A',
    height: pxToDp(2),
    marginHorizontal: pxToDpW(24)
  },
  item: {
    width: pxToDpW(358),
    height: pxToDp(56),
    alignItems: 'center',
  },
});
