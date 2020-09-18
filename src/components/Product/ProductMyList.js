import React from 'react';
import { Line } from '../Design/Lines';
import ProductInListFormat from './ProductInListFormat';
import { primaryTextStyle } from '../Design/commonStyle';
import { Text, SafeAreaView, ScrollView } from 'react-native';
import { TuimProductExampleImage, TuimProductExampleImage2, TuimProductExampleImage3 } from '../Design/Imagens';

export default function ProductMyList({ navigation }) {

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

                <Text style={[primaryTextStyle, { marginVertical: 10 }]}>Meus Produtos</Text>

                <ProductInListFormat onPress={() => navigation.navigate('UserSettings')} >
                    <TuimProductExampleImage imgStyle={{ width: 88, height: 88 }} />
                </ProductInListFormat>

                <Line />

                <ProductInListFormat onPress={() => navigation.navigate('UserSettings')}>
                    <TuimProductExampleImage2 imgStyle={{ width: 88, height: 88 }} />
                </ProductInListFormat>

                <Line />

                <ProductInListFormat lessOpacityActive={true} onPress={() => navigation.navigate('UserSettings')}>
                    <TuimProductExampleImage3 imgStyle={{ width: 88, height: 88 }} />
                </ProductInListFormat>

                <Line />

                <ProductInListFormat lessOpacityActive={true} onPress={() => navigation.navigate('UserSettings')}>
                    <TuimProductExampleImage imgStyle={{ width: 88, height: 88 }} />
                </ProductInListFormat>

                <Line />

                <ProductInListFormat lessOpacityActive={true} onPress={() => navigation.navigate('UserSettings')}>
                    <TuimProductExampleImage2 imgStyle={{ width: 88, height: 88 }} />
                </ProductInListFormat>

                <Line />

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = {
    safeAreaContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    code: {
        fontSize: 15,
        color: '#B5B5B5',
        marginHorizontal: 15,
        fontFamily: 'Barlow-regular'
    }
}
