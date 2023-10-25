import {
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';
import { Checkbox } from '../components/CheckBox';
import { pxToDp, pxToDpW } from '../Dimension'
import { Primary, Secondary, TextLight } from '../Colors'
import { Heading2, Heading5, Medium, Samll, SamllStrong } from '../FontFamily'
import { ButtonBorderWhite, ButtonOrange } from '../components/Button';
import { Header } from '../components/HeaderBar'
import { Divider } from 'react-native-paper';
import Document from '../../assets/svgs/document.svg'
import Arrow from '../../assets/svgs/ic_arrow_down.svg'

export default function App() {
  const [emailChecked, setEmailChecked] = useState(false);
  const [smsChecked, setSmsChecked] = useState(false);
  return (
    <View style={styles.container}>
      <Header step={'1'} title={'/3    Account setup'} progress={1 / 26} display={'none'} />

      <Text style={styles.title_text}>So what do we need?</Text>
      <Text style={styles.desc_text}>We'll need some information about you and your bank account, so that we can figure out what credit limit is most appropriate for you. We will also need to pass this information on to credit reference agencies, who will provide us with further information about you.</Text>

      <Text style={styles.what_text}>What’s next:</Text>
      <Text style={styles.next_text}> • Provide us with your information</Text>
      <Text style={styles.next_text}> • Pass our ID checkss</Text>

      <Divider style={[styles.divider, { marginTop: pxToDp(24) }]} />

      <View style={styles.terms}>
        <Document />

        <Text style={styles.terms_text}>Terms & Conditions</Text>

        <View style={{ flex: 1 }} />

        <Arrow />
      </View>

      <Divider style={styles.divider} />

      <View style={styles.terms}>
        <Document />

        <Text style={styles.terms_text}>Data Protection Policy</Text>

        <View style={{ flex: 1 }} />

        <Arrow />
      </View>

      <Divider style={styles.divider} />

      <View style={styles.card}>

        <Text style={styles.contact_text}>I’m happy for Cred to contact you via the following methods: </Text>

        <View style={styles.methods}>
          <Text style={styles.methods_text}>Email </Text>
          <Checkbox checked={emailChecked} onChange={() => setEmailChecked(!emailChecked)} />
        </View>

        <View style={styles.methods}>
          <Text style={styles.methods_text}>SMS </Text>
          <Checkbox checked={smsChecked} onChange={() => setSmsChecked(!smsChecked)} />
        </View>

      </View>

      <Text style={styles.confirm_text}>I confirm that I have read and agree to the terms and conditions. I understand that as part of my application my data may be shared with credit reference agencies.</Text>

      <View style={{ height: pxToDp(24) }} />
      <ButtonOrange title='I agree' onPress={() => router.push('/organic/MobileNumber')} />
      <View style={{ height: pxToDp(8) }} />
      <ButtonBorderWhite title={'Quit'} onPress={() => router.back()} />

      <StatusBar backgroundColor='#19233C' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Primary.navy,
    paddingTop: pxToDp(16)
  },
  container2: {
    flex: 1,
    backgroundColor: Primary.navy
  },
  title_text: {
    ...Heading2,
    color: Secondary.white,
    marginTop: pxToDp(24),
  },
  desc_text: {
    ...Medium,
    color: TextLight.low,
    marginTop: pxToDp(24),
    marginHorizontal: pxToDpW(16),
    textAlign: 'left',

  },
  what_text: {
    ...Heading5,
    color: Secondary.white,
    marginTop: pxToDp(24),
    marginHorizontal: pxToDpW(24),
    textAlign: 'left',
  },
  next_text: {
    ...SamllStrong,
    color: TextLight.low,
    marginTop: pxToDp(6),
    marginHorizontal: pxToDpW(24),
    textAlign: 'left'
  },
  divider: {
    backgroundColor: '#757B8A',
    height: pxToDp(2),
    marginHorizontal: pxToDpW(24)
  },
  terms: {
    flexDirection: 'row',
    height: pxToDp(56),
    alignItems: 'center',
    marginHorizontal: pxToDp(24 + 12)
  },
  terms_text: {
    ...Medium,
    color: Secondary.white,
    marginLeft: pxToDpW(8),
  },
  contact_text: {
    ...Samll,
    color: Secondary.white,
    letterSpacing: pxToDp(-0.2),
    textAlign: "left"
  },
  card: {
    backgroundColor: '#303950',
    width: pxToDpW(360),
    height: pxToDp(116),
    paddingVertical: pxToDp(18),
    paddingHorizontal: pxToDp(16),
    marginHorizontal: pxToDp(16),
    marginTop: pxToDp(24),
    borderRadius: pxToDp(24),
    justifyContent: "space-between",
  },
  checkbox: {
    width: pxToDp(20),
    height: pxToDp(20),
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: pxToDp(4),
    borderWidth: pxToDp(2),
    borderColor: '#A3A7B1',
    alignSelf: 'center'
  },
  methods: {
    flexDirection: 'row',
    height: pxToDp(20),
    justifyContent: 'space-between',
  },
  methods_text: {
    ...Heading5,
    color: Secondary.white,
    alignSelf: 'center',
  },
  confirm_text: {
    ...Samll,
    color: TextLight.low,
    letterSpacing: pxToDp(-0.24),
    marginTop: pxToDp(24),
    marginHorizontal: pxToDp(16),
  },

});
