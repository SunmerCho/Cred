import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { pxToDp } from '../tools/Dimension';
import { colors } from '.././GlobalStyle'

export function TextFiled({ style, label, onChange, keyboardType }) {
  return (
    <TextInput
      theme={{
        colors: {
          onSurfaceVariant: colors.light_text
        }
      }}
      style={[style, style.input]}
      backgroundColor='#5E6577'
      textColor={colors.white}
      // onFocus={onFocus}
      // underlineStyle={{ height: pxToDp(2), margin: 0 }}
      activeUnderlineColor={colors.white}
      underlineColor='#E8E9EC'
      selectionColor={colors.white}
      // error={true}
      label={label}
      keyboardType={keyboardType}
      onChangeText={onChange}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    borderTopLeftRadius: 10,
  },
});
