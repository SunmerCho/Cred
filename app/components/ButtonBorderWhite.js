import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { pxToDpW, pxToDpH } from '../tools/pxToDp';

// create a component
export function ButtonBorderWhite({ content, onClick }) {
  return (
    <Pressable onPress={() => {()=> onClick }}>
      <View style={styles.container}>
        <Text style={styles.btnText}>{content}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: pxToDpW(358),
    height: pxToDpH(48),
    borderRadius: 4,
    alignContent: 'center',
    justifyContent: 'center',
    borderColor: '#F5A054',
    borderWidth: 1
  },
  btnText: {
    fontSize: 14,
    lineHeight: 18.9,
    textAlign: 'center',
    fontFamily: 'AzoSansMedium',
    color: '#FFFFFF',
    fontWeight: '700'
  }
});

export default ButtonBorderWhite;