import {
  Text,
  View,
  StyleSheet,
  Pressable,
  SafeAreaView,
  StatusBar
} from 'react-native';
import React, { useCallback } from 'react'
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useRouter } from 'expo-router';
import { colors, Heading4, Medium, MediumStrong } from './GlobalStyle'
import { pxToDp, pxToDpW, windowWidth, windowHeight } from './tools/Dimension'
import BgHome from '../assets/svgs/home-bg.svg'
import Logo from '../assets/svgs/text_cred.svg'
import { Button } from 'react-native-paper';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const navigation = useRouter()

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
    <SafeAreaView onLayout={onLayoutRootView}>
      <StatusBar backgroundColor={colors.orange} />
      <BgHome width={'100%'} height={'100%'} />
      <View style={{ position: 'absolute' }}>
        <View style={styles.container}>
          <Logo width={pxToDp(152)} height={pxToDp(50)} style={{ top: pxToDp(157) }} />
          <Text style={styles.tip_text}>A new flexible form of credit, that puts you in control</Text>

          <View style={styles.bottom}>
            <Button mode='contained' style={styles.account_btn} buttonColor={colors.orange} children={'Create an account'} labelStyle={[MediumStrong, { color: colors.navy }]} onPress={() => navigation.push('/organic/T$Cs')} />

            <Button mode='outlined' style={[styles.account_btn, { borderColor: colors.white, borderWidth: 1 }]} children={'Already got a code'} labelStyle={[styles.btn_text, { color: colors.white }]} onPress={() => navigation.push('/organic/MobileNumber')} />

            <Pressable onPress={() => navigation.push('/decision')}>
              <View style={[styles.account_btn, { width: pxToDp(218), flexDirection: 'row', alignItems: 'center' }]}>
                <Text style={styles.ask_text}>Already have an account?</Text>
                <Text style={[styles.btn_text, { width: pxToDp(53), color: colors.white }]}>Login</Text>
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
  },
  tip_text: {
    ...Heading4,
    fontSize: pxToDp(18),
    color: colors.navy,
    marginHorizontal: pxToDp(30),
    top: pxToDp(243 - 50)
  },
  bottom: {
    width: pxToDp(341),
    height: pxToDp(160),
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: pxToDp(644),
  },
  btn_text: {
    ...MediumStrong,
  },
  ask_text: {
    ...Medium,
    color: colors.light_text
  },
  account_btn: {
    width: pxToDpW(341),
    height: pxToDp(48),
    borderRadius: pxToDp(4),
    alignContent: 'center',
    justifyContent: 'center',
  },
});
