import React from 'react'
import ProductResume from './ProductResume';
import { View, ScrollView } from 'react-native'
import { TuimButton } from '../Design/Buttons';
import ProductCardsPrices from './ProductCardsPrices';
import ProductResumeFooter from './ProductResumeFooter';
import { TuimProductExampleImage } from '../Design/Imagens';

export default function Product({ navigation: { navigate } }) {
    return (
        <>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

                <View style={styles.productContainer}>

                    <View style={styles.tuimProductExampleImageContainer}>

                        <TuimProductExampleImage />

                    </View>

                    <View style={styles.middleContainer}>

                        <ProductResume />

                        <ProductCardsPrices />

                    </View>

                    <View style={{ flex: 9, backgroundColor: 'white' }}>
                        <ProductResumeFooter />
                    </View>

                    <View style={styles.safeAreaScrollViewFooter}></View>

                </View>
            </ScrollView>
            <TuimButton
                tuimButtonText='Alugar'
                styleContainer={styles.tuimButton}
                onPress={() => navigate('PaymentCardRegister')}
            />
        </>
    )
}

const styles = {
    productContainer: {
        flex: 1,
    },
    middleContainer: {
        flex: 0.8,
        backgroundColor: 'white'
    },
    tuimProductExampleImageContainer: {
        flex: 0.1,
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    safeAreaScrollViewFooter: {
        height: 100,
        backgroundColor: '#FFF'
    },
    tuimButton: {
        bottom: 20,
        zIndex: 99,
        alignSelf: 'center',
        position: 'absolute',
    }
}

