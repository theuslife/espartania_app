import React from 'react'
import { View, Text, Image } from 'react-native'

export const Avatar = () => {
    return (
        <View style={{ marginRight: 10 }}>
            <View style={{ width: 25, height: 25, borderRadius: 12.5, backgroundColor: '#C0C0C0' }}>
                <Image
                    resizeMode='contain'
                    style={{ width: 25, height: 25, borderRadius: 125 }}
                    source={{
                        uri:
                            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                    }}
                />
            </View>
        </View>
    )
}
