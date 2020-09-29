import React from 'react'
import { View, Text } from 'react-native'
import Colors from '../../config/colors';

export default function ExercisesCard() {
    return (
        <View style={[styles.containerCard]}>

            <View style={{ flex: 1, alignItems: 'flex-end', flexDirection: 'row' }}>

                <View style={[styles.bottomContainerCard, { backgroundColor: Colors.secondaryRed}]}>
                    <Text style={{ color: '#fff', fontSize: 16, fontFamily: 'Cinzel-Bold' }}>
                        (Nível 1)
                </Text>
                </View>
            </View>

        </View>
    )
}

const styles = {
    containerCard: {
        height: 170,
        elevation: 3,
        width: '45%',
        borderRadius: 12.5,
        marginVertical: 10,
        marginHorizontal: 5,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
    },
    bottomContainerCard: {
        flex: 1,
        height: 30,
        width: 100,
        flexDirection: 'row',
        alignItems: 'center',
        borderTopRightRadius: 5,
        justifyContent: 'center',
        borderTopStartRadius: 5,
        borderBottomEndRadius: 5,
        borderBottomLeftRadius: 5,
        backgroundColor: Colors.secondaryRed,
    }
}
