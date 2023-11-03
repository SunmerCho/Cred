import { Pressable, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Primary, Secondary, TextLight } from '../styles/Colors'
import React, { useState } from 'react'
import { Medium, Medium2, Samll } from '../styles/FontFamily'
import { pxToDp, pxToDpW } from '../styles/Dimension';
import Eye from '../../assets/svgs/ic_eye.svg'
import Arrow from '../../assets/svgs/ic_arrow_down.svg'
import { FilledTextField } from 'rn-material-ui-textfield';


export function Input({ style, label, type, onChange, autoFocus = false }) {
  let [focus, setFocus] = useState(autoFocus);
  const [value, setText] = React.useState('');

  const onChangeText = (text) => {
    setText(text);
    onChange(text)
  }
  return (
    <FilledTextField
      inputContainerStyle={[styles.containerDefault, style, focus && styles.containerActive]}
      label={label}
      keyboardType={type}
      onChangeText={text => onChangeText(text)}
      value={value}
      textColor={Secondary.white}
      fontSize={pxToDp(16)}
      labelTextStyle={styles.label}
      selectionColor={Primary.trans}
      autoFocus={autoFocus}
      lineWidth={pxToDp(2)}
      tintColor='red'
      baseColor='blue'
      onFocus={() => {
        setFocus = true
      }}
      onBlur={() => {
        setFocus = false
      }}
    />
  );
}

export function TextFiled({ style, label, type, onChange, autoFocus = true }) {
  return (
    <TextInput
      theme={{
        colors: {
          // primary: 'blue',
          // onSurfaceVariant:"yellow"
        }
      }}
      style={[styles.input, style]}
      textColor={Secondary.white}
      keyboardType={type}
      activeUnderlineColor={Primary.navy300}
      // underlineColor={Primary.navy600}
      selectionColor={Secondary.white}
      label={label}
      autoFocus={autoFocus}
      onChangeText={onChange}
      onFocus={() => {
      }}
      onBlur={() => {
      }}
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
  containerDefault: {
    height: pxToDp(56),
    width: pxToDpW(358),
    backgroundColor: Primary.navy700,
    borderTopRightRadius: pxToDp(8),
    borderTopLeftRadius: pxToDp(8),
  },
  containerActive: {
    backgroundColor: Primary.red,
  },
  text: {
    ...Medium,
  },
  label: {
    ...Medium,
    // textColor:TextLight.low,
    // textAlign: 'left',
  },



  input: {
    height: pxToDp(56),
    marginHorizontal: pxToDp(16),
    backgroundColor: Primary.navy600,
    borderTopRightRadius: pxToDp(8),
    borderTopLeftRadius: pxToDp(8),
    ...Medium,
    textAlign: 'left',
  },
});