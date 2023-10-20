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
import { pxToDp } from '../tools/Dimension'
import { colors, Heading2, Regular3 } from '../GlobalStyle'
import { Header } from '../components/HeaderBar'

export default function App() {
    const navigation = useRouter()
    const [text, onChangeText] = useState("");
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" backgroundColor='#19233C' />

            <ScrollView >
                <View>
                    <Header step={'1'} progress={6 / 26} display={'flex'} />

                    <Text style={styles.title_text}>Create security number</Text>

                    <Text style={styles.desc_text}>Enter a memorable 6 digit security number which you will need to use to access you account on this device.</Text>

                    <View style={styles.circle_group}>
                        <View style={styles.circle} />
                        <View style={styles.circle} />
                        <View style={styles.circle} />
                        <View style={styles.circle} />
                        <View style={styles.circle} />
                        <View style={styles.circle} />
                    </View>

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
    pin: {
        alignSelf: 'center',
    },
    title_text: {
        ...Heading2,
        color: colors.white,
        marginTop: pxToDp(24),
    },
    desc_text: {
        ...Regular3,
        color: colors.light_text,
        marginTop: pxToDp(12),
        marginHorizontal: pxToDp(16)
    },
    circle_group: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: pxToDp(20),
    },
    circle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: pxToDp(16),
        height: pxToDp(16),
        backgroundColor: '#757B8A',
        borderStyle: 'solid',
        borderRadius: pxToDp(16),
        margin: 8
    }
});
