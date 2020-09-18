import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { TuimGreenIcone } from '../Design/Imagens';
import { PrimaryTextInput } from '../Design/TextInputs';
import { TuimButton } from '../Design/Buttons';

export default function AuthRegister() {
    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <TuimGreenIcone
                    style={styles.tuimGreenIconeOnTop}
                    imgStyle={{ marginTop: 20, width: 52, height: 39 }}
                />

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.commonStyleText}>Meus Dados</Text>

                    <PrimaryTextInput
                        style={{ marginVertical: 8 }}
                        placeholder='Nome Completo'
                    />
                    <PrimaryTextInput
                        style={{ marginVertical: 8 }}
                        placeholder='RG'
                    />
                    <PrimaryTextInput
                        style={{ marginVertical: 8 }}
                        placeholder='CPF'
                    />
                    <PrimaryTextInput
                        style={{ marginVertical: 8 }}
                        placeholder='Data de Nascimento'
                    />
                    <PrimaryTextInput
                        style={{ marginVertical: 8 }}
                        placeholder='E-mail'
                    />
                    <PrimaryTextInput
                        style={{ marginVertical: 8 }}
                        placeholder='Senha'
                    />

                    <TuimButton
                        tuimButtonText='Cadastrar'
                        styleContainer={{ marginTop: 10 }}
                        onPress={() => { }}
                    />

                    <View style={{ height: 50, width: '100%' }}></View>

                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = {
    safeAreaContainer: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    tuimGreenIconeOnTop: {
        top: 40,
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
    commonStyleText: {
        fontSize: 20,
        color: '#0A3251',
        textAlign: 'center',
        fontFamily: 'Barlow-regular'
    },
}
