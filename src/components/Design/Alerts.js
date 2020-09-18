export const AlertEspartania = (title, onPress ) => (

    Alert.alert(
        'Espartania',
        title,
        [
            {
                text: 'Ok', onPress: () => (typeof (onPress) == 'function') ? onPress() : onPress
            }
        ]
    )

)