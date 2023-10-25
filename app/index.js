import {
  Text,
  View,
  StyleSheet,
  Pressable,
  StatusBar
} from 'react-native';
import React, { useCallback } from 'react'
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { router } from 'expo-router';
import { Heading4, Medium, MediumStrong } from './FontFamily'
import { Primary, Secondary, TextLight } from './Colors'
import { pxToDp, pxToDpW, windowWidth, windowHeight } from './Dimension'
import BgHome from '../assets/svgs/home-bg.svg'
import Logo from '../assets/svgs/text_cred.svg'
import { Button } from 'react-native-paper';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    'AzoSansMedium': require('../assets/fonts/AzoSans-Medium.otf'),
    'AzoSansRegular': require('../assets/fonts/AzoSans-Regular.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar backgroundColor={Primary.orange} />

      <BgHome width={'100%'} height={'100%'} style={{ position: 'absolute' }} />

      <Logo width={pxToDp(152)} height={pxToDp(50)} style={{ marginTop: pxToDp(158) }} />

      <Text style={styles.tip_text}>A new flexible form of credit, that puts you in control</Text>

      <Button mode='contained' style={styles.btn} buttonColor={Primary.orange} children={'Create an account'} labelStyle={[MediumStrong, { color: Primary.navy }]} onPress={() => router.push('/Decision')} />

      <Button mode='outlined' style={[styles.btn, { borderColor: Secondary.white, borderWidth: 1 }]} children={'Already got a code'} labelStyle={[MediumStrong, { color: Secondary.white }]} onPress={() => router.push('/organic/T$Cs')} />

      <Pressable onPress={() => router.push('/Decision')}>
        <View style={styles.login}>
          <Text style={styles.ask_text}>Already have an account?</Text>
          <Text style={styles.login_text}>Login</Text>
        </View>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  tip_text: {
    ...Heading4,
    fontSize: pxToDp(18),
    color: Primary.navy,
    marginHorizontal: pxToDp(30),
    marginTop: pxToDp(36),
    flex: 1
  },
  btn: {
    width:pxToDpW(340),
    height: pxToDp(48),
    borderRadius: pxToDp(4),
    alignContent: 'center',
    justifyContent: 'center',
    marginBottom: pxToDp(8)
  },
  login: {
    width: pxToDpW(218),
    height: pxToDp(48),
    borderRadius: pxToDp(4),
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: pxToDp(16),
  },
  ask_text: {
    ...Medium,
    color: TextLight.low
  },
  login_text: {
    ...MediumStrong,
    marginLeft: pxToDp(10),
    color: Secondary.white
  },
});
