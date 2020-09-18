import React from 'react';
import { View, TextInput } from 'react-native';
import { TuimButton } from '../Design/Buttons';

export default function ScannerFooterArea({ navigate, inputInFocus, styleContainer = {} }) {

    return (
        <>
            <View style={[styles.scannerFooterContainer, styleContainer]}>
                <TextInput
                    style={styles.scannerFooterTextInput}
                    placeholder='Insira o código do produto'
                    onFocus={() => inputInFocus()}
                // onBlur={() => animateTheInputAvoiding(false)}
                >
                </TextInput>
            </View>
            <View style={styles.tuimButtonContainer}>
                <TuimButton
                    tuimButtonText='Prosseguir'
                    onPress={() => navigate('Product')}
                />
            </View>
        </>
    )
}

const styles = {
    scannerFooterContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    tuimButtonContainer: {
        flex: 1,
        marginBottom: 15,
        justifyContent: 'center',
    },
    scannerFooterTextInput: {
        height: 40,
        padding: 10,
        width: '80%',
        elevation: 3,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        borderWidth: .2,
        shadowColor: "#000",
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        backgroundColor: 'white',
    }
}
