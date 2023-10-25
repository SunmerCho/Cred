import { Pressable, StyleSheet } from 'react-native';
import { pxToDp } from '../Dimension';
import { Primary } from '../Colors'
import Checked from '../../assets/svgs/checked.svg';

export function Checkbox({ onChange, checked }) {
  return (
    <Pressable
      style={[styles.checkboxBase, checked && styles.checkboxChecked]}
      onPress={onChange}>
      {checked && <Checked />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  checkboxBase: {
    width: pxToDp(20),
    height: pxToDp(20),
    borderRadius: pxToDp(4),
    borderWidth: pxToDp(2),
    borderColor: Primary.navy40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: Primary.orange,
  },
});
