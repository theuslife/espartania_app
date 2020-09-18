import React from 'react'
import { View, Text } from 'react-native'
import { DoubleTextColor, TextIconInLeft } from '../Design/Texts';

export default function ProductResume(props) {

    const { inRow = false, withTextResume = true } = props;

    return (
        <View>

            <DoubleTextColor textOne='Batedeira' textTwo='KitchenAid Artisan' />

            {!inRow &&
                <>
                    <Text style={styles.code}>Código 654823-P</Text>

                    <TextIconInLeft
                        text='110v'
                        nameIcon='energy'
                        size={16} color={'black'}
                        typeIcon='simple-line-icon'
                    />
                </>
            }

            {inRow &&
                <View style={styles.rowContainer}>
                    <View style={{ flex: 10, }}>
                        <Text style={styles.code}>Código 654823-P</Text>
                    </View>
                    <View style={{ flex: 2, marginRight: 5 }}>
                        <TextIconInLeft
                            text='110v'
                            iconContainer={{ marginVertical: 0 }}
                            nameIcon='energy'
                            size={16} color={'black'}
                            typeIcon='simple-line-icon'
                        />
                    </View>
                </View>
            }

            {withTextResume &&
                <Text style={styles.resume}>
                    Batedeira planetária 8 velocidades. Ideal para massa de pães, bolos e confeitaria em geral.
            </Text>
            }

        </View>
    )
}

const styles = {
    code: {
        marginHorizontal: 15,
        fontSize: 15,
        color: '#B5B5B5',
        fontFamily: 'Barlow-regular'
    },
    resume: {
        marginHorizontal: 15,
        fontSize: 20,
        color: '#2C2C2C',
        textAlign: 'justify',
        fontFamily: 'Barlow-regular'
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
}
