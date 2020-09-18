import React from 'react'
import { TuimButton } from '../Design/Buttons';
import { PrimaryTextInput } from '../Design/TextInputs';
import { primaryTextStyle } from '../Design/commonStyle';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';

export default function UserSettings() {
    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <Text style={[primaryTextStyle, { marginVertical: 30 }]}>Meus Dados</Text>
                <View style={{ alignItems: 'center' }}>
                    <PrimaryTextInput
                        style={{ marginVertical: 8 }}
                        placeholder='Número do Usuário'
                    />
                    <PrimaryTextInput
                        style={{ marginVertical: 8 }}
                        placeholder='Senha'
                    />
                    <PrimaryTextInput
                        style={{ marginVertical: 8 }}
                        placeholder='Número do Cartão'
                    />
                    <PrimaryTextInput
                        style={{ marginVertical: 8 }}
                        placeholder='Validade'
                    />
                    <PrimaryTextInput
                        style={{ marginVertical: 8 }}
                        placeholder='CV'
                    />
                    <PrimaryTextInput
                        style={{ marginVertical: 8 }}
                        placeholder='Nome do Titular'
                    />
                </View>
                <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                    <TuimButton
                        tuimButtonText='Salvar Dados'
                        styleContainer={{ marginTop: 5 }}
                    />
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

const styles = {
    safeAreaContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
}
