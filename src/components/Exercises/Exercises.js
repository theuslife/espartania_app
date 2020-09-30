import Colors from '../../config/colors';
import ExercisesCard from './ExercisesCard';
import resources from '../../config/resources';
import React, { useEffect, useState } from 'react';
import Collapsible from 'react-native-collapsible';
import { blackShadow } from '../Design/commonStyle';
import ExercisesLineCollap from './ExercisesLineCollap';
import ExercisesCardVertical from './ExercisesCardVertical';
import { View, SafeAreaView, ScrollView, Text, Image } from 'react-native';

export default function Exercises() {

    const [isCollapsed, setIsCollpased] = useState(false);
    const [iconName, setIconName] = useState('caret-right');
    const [textBeforeIcon, setTextBeforeIcon] = useState('Ver mais');

    useEffect(() => {

        return () => { }

    }, [])

    useEffect(() => {

        if (isCollapsed) {
            setIconName('caret-down')
            setTextBeforeIcon('')
        }
        else {
            setIconName('caret-right')
            setTextBeforeIcon('Ver mais')
        }

        return () => { }

    }, [isCollapsed])

    const setCollapsed = () => {
        setIsCollpased(!isCollapsed);

    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.neve }}>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}
            >

                {/* <View style={{ height: 320, }}> */}
                    <View style={[blackShadow, {
                        alignItems: 'center',
                        width: 120,
                        height: 170,
                        marginTop: 10,
                        marginHorizontal: 10,
                        borderRadius: 10,
                        backgroundColor: 'white'
                    }]}>
                        <View style={styles.firstContainerImg}>
                            <View style={styles.secondContainerImg}>
                                <Image
                                    source={resources.pull_up_icon}
                                    style={[{ width: 60, height: 60, marginTop: 20 }]}
                                />
                            </View>
                        </View>

                        <Text style={styles.title}>Barra fixa</Text>
                    </View>

                    <View style={styles.horizontalScrollViewContainer}>
                        <ScrollView
                            horizontal contentContainerStyle={{ flexGrow: 1 }}
                            showsHorizontalScrollIndicator={false}
                        >
                            <View style={[blackShadow, styles.horizontalCardsContainer]}>
                                <Text style={styles.textHorizontalCard}>
                                    Primeira Barra Fixa, Muscle Up, Front-Lever e muito mais você encontra neste tópico
                                </Text>
                            </View>

                            <View style={[blackShadow, styles.horizontalCardsContainer]}>
                                <Text style={styles.textHorizontalCard}>
                                    Iniciante, intermediário e avançado são as três categórias
                                </Text>
                            </View>

                            <View style={[blackShadow, styles.horizontalCardsContainer]}>
                                <Text style={styles.textHorizontalCard}>
                                    Selecione uma categória e um exercício para ter acesso a um vídeo autoexplicativo
                                    e ainda dicas valiosas
                                </Text>
                            </View>

                        </ScrollView>
                    </View>


                {/* </View> */}

                <View>

                    <ExercisesCardVertical
                        activeOpacity={1}
                        isCollapsed={isCollapsed}
                        titleLine={`Iniciantes`}
                        iconName={iconName}
                        // textBeforeIcon={textBeforeIcon}
                        setCollapsed={() => setCollapsed()}
                    />
                    <ExercisesCardVertical
                        activeOpacity={1}
                        // isCollapsed={isCollapsed}
                        titleLine={`Intermediário`}
                        iconName={iconName}
                        // textBeforeIcon={textBeforeIcon}
                        setCollapsed={() => setCollapsed()}
                    />


                    <ExercisesLineCollap
                        activeOpacity={1}
                        title={`Avançado`}
                        iconName={iconName}
                        // textBeforeIcon={textBeforeIcon}
                        onPress={() => setCollapsed()}
                    />

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = {
    horizontalScrollViewContainer: {
        // height: 170,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.neve,
        // backgroundColor: '#fff',
    },
    horizontalCardsContainer: {
        width: 300,
        height: 120,
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        // backgroundColor: Colors.neve,
        justifyContent: 'center',
    },
    textHorizontalCard: {
        fontSize: 14,
        color: 'black',
        textAlign: 'center',
        marginHorizontal: 10,
        fontFamily: 'Cinzel-Medium',
    },
    title: {
        fontSize: 20,
        color: 'black',
        marginVertical: 10,
        fontFamily: 'Cinzel-Medium',
        color: Colors.secondaryRed,
    },
    firstContainerImg: {
        marginTop: 20,
        width: 95,
        height: 95,
        borderRadius: 47.5,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        elevation: 3,
        shadowRadius: 2.22,
        shadowColor: "#000",
        shadowOpacity: 0.22,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.secondaryRed,
    },
    secondContainerImg: {
        height: 90,
        width: 90,
        borderRadius: 45,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
}
