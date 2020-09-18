import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Colors from '../../config/colors';

export function EspartaniaButton(props) {

    const {
        onPress,
        styleContainer = {},
        espartaniaButtonText = 'Coloque aqui o texto de seu bottão',
    } = props;

    return (
        <View style={[styles.espartaniaButtonContainer, styleContainer]}>
            <TouchableOpacity style={{ flex: 1 }} onPress={() => onPress()}>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={styles.espartaniaButtonText}>
                        {espartaniaButtonText}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export function SecondaryEspartaniaButton(props) {

    const {
        onPress,
        styleContainer = {},
        espartaniaButtonText = 'Coloque aqui o texto de seu bottão',
    } = props;

    return (
        <View style={[styles.espartaniaSecondaryButtonContainer, styleContainer]}>
            <TouchableOpacity style={{ flex: 1 }} onPress={() => onPress()}>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={styles.espartaniaSecondaryButtonText}>
                        {espartaniaButtonText}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = {
    espartaniaButtonContainer: {
        height: 47,
        width: 300,
        borderRadius: 20,
        backgroundColor: Colors.primaryRed
    },
    espartaniaButtonText: {
        fontSize: 16,
        color: '#FFF',
        // fontFamily: 'Barlow-bold'
    },
    espartaniaSecondaryButtonContainer: {
        height: 47,
        width: 300,
        borderRadius: 20,
        backgroundColor: '#FFF'
    },
    espartaniaSecondaryButtonText: {
        fontSize: 16,
        color: Colors.primaryRed,
        // fontFamily: 'Barlow-bold'
    },
}
