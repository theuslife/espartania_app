import React from 'react'
import { View, Text } from 'react-native'
import { Icon } from 'react-native-elements';

export function DoubleTextColor({ textOne, textTwo, textOneStyle = {}, textTwoStyle = {} }) {
    return (
        <View style={{ flexDirection: 'row' }}>
            <Text style={[styles.firstProductName, textOneStyle]}>{textOne}</Text>
            <Text style={[styles.secondProductName, textTwoStyle]}>{textTwo}</Text>
        </View>
    )
}

export function TextIconInLeft(props) {

    const { nameIcon, typeIcon, text, iconContainer = {} } = props;

    return (
        <>
            <View style={[styles.iconContainer, iconContainer]}>
                <Icon name={nameIcon} type={typeIcon} {...props} />
                <Text style={{ fontSize: 14 }}>{text}</Text>
            </View>
        </>
    )
}

const styles = {
    firstProductName: {
        marginLeft: 15,
        fontSize: 24,
        color: '#094047',
        fontFamily: 'Barlow-regular'
    },
    secondProductName: {
        marginLeft: 10,
        fontSize: 24,
        color: '#00C830',
        fontFamily: 'Barlow-regular'
    },
    iconContainer: {
        flexDirection: 'row',
        marginHorizontal: 12,
        marginVertical: 5
    },
}