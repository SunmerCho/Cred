import React from 'react';
import { StyleSheet } from 'react-native';
import { pxToDp, pxToDpW } from '../Dimension';
import { MediumStrong } from '../FontFamily'
import { Primary, Secondary, TextLight } from '../Colors'
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
    <Button opacity={props.opacity} mode='contained' buttonColor={Primary.orange} style={[styles.btn_common, props.style]} labelStyle={[styles.btn_text, { color: Primary.navy }]} children={props.title} onPress={props.onPress} />
  );
}

const styles = StyleSheet.create({
  btn_text: {
    ...MediumStrong,
    textAlign: 'center',
    color: TextLight.low,
  },
  btn_common: {
    width: pxToDpW(358),
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