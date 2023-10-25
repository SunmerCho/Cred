import { Pressable, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Primary, Secondary, TextLight } from '../Colors'
import React, { useState } from 'react'
import { Medium } from '../FontFamily'
import { pxToDp } from '../Dimension';
import Eye from '../../assets/svgs/ic_eye.svg'
import Arrow from '../../assets/svgs/ic_arrow_down.svg'

export function TextFiled({ style, label, type, onChange, autoFocus = true }) {
  return (
    <TextInput
      theme={{
        colors: {
          onSurfaceVariant: TextLight.low
        }
      }}
      style={[style, styles.input]}
      textColor={Secondary.white}
      keyboardType={type}
      activeUnderlineColor={Secondary.white}
      underlineColor={Primary.navy10}
      selectionColor={Secondary.white}
      label={label}
      autoFocus={autoFocus}
      onChangeText={onChange}
    />
  );
}

export function DropdownInput({ style, label, onPress, disabled = false }) {
  return (
    <Pressable onPress={onPress}>
      <TextInput
        theme={{
          colors: {
            onSurfaceVariant: TextLight.low
          }
        }}
        showSoftInputOnFocus={false}
        style={[style, styles.input, { opacity: disabled ? 0.5 : 1 }]}
        textColor={Secondary.white}
        activeUnderlineColor={Secondary.white}
        underlineColor={Primary.navy10}
        selectionColor={Secondary.white}
        label={label}
        autoFocus={false}
        editable={false}
        right={
          <TextInput.Icon
            color={Primary.navy40}
            icon={Arrow}
          />
        }
      />
    </Pressable>

  );
}

export function PasswordInput({ style, label, type, onChange, autoFocus = true }) {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  return (
    <TextInput
      theme={{
        colors: {
          onSurfaceVariant: TextLight.low
        }
      }}
      style={[style, styles.input]}
      textColor={Secondary.white}
      keyboardType={type}
      activeUnderlineColor={Secondary.white}
      underlineColor={Primary.navy10}
      selectionColor={Secondary.white}
      label={label}
      autoFocus={autoFocus}
      onChangeText={onChange}

      secureTextEntry={secureTextEntry}
      right={
        <TextInput.Icon
          color={Primary.navy40}
          icon={Eye}
          onPress={() => {
            setSecureTextEntry(!secureTextEntry);
          }}
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: pxToDp(56),
    marginHorizontal: pxToDp(16),
    ...Medium,
    textAlign: 'left',
    backgroundColor: Primary.navy80,
    borderTopRightRadius: pxToDp(8),
    borderTopLeftRadius: pxToDp(8),
  },
});