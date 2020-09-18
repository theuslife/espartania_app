import React from 'react';
import { TuimButton } from '../Design/Buttons';
import ProductResume from '../Product/ProductResume';
import { TuimProductExampleImage } from '../Design/Imagens';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { IconNumberAndText } from '../Design/MultipleStyleComponents';
import { secondaryTextStyle, primaryTextStyle } from '../Design/commonStyle';

export default function LockerReturn({ navigation }) {
    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

                <View style={{ alignItems: 'center' }}>
                    <TuimProductExampleImage />
                </View>

                <ProductResume inRow={true} withTextResume={false} />

                <View style={styles.middleContainer}>
                    <Text style={primaryTextStyle}>Antes de Devolver</Text>
                    <IconNumberAndText iconNumber='1'>
                        <Text style={secondaryTextStyle}>
                            Certifique-se que o produto está limpo, pronto para ser
                            utilizado pelo próximo usuário;
                        </Text>
                    </IconNumberAndText>
                    <IconNumberAndText iconNumber='2'>
                        <Text style={secondaryTextStyle}>
                            Verifique se você separou todas as peças e assessórios;
                        </Text>
                    </IconNumberAndText>
                    <IconNumberAndText iconNumber='3'>
                        <Text style={secondaryTextStyle}>
                            Certifique-se que você está na frente do locker;
                        </Text>
                    </IconNumberAndText>
                </View>

                <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                    <TuimButton
                        tuimButtonText='Destravar Locker'
                        onPress={() => navigation.navigate('ProductDetail')}
                    />
                </View>


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
        marginHorizontal: 15,
        fontSize: 15,
        color: '#B5B5B5',
        fontFamily: 'Barlow-regular'
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    middleContainer: {
        marginVertical: 40,
        alignItems: 'center',
        justifyContent: 'center',
    }
}
