import React from 'react';
import { StyleSheet } from 'react-native';
import { pxToDp, pxToDpW } from '../styles/Dimension';
import { AppMediumStrong } from '../styles/FontFamily'
import { Primary, Secondary, TextLight } from '../styles/Colors'
import { Button } from 'react-native-paper';

export function ButtonBorderOrange(props) {
  return (
    <Button mode='outlined' style={[styles.btn_common, { borderColor: Primary.orange, borderWidth: pxToDp(1) }, props.style]} labelStyle={styles.btn_text} children={props.title} onPress={props.onPress} />
  );
}

export function ButtonBorderWhite(props) {
  return (
    <Button mode='outlined' style={[styles.btn_common, { borderColor: Secondary.white, borderWidth: pxToDp(1) }, props.style]} labelStyle={[styles.btn_text, { color: Secondary.white, }]} children={props.title} onPress={props.onPress} />
  );
}

export function ButtonOrange(props) {
  return (
    <Button opacity={props.opacity} mode='contained' buttonColor={Primary.orange} style={[styles.btn_common, props.style]} labelStyle={[styles.btn_text, { color: Primary.navy800 }]} children={props.title} onPress={props.onPress} />
  );
}

const styles = StyleSheet.create({
  btn_text: {
    ...AppMediumStrong,
    textAlign: 'center',
    color: TextLight.low,
  },
  btn_common: {
    width: pxToDpW(342),
    height: pxToDp(48),
    borderRadius: pxToDp(4),
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  btn_border_white: {
    borderColor: Secondary.white,
    borderWidth: pxToDp(1),
  },
  btn_border_orange: {
    borderColor: Primary.orange,
    borderWidth: pxToDp(1),
  },
  btn_orange: {
    backgroundColor: Primary.orange
  },
});