import { Pressable, StyleSheet } from 'react-native';
import Checked from '../../assets/svgs/checked.svg';
import { pxToDp } from '../tools/Dimension';
import { colors } from '.././GlobalStyle'

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
    borderColor: '#A3A7B1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: colors.orange,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontWeight: 500,
    fontSize: 18,
  },
});
