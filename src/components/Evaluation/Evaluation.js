import React from 'react'
import { TuimButton } from '../Design/Buttons';
import EvaluationIcone from './EvaluationIcone';
import { TuimGreenIcone } from '../Design/Imagens';
import EvaluationTextAndIcon from './EvaluationIconeContainer';
import { CircleIconText } from '../Design/MultipleStyleComponents';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';

export default function Evaluation({ navigation: { navigate } }) {
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

                <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'flex-end' }}>
                    <Text style={styles.primaryTextStyle}>Avaliação</Text>

                    <Text style={styles.secondaryTextStyle}>
                        Avaliar o produto e a experiência de
                        utilizar a TuimBox gera mais TuimPoints para você.
                    </Text>

                </View>

                <View style={{ flex: 2, backgroundColor: 'white', justifyContent: 'center' }}>

                    <EvaluationTextAndIcon text='Qualidade do produto'>
                        <EvaluationIcone />
                        <EvaluationIcone />
                        <EvaluationIcone iconStyle={{ backgroundColor: '#D8D8D8' }} />
                        <EvaluationIcone iconStyle={{ backgroundColor: '#D8D8D8' }} />
                        <EvaluationIcone iconStyle={{ backgroundColor: '#D8D8D8' }} />
                    </EvaluationTextAndIcon>

                    <EvaluationTextAndIcon text='Limpeza'>
                        <EvaluationIcone />
                        <EvaluationIcone />
                        <EvaluationIcone />
                        <EvaluationIcone iconStyle={{ backgroundColor: '#D8D8D8' }} />
                        <EvaluationIcone iconStyle={{ backgroundColor: '#D8D8D8' }} />
                    </EvaluationTextAndIcon>

                    <EvaluationTextAndIcon text='Custo-benefício'>
                        <EvaluationIcone iconStyle={{ backgroundColor: '#D8D8D8' }} />
                        <EvaluationIcone iconStyle={{ backgroundColor: '#D8D8D8' }} />
                        <EvaluationIcone iconStyle={{ backgroundColor: '#D8D8D8' }} />
                        <EvaluationIcone iconStyle={{ backgroundColor: '#D8D8D8' }} />
                        <EvaluationIcone iconStyle={{ backgroundColor: '#D8D8D8' }} />
                    </EvaluationTextAndIcon>

                </View>

                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    backgroundColor: 'white',
                    justifyContent: 'flex-start',
                }}>

                    <Text style={styles.secondaryTextStyle}>Vocë alugaria móveis para sua casa?</Text>
                    <View style={{ flexDirection: 'row' }}>

                        <CircleIconText>
                            <Text style={{ color: 'white' }}>Sim</Text>
                        </CircleIconText>

                        <CircleIconText iconStyle={{ backgroundColor: '#D8D8D8', }}>
                            <Text style={{ color: 'black' }}>Não</Text>
                        </CircleIconText>

                    </View>
                </View>

                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <TuimButton
                        tuimButtonText='Avaliar e volta para a Home'
                        onPress={() => navigate('LockerReturn')}
                    />
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
        fontSize: 30,
        color: '#0A3251',
        marginVertical: 10,
        textAlign: 'center',
        fontFamily: 'Barlow-bold'
    },
    secondaryTextStyle: {
        fontSize: 18,
        color: '#2C2C2C',
        textAlign: 'center',
        marginHorizontal: 30,
    },
}
