import React from 'react'
import { View } from 'react-native'
import { TuimIconeTransparent } from '../Design/Imagens';

export default function EvaluationIcone({ iconStyle }) {
    return (
        <View style={[{
            marginHorizontal: 5,
            width: 42,
            height: 42,
            borderRadius: 21,
            marginVertical: 5,
            backgroundColor: '#B2EFC1',
            justifyContent: 'center',
            alignItems: 'center'
        }, iconStyle]}>
            <TuimIconeTransparent imgStyle={{ height: 35, width: 35 }} />
        </View>
    )
}
