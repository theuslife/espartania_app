import React, { useState, useEffect } from 'react';
import { TuimGreenIcone } from '../Design/Imagens';
import { View, Text, TouchableOpacity } from 'react-native';

export default function ProductCardsPrices() {

    const [selectedCard, setSelectedCard] = useState(1);

    useEffect(() => {
        return () => { }
    }, [])

    const changeSelectedCard = (newCard) => setSelectedCard(newCard);

    return (
        <View style={styles.productCardsPricesContainer}>

            <TouchableOpacity
                style={selectedCard == 1 ? styles.selectedCard : styles.unSelectedCard}
                onPress={() => changeSelectedCard(1)}
            >
                {selectedCard == 1 &&
                    <TuimGreenIcone
                        style={styles.tuimGreenIconeOnTop}
                        imgStyle={styles.tuimImgIconeOnTopStyle}
                    />
                }
                <Text style={selectedCard == 1 ? styles.textSelectCard : styles.textUnselectedCard}>8,90</Text>
                <Text style={selectedCard == 1 ? styles.textSelectCard : styles.textUnselectedCard}>R$/dia</Text>

            </TouchableOpacity>

            <TouchableOpacity
                style={selectedCard == 2 ? styles.selectedCard : styles.unSelectedCard}
                onPress={() => changeSelectedCard(2)}
            >
                {selectedCard == 2 &&
                    <TuimGreenIcone
                        style={styles.tuimGreenIconeOnTop}
                        imgStyle={styles.tuimImgIconeOnTopStyle}
                    />
                }
                <Text style={selectedCard == 2 ? styles.textSelectCard : styles.textUnselectedCard}>17,20</Text>
                <Text style={selectedCard == 2 ? styles.textSelectCard : styles.textUnselectedCard}>R$/3 dias</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={selectedCard == 3 ? styles.selectedCard : styles.unSelectedCard}
                onPress={() => changeSelectedCard(3)}
            >
                {selectedCard == 3 &&
                    <TuimGreenIcone
                        style={styles.tuimGreenIconeOnTop}
                        imgStyle={styles.tuimImgIconeOnTopStyle}
                    />
                }
                <Text style={selectedCard == 3 ? styles.textSelectCard : styles.textUnselectedCard}>25,00</Text>
                <Text style={selectedCard == 3 ? styles.textSelectCard : styles.textUnselectedCard}>R$/semana</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = {
    selectedCard: {
        width: 100,
        height: 88,
        borderWidth: 1.4,
        borderRadius: 10,
        marginHorizontal: 5,
        alignItems: 'center',
        borderColor: '#094947',
        justifyContent: 'center',
        backgroundColor: '#094047',
    },
    textSelectCard: {
        fontSize: 18,
        color: 'white',
        marginVertical: 2,
    },
    unSelectedCard: {
        width: 100,
        height: 88,
        borderRadius: 10,
        borderWidth: 1.4,
        marginHorizontal: 5,
        alignItems: 'center',
        borderColor: '#094947',
        backgroundColor: '#FFF',
        justifyContent: 'center',
    },
    textUnselectedCard: {
        fontSize: 18,
        color: '#094047',
        marginVertical: 2,
    },
    productCardsPricesContainer: {
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    tuimGreenIconeOnTop: {
        top: -20,
        right: -10,
        width: 33,
        height: 33,
        borderRadius: 16.5,
        position: 'absolute',
        backgroundColor: '#00C830',
        transform: [{ rotate: '20deg' }],
    },
    tuimImgIconeOnTopStyle: {
        width: 24,
        height: 18,
        marginTop: 5
    },
}
