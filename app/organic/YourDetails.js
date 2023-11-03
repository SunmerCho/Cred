import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { pxToDp, pxToDpW } from '../styles/Dimension'
import { router } from 'expo-router';
import { Primary, TextLight } from '../styles/Colors'
import { Heading2, Large, ParagraphMedium, ParagraphSamll } from '../styles/FontFamily'
import { Divider } from 'react-native-paper';
import { ButtonOrange } from '../components/Button';
import Pen from '../../assets/svgs/ic_pen.svg'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Primary.navy100} />

      <Text style={styles.title_text}>Your details</Text>

      <Text style={styles.tip_text}>Please review your details below.</Text>

      <Item style={{ marginTop: pxToDp(30) }} label='Title' value='Mr' display='none' />
      <Item label={'Name'} value={'Mr'} display='none' />
      <Item label={'Date of Birth'} value={'Mr'} display='none' />
      <Item label={'Mobile number'} value={'Mr'} onPress={() => console.log('Mobile')} />
      <Item label={'Email address'} value={'Mr'} />
      <Item label={'Number of dependents'} value={'Mr'} />
      <Item label={'Address'} value={'Mr'} />
      <Item label={'Resident status'} value={'Mr'} />
      <Item label={'Employment status'} value={'Mr'} />

      <View style={styles.bottom}>
        <ButtonOrange title='Next' onPress={() => { router.push('/organic/ThatsEverything') }} />
      </View>
    </View>

  );
}

const Item = (props) => {
  return (
    <View style={[styles.item, props.style]}>
      <Divider style={styles.divider} />
      <Text style={styles.item_label}>{props.label}</Text>
      <Text style={styles.item_value}>{props.value}</Text>
      <Pen style={[styles.pen, { display: props.display }]} width={pxToDp(24)} height={pxToDp(24)} onPress={props.onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Primary.navy100
  },
  title_text: {
    ...Heading2,
    color: TextLight.high,
    marginTop: pxToDp(96),
  },
  tip_text: {
    ...Large,
    color: TextLight.low,
    marginTop: pxToDp(18),
    marginHorizontal: pxToDp(16)
  },
  item: {
    width: pxToDpW(358),
    height: pxToDp(56),
    alignItems: 'flex-start',
  },
  divider: {
    width: pxToDpW(358),
    backgroundColor: '#757B8A',
    height: pxToDp(2),

  },
  item_label: {
    ...ParagraphSamll,
    color: Primary.navy40,
    marginTop: pxToDp(10),
    letterSpacing: -0.2
  },
  item_value: {
    ...ParagraphMedium,
    color: TextLight.high,
  },
  pen: {
    right: 0,
    position: 'absolute',
    verticalAlign: 'auto',
    marginTop: pxToDp(14),
  },
  bottom: {
    width: '100%',
    height: pxToDp(84),
    backgroundColor: Primary.navy90,
    bottom: 0,
    position: 'absolute',
    justifyContent: 'center'
  }
});
