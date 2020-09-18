import React from 'react'
import ProductResume from './ProductResume';
import { Icon } from 'react-native-elements';
import { TuimButton } from '../Design/Buttons';
import { TuimProductExampleImage } from '../Design/Imagens';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import { primaryTextStyle, secondaryTextStyle } from '../Design/commonStyle';

export default function ProductDetail({ navigation }) {
    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ alignItems: 'center' }}>
                    <TuimProductExampleImage />
                </View>
                <ProductResume inRow={true} />

                <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 15, marginTop: 15 }}>
                    <Icon
                        name={'book'}
                        type={'octicon'}
                    />
                    <Text style={[primaryTextStyle, {
                        fontSize: 14,
                        color: '#094047',
                        fontWeight: '600',
                        fontFamily: 'Barlow-bold',
                        marginHorizontal: 5
                    }]}>Ver Manual de Uso</Text>
                </View>

                <View style={{ marginTop: 10, flexDirection: 'row', marginHorizontal: 15 }}>
                    <Text style={[primaryTextStyle, { fontSize: 14 }]}>
                        Data de Retirada: 01/07/2020
                    </Text>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                    <Text style={[primaryTextStyle, { fontSize: 35, color: 'gray' }]}>R$ 30,90</Text>
                </View>

                <View style={{ marginTop: 30, marginHorizontal: 15, alignItems: 'flex-start' }}>
                    <Text style={primaryTextStyle}>Histórico de cobranças</Text>
                    <Text style={[secondaryTextStyle, { marginHorizontal: 0, marginVertical: 5 }]}>
                        01/07/2020 - R$ 8,90
                    </Text>
                    <Text style={[secondaryTextStyle, { marginHorizontal: 0, marginVertical: 5 }]}>
                        04/07/2020 - R$ 5,40
                    </Text>
                    <Text style={[secondaryTextStyle, { marginHorizontal: 0, marginVertical: 5 }]}>
                        10/07/2020 - R$ 16,40
                    </Text>
                </View>

                <View style={{ height: 100 }}></View>

            </ScrollView>
            <TuimButton
                tuimButtonText='Devolver Produto'
                styleContainer={styles.tuimButton}
                onPress={() => navigation.navigate('ProductMyList')}
            />
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
    },
    tuimButton: {
        bottom: 20,
        zIndex: 99,
        alignSelf: 'center',
        position: 'absolute',
    }
}