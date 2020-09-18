import React from 'react'
import { PrimaryTextInput } from '../Design/TextInputs';

export default function PaymentInputs() {
    return (
        <>
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
                placeholder='CVV'
            />
            <PrimaryTextInput
                style={{ marginVertical: 8 }}
                placeholder='Nome do Titular'
            />
        </>
    )
}
