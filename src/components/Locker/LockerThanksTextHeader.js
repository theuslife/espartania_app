import React from 'react'
import { View, Text } from 'react-native'
import { TuimGreenIcone } from '../Design/Imagens';

export default function LockerThanksTextHeader() {
    return (
        <>
            <TuimGreenIcone
                style={styles.miniTuimGreenIcone}
                imgStyle={{ width: 14, height: 11 }}
            />

            <TuimGreenIcone
                style={styles.miniTuimGreenIconeMiddle}
                imgStyle={{ width: 14, height: 11 }}
            />

            <TuimGreenIcone
                style={styles.miniTuimGreenIconeTop}
                imgStyle={{ width: 14, height: 11 }}
            />

            <Text style={styles.primaryTextStyle}>Obrigado!</Text>

            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.secondaryTextStyle}>Você acumulou </Text>
                <Text style={[styles.primaryTextStyle, { fontSize: 20 }]}>50</Text>
                <Text style={styles.secondaryTextStyle} >TuimPoints!</Text>
            </View>

            <Text
                style={styles.secondaryTextStyle}
            >
                Utilize seus pontos para obter
                descontos nas próximas locações!
            </Text>

            <Text
                style={[styles.primaryTextStyle, styles.middleText]}
            >
                Conquiste mais TuimPoints!
            </Text>



        </>

    )
}

const styles = {
    primaryTextStyle: {
        fontSize: 24,
        marginVertical: 5,
        color: '#0A3251',
        textAlign: 'center',
        fontFamily: 'Barlow-bold'
    },
    middleText: {
        marginVertical: 20,
        fontSize: 22
    },
    secondaryTextStyle: {
        fontSize: 18,
        marginHorizontal: 5,
        marginVertical: 5,
        color: '#2C2C2C',
        textAlign: 'center',
        fontFamily: 'Barlow-regular'
    },
    miniTuimGreenIcone: {
        bottom: -230,
        left: 110,
        width: 19,
        height: 19,
        zIndex: 74,
        elevation: 999,
        borderRadius: 9.5,
        position: 'relative',
        backgroundColor: '#00C830',
        transform: [{ rotate: '30deg' }],
    },
    miniTuimGreenIconeMiddle: {
        bottom: -200,
        left: 155,
        width: 19,
        height: 19,
        zIndex: 74,
        elevation: 999,
        borderRadius: 9.5,
        position: 'relative',
        backgroundColor: '#00C830',
        transform: [{ rotate: '0deg' }],
    },
    miniTuimGreenIconeTop: {
        bottom: -140,
        left: 135,
        width: 19,
        height: 19,
        zIndex: 74,
        elevation: 999,
        borderRadius: 9.5,
        position: 'relative',
        backgroundColor: '#00C830',
        transform: [{ rotate: '-30deg' }],
    }
}