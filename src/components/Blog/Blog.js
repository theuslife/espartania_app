import React from 'react'
import { View, Text } from 'react-native'

export default function Blog() {
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#f8f8ff'
        }}>
            <View
                style={{
                    marginVertical: 20,
                    marginHorizontal: 20,
                    width: 300,
                    height: 200,
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
                }}
            >
                <Text>Hello world</Text>
            </View>
        </View>
    )
}
