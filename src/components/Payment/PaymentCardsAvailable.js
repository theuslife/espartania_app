import React from 'react'
import { Text, Image } from 'react-native'
import resources from '../../config/resources';

export default function PaymentCardsAvailable() {
    return (
        <>
            <Text style={styles.textPaymentTopHeader}>Dados de Pagamento</Text>
            <Image
                resizeMode='contain'
                source={resources.cardsOptions}
                style={{ width: 318, height: 46, marginTop: 10 }}
            />
        </>
    )
}

const styles = {
    textPaymentTopHeader: {
        fontSize: 24,
        color: '#0A3251',
        textAlign: 'center',
        fontFamily: 'Barlow-regular'
    },
}
