import React from 'react';
import { View } from 'react-native';
import WelcomeText from './WelcomeText';
import { TuimButton } from '../Design/Buttons'
import { TuimLogoOnTop, TuimGreenIcone } from '../Design/Imagens';

export default function Welcome({ navigation }) {
    return (

        <View style={styles.container}>

            {/* TUIM TOP IMAGE */}
            <View style={styles.logoOnTopContainer}>
                <TuimLogoOnTop />
            </View>

            {/* TUIM TEXT */}
            <View style={styles.middleWelcomeTextContainer}>

                <TuimGreenIcone
                    style={styles.tuimGreenIconeOnTop}
                    imgStyle={styles.tuimImgStyle}
                />

                <WelcomeText />

                <TuimGreenIcone
                    style={styles.tuimGreenIconeOnBottom}
                    imgStyle={styles.tuimImgStyle}
                />

            </View>

            {/* TUIM BUTTON */}
            <View style={styles.tuimButtonContainer}>
                <TuimButton
                    tuimButtonText='Escanear Produto'
                    onPress={() => navigation.navigate('Scanner')}
                />
            </View>

        </View>

    )
}

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoOnTopContainer: {
        flex: 1,
        height: 20,
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'flex-end',
    },
    middleWelcomeTextContainer: {
        flex: 4,
        height: 20,
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    tuimGreenIconeOnTop: {
        top: -20,
        left: 15,
        width: 86,
        height: 86,
        borderRadius: 43,
        position: 'absolute',
        backgroundColor: '#00C830',
        transform: [{ rotate: '-20deg' }],
    },
    tuimGreenIconeOnBottom: {
        right: 15,
        width: 86,
        bottom: 30,
        zIndex: -1,
        height: 86,
        borderRadius: 43,
        position: 'absolute',
        backgroundColor: '#00C830',
        transform: [{ rotate: '40deg' }],
    },
    tuimButtonContainer: {
        flex: 1,
        height: 20,
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    tuimImgStyle: {
        width: 60,
        height: 60,
        marginTop: 20
    }
}
