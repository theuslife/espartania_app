import React from 'react'
import { TuimButton } from '../Design/Buttons';
import { TuimGreenIcone } from '../Design/Imagens';
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import ProductSimpleResume from '../Product/ProductSimpleResume';

export default function LockerUnlock({ navigation }) {
    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ flex: 0.3 }}>
                    <ProductSimpleResume />
                </View>

                <View style={{ flex: 1 }}>
                    <Text style={styles.primaryText}>Parabéns</Text>
                    <Text style={styles.secondaryText}>Seu pedido já foi processado com sucesso!</Text>
                    <Text style={styles.primaryText}>#867738</Text>
                    <View style={styles.tuimButtonContainer}>
                        <TuimButton
                            tuimButtonText='Destravar Locker'
                            onPress={() => navigation.navigate('LockerThanks')}
                        />
                    </View>
                </View>
            </ScrollView>
            <TuimGreenIcone
                style={styles.tuimGreenIconeOnTop}
                imgStyle={{ marginTop: 50, width: 122, height: 91 }}
            />
        </SafeAreaView>
    )
}

const styles = {
    safeAreaContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    primaryText: {
        fontSize: 24,
        marginVertical: 5,
        color: '#0A3251',
        textAlign: 'center',
        fontFamily: 'Barlow-regular'
    },
    secondaryText: {
        fontSize: 18,
        marginVertical: 10,
        marginHorizontal: 50,
        color: '#2C2C2C',
        textAlign: 'center',
        fontFamily: 'Barlow-regular'
    },
    tuimButtonContainer: {
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tuimGreenIconeOnTop: {
        bottom: -20,
        right: -20,
        width: 162,
        height: 162,
        zIndex: 990,
        elevation: 999,
        borderRadius: 81,
        position: 'absolute',
        backgroundColor: '#00C830',
        transform: [{ rotate: '-30deg' }],
    },
}
