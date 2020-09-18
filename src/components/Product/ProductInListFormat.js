import React from 'react'
import { DoubleTextColor } from '../Design/Texts';
import { View, Text, TouchableOpacity } from 'react-native';

export default function ProductInListFormat(props) {

    const { children, lessOpacityActive = false, onPress } = props;

    return (
        <>

            {!lessOpacityActive &&
                <TouchableOpacity
                    style={styles.container}
                    onPress={() => onPress()}
                >
                    {children}
                    <View style={{ flexDirection: 'column' }}>
                        <DoubleTextColor
                            textOneStyle={{ fontSize: 20 }}
                            textTwoStyle={{ fontSize: 20 }}
                            textOne='Batedeira'
                            textTwo='KitchenAid Artisan'
                        />
                        <Text style={styles.dateText}>31/07/2020</Text>
                        <Text style={styles.moneyText}>R$ 30,90</Text>
                    </View>
                    <View style={styles.accordionContainer}>
                        <Text style={{ fontSize: 40, color: '#D8D8D8' }}>></Text>
                    </View>
                </TouchableOpacity>
            }

            {lessOpacityActive &&
                <View
                    style={[styles.container, { opacity: 0.4 }]}
                    onPress={() => { }}
                >
                    {children}
                    <View style={{ flexDirection: 'column' }}>
                        <DoubleTextColor
                            textOneStyle={{ fontSize: 20 }}
                            textTwoStyle={{ fontSize: 20 }}
                            textOne='Batedeira'
                            textTwo='KitchenAid Artisan'
                        />
                        <Text style={styles.dateText}>31/07/2020</Text>
                        <Text style={styles.moneyText}>R$ 30,90</Text>
                    </View>
                    <View style={styles.accordionContainer}>
                        <Text style={{ fontSize: 40, color: '#D8D8D8' }}>></Text>
                    </View>
                </View>
            }
        </>

    )
}

const styles = {
    container: {
        marginTop: 10,
        flexDirection: 'row',
    },
    dateText: {
        marginLeft: 15,
        color: '#717171',
        marginVertical: 2
    },
    moneyText: {
        fontSize: 18,
        color: 'gray',
        marginLeft: 15,
    },
    accordionContainer: {
        flex: 1,
        marginRight: 5,
        alignItems: 'flex-end',
        justifyContent: 'center',
    }

}
