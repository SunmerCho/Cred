import {
  Text,
  View,
  StyleSheet,
  Pressable,
} from 'react-native';
import * as React from 'react'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font';
import { useRouter } from 'expo-router';
import { pxToDpW, pxToDpH } from './tools/pxToDp'
import BgHome from '../assets/svgs/img-home-bg.svg'
import Logo from '../assets/svgs/text_cred.svg'

export default function App() {
  const navigation = useRouter()

  const [fontsLoaded] = useFonts({
    'AzoSansBlack': require('../assets/fonts/AzoSans-Black.otf'),
    'AzoSansBold': require('../assets/fonts/AzoSans-Bold.otf'),
    'AzoSansLight': require('../assets/fonts/AzoSans-Light.otf'),
    'AzoSansThin': require('../assets/fonts/AzoSans-Thin.otf'),
    'AzoSansMedium': require('../assets/fonts/AzoSans-Medium.otf'),
    'AzoSansRegular': require('../assets/fonts/AzoSans-Regular.otf'),
  });

  if(!fontsLoaded){
    return null;
  }

  return (
    <View >
   <StatusBar style="auto" backgroundColor='#F5A054'/>
      <BgHome />
      <View style={{ position: 'absolute' }}>
        <View style={styles.container}>
          <View style={{ alignItems: 'center' }}>
            <Logo style={{ top: pxToDpH(145 + 12) }} />
            <Text style={styles.tip}>A new flexible form of credit, that puts you in control</Text>
            {/* <Text style={styles.tip}>A new flexible form of credit, that puts</Text>
            <Text style={styles.tip}>you in control</Text> */}
          </View>

          <View style={styles.bottom}>
            <Pressable onPress={() => navigation.push('/decision')}>
              <View style={[styles.account_btn, { backgroundColor: '#F5A054' }]}>
                <Text style={[styles.btn_text, { color: '#19233C' }]}>Create an account</Text>
              </View>
            </Pressable>

            <Pressable onPress={() => navigation.push('/decision')}>
              <View style={[styles.account_btn, { borderColor: '#FFFFFF', borderWidth: 1 }]}>
                <Text style={[styles.btn_text, { color: '#FFFFFF' }]}>Already got a code</Text>
              </View>
            </Pressable>

            <Pressable onPress={() => navigation.push('/decision')}>
              <View style={[styles.account_btn, { width: pxToDpW(218), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}>
                <Text style={[styles.btn_text, { color: '#CBCDD3', fontWeight: '400' }]}>Already have an account?</Text>
                <Text style={[styles.btn_text, { color: '#FFFFFF' }]}>Login</Text>
              </View>
            </Pressable>

          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: pxToDpW(390),
    height: pxToDpH(844),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tip: {
    fontSize: 18,
    lineHeight: 21.6,
    textAlign: 'center',
    color: '#19233C',
    fontFamily: 'AzoSansBold',
    marginHorizontal: pxToDpW(30),
    top: pxToDpH(145 + 50)
  },
  bottom: {
    width: pxToDpW(341),
    height: pxToDpH(160),
    justifyContent: 'space-between',
    alignItems: 'center',
    bottom: pxToDpH(16),
  },
  btn_text: {
    fontSize: 14,
    lineHeight: 18.9,
    textAlign: 'center',
    fontFamily: 'AzoSansMedium',
    fontWeight: 700
  },
  account_btn: {
    width: pxToDpW(341),
    height: pxToDpH(48),
    borderRadius: 4,
    alignContent: 'center',
    justifyContent: 'center',
  },
});
