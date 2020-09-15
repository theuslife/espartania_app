export const AlertTuim = (title, onPress ) => (

    Alert.alert(
        'Tuim Mobile',
        title,
        [
            {
                text: 'Ok', onPress: () => (typeof (onPress) == 'function') ? onPress() : onPress
            }
        ]
    )

)