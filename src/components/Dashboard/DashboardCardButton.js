import React from 'react'
import Colors from '../../config/colors';
import { Text, Image, TouchableOpacity } from 'react-native'

export default function DashboardCardButton({ sourceImg, title, onPress }) {
    return (
        <TouchableOpacity
            style={styles.containerCard}
            onPress={() => onPress()}
        >
            <Image
                source={sourceImg}
                style={[{ width: 60, height: 60, marginTop: 20 }]}
            />
            <Text style={styles.title}>
                {title}
            </Text>

        </TouchableOpacity>
    )
}

const styles = {
    containerCard: {
        marginVertical: 10,
        marginHorizontal: 10,
        width: '40%',
        height: 150,
        borderRadius: 12.5,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        elevation: 3,
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
    },
    title: {
        fontFamily: 'Cinzel-Medium',
        marginTop: 10,
        fontSize: 16,
        color: Colors.secondaryRed
    }
}
