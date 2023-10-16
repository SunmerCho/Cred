import {
  Text,
  View,
  StyleSheet,
  Pressable,
  SafeAreaView
} from 'react-native';
import * as React from 'react'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font';
import { useRouter } from 'expo-router';
import { pxToDpW, pxToDpH, windowWidth, windowHeight } from './tools/pxToDp'
import BgHome from '../assets/svgs/home-bg.svg'
import Logo from '../assets/svgs/text_cred.svg'


export default function App() {
  const navigation = useRouter()

  const [fontsLoaded] = useFonts({
    'AzoSansMedium': require('../assets/fonts/AzoSans-Medium.otf'),
    'AzoSansRegular': require('../assets/fonts/AzoSans-Regular.otf'),
  });

  // if (fontsLoaded) {
  //   return null;
  // }

  return (
    <SafeAreaView >
      <StatusBar style="auto" backgroundColor='#F5A054' />
      <BgHome width={windowWidth} height={windowHeight} />
      <View style={{ position: 'absolute' }}>
        <View style={styles.container}>
          <View style={{ alignItems: 'center' }}>
            <Logo style={{ top: pxToDpH(145 + 12) }} />
            <Text style={styles.tip}>A new flexible form of credit, that puts you in control</Text>
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

            <Pressable onPress={() => console.log('test....')}>
              <View style={[styles.account_btn, { width: pxToDpW(218), flexDirection: 'row', alignItems: 'center' }]}>
                <Text style={[styles.btn_text, { color: '#CBCDD3', fontWeight: '400' }]}>Already have an account?</Text>
                {/* <View style={{ width: pxToDpH(13) }} /> */}
                <Text style={[styles.btn_text, { width: pxToDpW(53), color: '#FFFFFF' }]}>Login</Text>
              </View>
            </Pressable>

          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  tip: {
    fontSize: 18,
    lineHeight: 21.6,
    fontWeight: '700',
    textAlign: 'center',
    color: '#19233C',
    fontFamily: 'AzoSansRegular',
    marginHorizontal: pxToDpW(30),
    top: pxToDpH(145 + 50)
  },
  bottom: {
    width: pxToDpW(341),
    height: pxToDpH(160),
    justifyContent: 'space-between',
    alignItems: 'center',
    bottom: pxToDpH(16)
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
