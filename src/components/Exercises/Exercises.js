import Colors from '../../config/colors';
import ExercisesCard from './ExercisesCard';
import resources from '../../config/resources';
import React, { useEffect, useState } from 'react';
import Collapsible from 'react-native-collapsible';
import ExercisesLineCollap from './ExercisesLineCollap';
import { View, SafeAreaView, ScrollView, Text, Image } from 'react-native';
import { blackShadow } from '../Design/commonStyle';

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
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

                <View style={{ height: 300, alignItems: 'center', }}>
                    <View style={styles.firstContainerImg}>
                        <View style={styles.secondContainerImg}>
                            <Image
                                source={resources.pull_up_icon}
                                style={[{ width: 60, height: 60, marginTop: 20 }]}
                            />
                        </View>
                    </View>

                    <Text style={styles.title}>Barra fixa</Text>

                    <View style={[blackShadow, {
                        width: '90%',
                        marginVertical: 10,
                        height: 120,
                        borderRadius: 10,
                        backgroundColor: '#FFF',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }]}>
                        <Text style={{ fontFamily: 'Cinzel-Medium', textAlign: 'center', marginHorizontal: 10}}>
                            Os exercícios são medidos por níveis de dificuldade:
                            Iniciante, Intermediário e Avançado
                            </Text>
                        {/* <View style={{
                            height: 60,
                            width: 60,
                            borderRadius: 30,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'black',
                        }}></View> */}
                    </View>

                </View>

                <View>

                    <ExercisesLineCollap
                        activeOpacity={1}
                        title={`Iniciantes`}
                        iconName={iconName}
                        textBeforeIcon={textBeforeIcon}
                        onPress={() => setCollapsed()}
                    />

                    <Collapsible collapsed={isCollapsed}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>

                            <ExercisesCard />

                            <ExercisesCard />

                        </View>
                    </Collapsible>

                    <Collapsible collapsed={!isCollapsed}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <ExercisesCard />
                            <ExercisesCard />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <ExercisesCard />
                            <ExercisesCard />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <ExercisesCard />
                            <ExercisesCard />
                        </View>
                    </Collapsible>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = {
    containerCard: {
        height: 170,
        elevation: 3,
        width: '45%',
        borderRadius: 12.5,
        marginVertical: 10,
        marginHorizontal: 5,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
    },
    secondContainerImg: {
        height: 90,
        width: 90,
        borderRadius: 45,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    title: {
        marginTop: 10,
        fontSize: 20,
        fontFamily: 'Cinzel-Medium',
        color: Colors.secondaryRed
    },
    firstContainerImg: {
        marginTop: 20,
        width: 100,
        height: 100,
        borderRadius: 50,
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
    bottomContainerCard: {
        flex: 1,
        height: 30,
        width: 100,
        flexDirection: 'row',
        alignItems: 'center',
        borderTopRightRadius: 5,
        justifyContent: 'center',
        borderTopStartRadius: 5,
        borderBottomEndRadius: 5,
        borderBottomLeftRadius: 5,
        backgroundColor: Colors.secondaryRed,
    }
}
