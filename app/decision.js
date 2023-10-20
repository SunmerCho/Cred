import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View, } from 'react-native';
import { pxToDp } from './tools/Dimension'
import { useRouter } from 'expo-router';
import { colors} from './GlobalStyle'
import { ButtonBorderOrange } from './components/Button';

export default function App() {
  const navigation = useRouter()
  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor={colors.navy} />
      <ButtonBorderOrange title='Organic' onPress={() => navigation.push('/organic/T$Cs')} />
      <View style={{ height: pxToDp(13) }} />
      <ButtonBorderOrange title={'API'} onPress={() => (navigation.push('/organic/T$Cs'))} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.navy
  },
});
