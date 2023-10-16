import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Alert } from 'react-native';
import { pxToDpW, pxToDpH } from './tools/pxToDp'
import { useRouter } from 'expo-router';
import { ButtonBorderWhite } from './components/ButtonBorderWhite';

export default function App() {
  const navigation = useRouter()
  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor='#19233C' />
      <ButtonBorderWhite content={'Organic'} onClick={() => alert('test')} />
      <View style={{ height: pxToDpH(13) }} />
      <ButtonBorderWhite content={'API'} onClick={() => console.log('api')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#19233C'
  },
  btn_text: {
    fontSize: 14,
    lineHeight: 18.9,
    textAlign: 'center',
    fontFamily: 'AzoSansMedium',
    color: '#FFFFFF',
    fontWeight: '700'
  },
  account_btn: {
    width: pxToDpW(357),
    height: pxToDpH(48),
    borderRadius: 4,
    alignContent: 'center',
    justifyContent: 'center',
    borderColor: '#F5A054',
    borderWidth: 1
  },
});
