import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { pxToDpW, pxToDpH } from '../tools/pxToDp'
import { useRouter } from 'expo-router';

export default function App() {
  const navigation = useRouter()
  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor='#19233C'/>

      <Pressable onPress={() => navigation.push('/organic/T$cs')}>
        <View style={styles.account_btn}>
          <Text style={styles.btn_text}>Login</Text>
        </View>
      </Pressable>

      <View style={{ height: pxToDpH(13) }} />

      <Pressable onPress={() => navigation.push('/api/')}>
        <View style={styles.account_btn}>
          <Text style={styles.btn_text}>Test</Text>
        </View>
      </Pressable>
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
