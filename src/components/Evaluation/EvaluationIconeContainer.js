import React from 'react'
import { View, Text } from 'react-native'

export default function EvaluationIconeContainer({ text, children, }) {
    return (
        <View style={{ marginTop: 30}}>
            <Text style={[styles.secondaryTextStyle]}>
                {text}
            </Text>

            <View style={{
                flexDirection: 'row',
                marginHorizontal: 30,
                justifyContent: 'center'
            }}>
                {children}
            </View>
        </View>
    )
}

const styles = {
    secondaryTextStyle: {
        fontSize: 18,
        color: '#2C2C2C',
        marginHorizontal: 30,
        textAlign: 'center'
    },
}
