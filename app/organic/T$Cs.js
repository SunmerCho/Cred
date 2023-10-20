import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
// import Checkbox from 'expo-checkbox';
import { Checkbox } from '../components/CheckBox';
import { pxToDp, pxToDpW } from '../tools/Dimension'
import { colors, Heading2, Heading5, Medium, Samll, SamllStrong } from '../GlobalStyle'
import { ButtonBorderWhite, ButtonOrange } from '../components/Button';
import { Header } from '../components/HeaderBar'
import { Divider } from 'react-native-paper';
import Document from '../../assets/svgs/document.svg'
import Arrow from '../../assets/svgs/keyboard_arrow_down.svg'

export default function App() {
  const navigation = useRouter()
  const [emailChecked, setEmailChecked] = useState(false);
  const [smsChecked, setSmsChecked] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" backgroundColor='#19233C' />

      <ScrollView >
        <View >
          <Header step={'1'} progress={1 / 26} display={'none'} />

          <Text style={styles.title_text}>So what do we need?</Text>
          <Text style={styles.desc_text}>We'll need some information about you and your bank account, so that we can figure out what credit limit is most appropriate for you. We will also need to pass this information on to credit reference agencies, who will provide us with further information about you.</Text>

          <Text style={styles.what_text}>What’s next:</Text>
          <Text style={styles.next_text}>   •  Provide us with your information</Text>
          <Text style={styles.next_text}>   •  Pass our ID checkss</Text>
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
          <ButtonOrange title='I agree' onPress={() => navigation.push('/organic/MobileNumber')} />
          <View style={{ height: pxToDp(8) }} />
          <ButtonBorderWhite title={'Quit'} onPress={() => navigation.back()} />

        </View>
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.navy,
    paddingTop: pxToDp(16),
  },
  title_text: {
    ...Heading2,
    color: colors.white,
    marginTop: pxToDp(24),
  },
  desc_text: {
    ...Medium,
    color: colors.light_text,
    marginTop: pxToDp(24),
    marginHorizontal: pxToDp(16)
  },
  what_text: {
    ...Heading5,
    color: colors.white,
    marginTop: pxToDp(24),
    marginHorizontal: pxToDp(23),
    textAlign: 'left',
  },
  next_text: {
    ...SamllStrong,
    color: colors.light_text,
    marginHorizontal: pxToDp(16),
    marginTop: pxToDp(6),
    textAlign: 'left'
  },
  divider: {
    backgroundColor: '#757B8A',
    height: pxToDp(2),
    marginHorizontal: pxToDp(24)
  },
  terms: {
    flex: 1,
    flexDirection: 'row',
    height: pxToDp(56),
    alignItems: 'center',
    marginHorizontal: pxToDp(24 + 12)
  },
  terms_text: {
    ...Medium,
    color: colors.white
  },
  contact_text: {
    ...Samll,
    color: colors.white,
    letterSpacing: pxToDp(-0.2),
    textAlign: "left"
  },
  card: {
    flex: 1,
    backgroundColor: '#303950',
    width: pxToDpW(359),
    height: pxToDp(116),
    paddingVertical: pxToDp(19),
    paddingHorizontal: pxToDp(16),
    marginHorizontal: pxToDp(16),
    marginTop: pxToDp(24),
    borderRadius: pxToDp(24),
    justifyContent: "space-between",
  },
  checkbox: {
    width: pxToDp(20),
    height: pxToDp(20),
    alignContent:'center',
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
    color: colors.white,
    alignSelf: 'center',
  },
  confirm_text: {
    ...Samll,
    color: colors.light_text,
    letterSpacing: pxToDp(-0.24),
    marginTop: pxToDp(24),
    marginHorizontal: pxToDp(16),
  },
  
});
