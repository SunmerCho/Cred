import { Text, View, StyleSheet, StatusBar } from 'react-native';
import React, { useCallback } from 'react'
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { router } from 'expo-router';
import { DisplayXsRegular, TextMdRegular, AppMediumStrong } from './styles/FontFamily'
import { Primary, Secondary, TextLight } from './styles/Colors'
import { pxToDp, pxToDpW } from './styles/Dimension'
import Cred from '../assets/svgs/logo_lander.svg'
import Home from '../assets/svgs/bg_home.svg'
import HalfCircle from '../assets/svgs/bg_half_circle.svg'
import { ButtonOrange } from './components/Button'
import { Button, Divider } from 'react-native-paper';

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
      <StatusBar backgroundColor={Primary.navy100} />

      <Cred width={pxToDp(120)} height={pxToDp(40)} style={{ marginTop: pxToDp(80) }} />

      <HalfCircle width={pxToDp(340)} height={pxToDp(168)} style={{ marginTop: pxToDp(180) }} />

      <Home width={pxToDp(192)} height={pxToDp(287)} style={{ position: 'absolute', marginTop: pxToDp(180) }} />

      <Text style={styles.titile_text}>Next generation credit</Text>

      <Text style={styles.tip_text}>A flexible line of credit to be used in a way that suits you</Text>

      <View style={{ position: 'absolute', flex: 1, bottom: pxToDp(20) }}>
        <ButtonOrange title='Already got a code?' onPress={() => null} />

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: pxToDp(8) }}>
          <Button style={styles.btn} labelStyle={styles.btn_text} children='Create account' onPress={() => null} />

          <Divider style={{ width: pxToDpW(1), height: pxToDp(24), backgroundColor: Primary.navy40 }} />

          <Button style={styles.btn} labelStyle={styles.btn_text} children='Login' onPress={() => router.push('/login/Email')} />
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Primary.navy100
  },
  titile_text: {
    ...DisplayXsRegular,
    color: Secondary.white,
    marginTop: pxToDp(62)
  },
  tip_text: {
    ...TextMdRegular,
    color: TextLight.low,
    marginHorizontal: pxToDpW(36),
    marginTop: pxToDp(8)
  },
  btn: {
    width: pxToDpW(164),
    height: pxToDp(48),
    justifyContent: 'center',
    borderRadius: 0,
  },
  btn_text: {
    ...AppMediumStrong,
    color: Primary.navy40
  },
});
