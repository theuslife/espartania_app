import { useDispatch } from 'react-redux';
import React, { useEffect, useRef } from 'react';
import { SafeAreaView, StatusBar, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform } from 'react-native';

export default function AuthLogin({ navigation }) {

    const dispatch = useDispatch();
    const forwardedInputRef = useRef(null);

    useEffect(() => {

        StatusBar.setBarStyle('light-content');

        return () => { }

    }, [])

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    {/* <View style={styles.headerMiddleContainer}>


                        <TuimGreenIcone
                            style={styles.tuimGreenIconeOnTop}
                            imgStyle={{ marginTop: 20, width: 52, height: 39 }}
                        />


                        <View style={styles.headerTitleContainer}>
                            <Text style={styles.commonStyleText}>Já tenho uma conta Tuim?</Text>
                        </View>


                        <View style={styles.middleInputAndButtonContainer}>

                            <PrimaryTextInput
                                autoCorrect={false}
                                returnKeyType='next'
                                placeholder='E-mail'
                                // onFocus={() => setCollapsed(true)}
                                onSubmitEditing={() => forwardedInputRef.current.focus()}
                            />

                            <PrimaryTextInput
                                placeholder='Senha'
                                // onFocus={() => {
                                //     setCollapsed(true)
                                // }}
                                forwardedInputRef={forwardedInputRef}
                            />

                            <TuimButton
                                tuimButtonText='Efetuar Login'
                                styleContainer={{ marginTop: 5 }}
                                onPress={() => dispatch(doLogin())}
                            />
                        </View>


                        <View style={styles.footerContainer}>
                            <Text style={styles.commonStyleText}>Sou novo por aqui!</Text>
                            <SecondaryTuimButton
                                styleContainer={{ marginTop: 10 }}
                                tuimButtonText='Criar uma nova conta'
                                onPress={() => navigation.navigate('AuthRegister')}
                            />
                        </View>


                    </View> */}

                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = {
    safeAreaContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    headerMiddleContainer: {
        flex: 8,
        backgroundColor: 'white'
    },
    headerTitleContainer: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    middleInputAndButtonContainer: {
        flex: 0.8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    footerContainer: {
        flex: 0.7,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    tuimGreenIconeOnTop: {
        top: 40,
        right: -5,
        width: 70,
        height: 70,
        zIndex: 990,
        elevation: 999,
        borderRadius: 45,
        position: 'absolute',
        backgroundColor: '#00C830',
        transform: [{ rotate: '30deg' }],
    },
    commonStyleText: {
        fontSize: 20,
        color: '#0A3251',
        textAlign: 'center',
        fontFamily: 'Barlow-bold'
    },
    inputLogin: {
        height: 40,
        padding: 10,
        width: '80%',
        elevation: 3,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        borderWidth: .2,
        marginVertical: 5,
        shadowColor: "#000",
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        backgroundColor: 'white',
    }
}
