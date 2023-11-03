import { Pressable, StyleSheet } from 'react-native';
import { pxToDp } from '../styles/Dimension';
import { Primary } from '../styles/Colors'
import Checked from '../../assets/svgs/ic_checked.svg';

export function CheckboxSquare({ onChange, checked }) {
  return (
    <Pressable
      style={[styles.checkboxSquare, checked && styles.checkboxChecked]}
      onPress={onChange}>
      {checked && <Checked />}
    </Pressable>
  );
}

export function CheckboxRound({ onChange, checked }) {
  return (
    <Pressable
      style={[styles.checkboxRound, checked && styles.checkboxChecked]}
      onPress={onChange}>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  checkboxSquare: {
    width: pxToDp(20),
    height: pxToDp(20),
    borderRadius: pxToDp(4),
    borderWidth: pxToDp(2),
    borderColor: Primary.navy40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxRound: {
    width: pxToDp(20),
    height: pxToDp(20),
    borderRadius: pxToDp(20),
    borderWidth: pxToDp(2),
    borderColor: Primary.navy40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: Primary.orange,
  },
});
