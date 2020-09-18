import React from 'react'
import { View, Text } from 'react-native'

export default function ScannerTopMsg() {
    return (
        <View style={styles.scannerTopMsgContainer}>

            <View style={{ width: '80%' }}>
                <Text style={styles.textScannerTopMsg}>
                    Aponte a câmera do celular para o
                    QR Code na porta do Locker com o
                    utensílio desejado.
            </Text>
            </View>

        </View>
    )
}

const styles = {
    scannerTopMsgContainer: {
        flex: 1,
        margin: 5,
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    textScannerTopMsg: {
        fontSize: 17,
        color: '#0A3251',
        textAlign: 'center',
        fontFamily: 'Barlow-bold'
    }
}
