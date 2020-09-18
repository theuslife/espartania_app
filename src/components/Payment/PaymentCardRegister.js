import React from 'react';
import PaymentInputs from './PaymentInputs';
import { TuimButton } from '../Design/Buttons';
import { TuimGreenIcone } from '../Design/Imagens';
import PaymentPrivacyPolicy from './PaymentPrivacyPolicy';
import PaymentCardsAvailable from './PaymentCardsAvailable';
import ProductSimpleResume from '../Product/ProductSimpleResume';
import { SafeAreaView, View, ScrollView, Platform, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function PaymentCardRegister({ navigation }) {
    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

                        <View style={{ flex: 0.2 }}>

                            {/* Product resume on header */}
                            <ProductSimpleResume />

                            {/* Absolute Tuim icon */}
                            <TuimGreenIcone
                                style={styles.tuimGreenIconeOnTop}
                                imgStyle={{ marginTop: 20, width: 52, height: 39 }}
                            />

                            {/* Types of cards to buy */}
                            <View style={{ padding: 10, alignItems: 'center' }}>
                                <PaymentCardsAvailable />
                            </View>

                        </View>

                        {/* Inputs and button */}
                        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
                            <PaymentInputs />
                            <TuimButton
                                tuimButtonText='Finalizar'
                                styleContainer={{ marginTop: 5 }}
                                onPress={() => { navigation.navigate('LockerUnlock') }}
                            />
                        </View>

                        {/* Política de privacidade */}
                        <View style={{ flex: 1 }}>
                            <PaymentPrivacyPolicy />
                            <View style={{ height: 50 }}></View>
                        </View>
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = {
    safeAreaContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    firstProductName: {
        fontSize: 24,
        marginLeft: 15,
        color: '#094047',
        fontFamily: 'Barlow-regular'
    },
    tuimGreenIconeOnTop: {
        top: 60,
        right: -5,
        width: 70,
        height: 70,
        zIndex: 990,
        elevation: 999,
        borderRadius: 45,
        position: 'absolute',
        backgroundColor: '#00C830',
        transform: [{ rotate: '30deg' }],
    },
}
