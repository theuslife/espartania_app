import React from 'react';
import { View, Text, Dimensions } from 'react-native';

const { width } = Dimensions.get('window')

export default function WelcomeText() {

    return (
        <View style={{ margin: 20 }}>

            <View style={{ flex: 1 }}>
                <Text style={styles.topText}>
                    Bem-vindo a Tuim Box!
            </Text>

                <Text style={styles.subtitleText}>
                    Por que alugar eletrodomésticos?
            </Text>

            </View>

            <View style={{ flex: 4 }}>
                <Text style={styles.middleText}>
                    A única certeza que a gente tem é que tudo muda o tempo todo.
                    Mudam nossas paixões, nossas aspirações, nossos gostos.
                    Mudam também nossos endereços para acompanhar a transformação das
                    nossas carreiras, famílias e até mesmo do nosso estilo de vida.
            </Text>

                <Text style={styles.bottomText}>
                    E se a vida é móvel, por que nossos móveis não mudam
                    com ela pra expressar nossa personalidade e nos acolher em
                    todos os momentos?
            </Text>
            </View>

        </View>
    )
}

const styles = {
    topText: {
        margin: 5,
        fontSize: 18,
        color: '#0A3251',
        textAlign: 'center',
        fontFamily: 'Barlow-regular',
    },
    subtitleText: {
        fontSize: 18,
        marginTop: 40,
        color: '#0A3251',
        textAlign: 'center',
        fontFamily: 'Barlow-regular'
    },
    middleText: {
        fontSize: 18,
        marginTop: 30,
        color: '#0A3251',
        textAlign: 'center',
        fontFamily: 'Barlow-regular'
    },
    bottomText: {
        fontSize: 18,
        marginTop: 50,
        color: '#0A3251',
        textAlign: 'center',
        fontFamily: 'Barlow-regular'
    }
}
