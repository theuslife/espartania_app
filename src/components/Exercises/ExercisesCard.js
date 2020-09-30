import React from 'react'
import { View, Text, Image } from 'react-native'
import Colors from '../../config/colors';
import resources from '../../config/resources';

export default function ExercisesCard({sourceImg = require('../../../assets/IMG_6480.png')}) {
    return (
        <View style={[styles.containerCard]}>
            <Image
                source={sourceImg}
                style={[{ width: '100%', height: '100%', borderRadius: 12.5 }]}
            />
            <View style={{ flex: 1, alignItems: 'flex-end', flexDirection: 'row' }}>


                <View style={[styles.bottomContainerCard, { backgroundColor: Colors.neve}]}>
                    <Text style={{ color: '#000', fontSize: 16, fontFamily: 'Cinzel-Bold' }}>
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
        height: 25,
        width: 100,
        flexDirection: 'row',
        alignItems: 'center',
        borderTopRightRadius: 5,
        justifyContent: 'center',
        borderTopStartRadius: 5,
        borderBottomEndRadius: 5,
        borderBottomLeftRadius: 5,
        backgroundColor: Colors.secondaryReb,
    }
}
