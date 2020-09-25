import React from 'react'
import Colors from '../../config/colors'
import { Icon } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient'
import { View, Text, ImageBackground } from 'react-native'

export default function PremiumCoachCard(props) {

    const { imgSource = '', cardTitle, cardLevel, star_1, star_2, star_3, } = props;


    return (
        <View style={{ marginRight: 10 }}>

            <ImageBackground
                resizeMode='cover'
                source={imgSource}
                imageStyle={{
                    borderRadius: 20,
                    opacity: 1,
                }}
                style={{ height: 160, width: 280, justifyContent: 'flex-end' }}
            >

                <View style={{ marginHorizontal: 10, marginBottom: 20 }}>

                    <Text style={{
                        fontSize: 30,
                        color: '#fff',
                        // color: Colors.primaryRed,
                        fontWeight: '900',
                        fontFamily: 'Cinzel-Bold',
                        textShadowColor: 'black',
                        textShadowOffset: { width: -1, height: 1 },
                        textShadowRadius: 0.1
                    }}>{cardTitle}</Text>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{
                                fontSize: 15,
                                color: '#fff',
                                fontWeight: '900',
                                marginRight: 10,
                                textShadowColor: 'black',
                                textShadowOffset: { width: -1, height: 1 },
                                textShadowRadius: 0.1
                            }}>{cardLevel}</Text>
                        </View>

                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', }}>
                            <Text style={{
                                fontSize: 15,
                                color: '#fff',
                                fontWeight: '900',
                                textShadowColor: 'black',
                                textShadowOffset: { width: -1, height: 1 },
                                textShadowRadius: 0.1
                            }}>Nível:</Text>
                            <View style={{ marginHorizontal: 10, flexDirection: 'row' }}>
                                <Icon
                                    name='star'
                                    type='font-awesome'
                                    color={star_1 ? Colors.primaryRed: 'white'}
                                    size={16}
                                />
                                <Icon
                                    name='star'
                                    type='font-awesome'
                                    color={star_2 ? Colors.primaryRed: 'white'}
                                    size={16}
                                />
                                <Icon
                                    name='star'
                                    type='font-awesome'
                                    color={star_3 ? Colors.primaryRed: 'white'}
                                    size={16}
                                />
                            </View>

                        </View>


                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = {

}
