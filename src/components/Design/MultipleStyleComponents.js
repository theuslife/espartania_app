import React from 'react'
import { View, Text } from 'react-native'

export function IconNumberAndText(props) {

    const { iconNumber } = props;

    return (
        <View style={{
            marginVertical: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            paddingHorizontal: 20,
        }}>

            <View style={{ flex: 0.3 }}>
                <View style={{
                    width: 36,
                    height: 36,
                    marginRight: 10,
                    borderRadius: 18,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#094047',
                }}>
                    <Text style={{
                        color: '#FFF',
                        fontFamily: 'Barlow-bold',
                        fontSize: 20
                    }}>{iconNumber}</Text>
                </View>
            </View>

            <View style={{ flex: 2, textAlign: 'justify' }}>

                {props.children}

            </View>

        </View>
    )
}

export function CircleIconText(props) {

    const { iconStyle = {}, children } = props;

    return (
        <View style={[styles.circleIcon, iconStyle]}>
            {children}
        </View>
    )

}

const styles = {
    circleIcon: {
        marginHorizontal: 5,
        width: 42,
        height: 42,
        borderRadius: 21,
        marginVertical: 5,
        backgroundColor: '#094047',
        justifyContent: 'center',
        alignItems: 'center'
    }
}
