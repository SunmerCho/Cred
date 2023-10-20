import React from 'react';
import { StyleSheet } from 'react-native';
import { pxToDp, pxToDpW } from '../tools/Dimension';
import { colors, MediumStrong } from '.././GlobalStyle'
import { Button } from 'react-native-paper';

export function ButtonBorderWhite(props) {
  return (
    <Button mode='outlined' style={[styles.btn_common, props.style, { borderColor: colors.white, borderWidth: pxToDp(1) }]} labelStyle={styles.btn_text} children={props.title} onPress={props.onPress} />
  );
}

export function ButtonBorderOrange(props) {
  return (
    <Button mode='outlined' style={[styles.btn_common, props.style, { borderColor: colors.orange, borderWidth: pxToDp(1) }]} labelStyle={styles.btn_text} children={props.title} onPress={props.onPress} />
  );
}

export function ButtonOrange(props) {
  return (
    <Button opacity={props.opacity} mode='contained' buttonColor={colors.orange} style={[styles.btn_common, props.style]} labelStyle={[styles.btn_text, { color: colors.navy }]} children={props.title} onPress={props.onPress} />
  );
}

const styles = StyleSheet.create({
  btn_text: {
    ...MediumStrong,
    textAlign: 'center',
    color: colors.light_text,
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
    borderColor: colors.white,
    borderWidth: pxToDp(1),
  },
  btn_border_orange: {
    borderColor: colors.orange,
    borderWidth: pxToDp(1),
  },
  btn_orange: {
    backgroundColor: colors.orange
  },
});