import React from 'react'
import { View, Text } from 'react-native'
import { TuimProductExampleImage } from '../Design/Imagens';
import { DoubleTextColor, TextIconInLeft } from '../Design/Texts';

export default function ProductSimpleResume() {
    return (
        <View style={{ flexDirection: 'row', padding: 10 }}>

            <View style={{ flex: 1 }}>
                <TuimProductExampleImage imgStyle={{ width: 88, height: 88 }} />
            </View>

            <View style={{ flex: 4, flexDirection: 'column', }}>

                <DoubleTextColor
                    textOne='Batedeira'
                    textOneStyle={{ fontSize: 20 }}
                    textTwoStyle={{ fontSize: 20 }}
                    textTwo='KitchenAid Artisan'
                />

                <Text style={styles.code}>Código 654823-P</Text>

                <TextIconInLeft
                    text='110v'
                    nameIcon='energy'
                    size={16} color={'black'}
                    typeIcon='simple-line-icon'
                />

            </View>

        </View>
    )
}

const styles = {
    code: {
        fontSize: 15,
        color: '#B5B5B5',
        marginHorizontal: 15,
        fontFamily: 'Barlow-regular'
    },
}
