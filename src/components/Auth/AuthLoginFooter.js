import React from 'react'
import { View, Text } from 'react-native'
import { SocialIcon } from 'react-native-elements';

export default function AuthLoginFooter() {
    return (
        <View style={{ marginTop: 30 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{
                    width: '23%',
                    height: 20,
                    marginBottom: 15,
                    borderBottomWidth: 0.6,
                    borderBottomColor: 'gray',
                }}></View>
                <View style={{ marginHorizontal: 10 }}>
                    <Text style={{ color: 'gray' }}>Ou conecte-se com</Text>
                </View>
                <View style={{
                    width: '23%',
                    height: 20,
                    marginBottom: 15,
                    borderBottomWidth: 0.6,
                    borderBottomColor: 'gray',
                }}></View>
            </View>

            <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
                <SocialIcon
                    title='Facebook'
                    button
                    style={{ backgroundColor: '#39619B', width: '35%' }}
                    type='facebook'
                />
                <SocialIcon
                    title='Google'
                    button
                    style={{ backgroundColor: '#dd4b39', width: '35%' }}
                    type='google'
                />
            </View>
        </View>
    )
}
