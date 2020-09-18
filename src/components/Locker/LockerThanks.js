import React from 'react';
import { TuimButton } from '../Design/Buttons';
import { TuimGreenIcone } from '../Design/Imagens';
import LockerThanksTextHeader from './LockerThanksTextHeader';
import { View, SafeAreaView, ScrollView, Text } from 'react-native';
import { IconNumberAndText } from '../Design/MultipleStyleComponents';

export default function LockerThanks({ navigation }) {
    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

                <TuimGreenIcone
                    style={styles.tuimGreenIconeOnTop}
                    imgStyle={{
                        marginTop: 60,
                        width: 111,
                        height: 83
                    }}
                />

                <View style={styles.headerContainer}>

                    <LockerThanksTextHeader />

                </View>

                <View style={{ flex: 1 }}>

                    <IconNumberAndText iconNumber='1'>
                        <Text style={styles.secondaryTextStyle}>
                            Publique uma foto utilizando o produto,no Instagram ou Facebook,
                            com a #TuimBox
                        </Text>
                        <View style={{ flexDirection: 'row', flex: 1 }}>
                            <Text style={styles.secondaryTextStyle}>e acumule mais pontos.</Text>
                            <Text style={[styles.primaryTextStyle, { fontSize: 18, marginVertical: 0 }]}>
                                Seja criativo!
                            </Text>
                        </View>
                        <Text style={styles.secondaryTextStyle}>
                            Se nosso time  gostar da sua publicação, TuimPoints irão surgir!
                        </Text>
                    </IconNumberAndText>

                    <IconNumberAndText iconNumber='2'>
                        <Text style={styles.secondaryTextStyle}>
                            Seja cuidadoso com o produto e
                            entregue na melhor condição possível. Uma avaliação positiva do
                            próximo usuário gera mais TuimPoints
                        </Text>
                    </IconNumberAndText>

                    <IconNumberAndText iconNumber='3'>
                        <Text style={styles.secondaryTextStyle}>
                            Avalie o produto e a experiência de utilizar a TuimBox
                        </Text>
                    </IconNumberAndText>

                    <View style={styles.buttonContainer}>
                        <TuimButton
                            tuimButtonText='Continuar'
                            onPress={() => navigation.navigate('Evaluation')}
                        />
                    </View>

                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = {
    safeAreaContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    tuimGreenIconeOnTop: {
        top: -60,
        opacity: 0.4,
        left: -30,
        zIndex: 74,
        width: 148,
        height: 148,
        elevation: 999,
        borderRadius: 81,
        position: 'absolute',
        backgroundColor: '#00C830',
        transform: [{ rotate: '-30deg' }],
    },
    primaryTextStyle: {
        fontSize: 24,
        color: '#0A3251',
        textAlign: 'center',
        fontFamily: 'Barlow-bold'
    },
    secondaryTextStyle: {
        fontSize: 18,
        color: '#2C2C2C',
        marginHorizontal: 5,
    },
    buttonContainer: {
        marginTop: 70,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerContainer: {
        flex: 0.1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    }
}
