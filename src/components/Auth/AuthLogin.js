import Colors from '../../config/colors';
import AuthLoginFooter from './AuthLoginFooter';
import { EspartaniaLogo } from '../Design/Imagens';
import { useDispatch, useSelector } from 'react-redux';
import { PrimaryTextInput } from '../Design/TextInputs';
import { doLogin } from '../../store/actions/loginAction';
import React, { useEffect, useRef, useState } from 'react';
import { EspartaniaButton, SecondaryEspartaniaButton } from '../Design/Buttons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { View, Text, findNodeHandle, StatusBar, Keyboard, TouchableWithoutFeedback, Dimensions, Alert } from 'react-native';

const { width } = Dimensions.get('window');

export default function AuthLogin({ navigation }) {

    let scroll = useRef(null);
    const dispatch = useDispatch();
    let forwardedInputRef = useRef(null);
    const { visibleErrorMsg } = useSelector(state => state.login)

    useEffect(() => {

        StatusBar.setBarStyle('light-content');

        return () => { }

    }, [])

    useEffect(() => {

        if (visibleErrorMsg) {
            Alert.alert('Espartania', 'E-mail ou senha incorreta meu espartano(a)');
        }

        return () => { }

    }, [visibleErrorMsg])

    const _scrollToInput = (reactNode) => {
        scroll.props.scrollToFocusedInput(reactNode);
    }

    const imgStyle = () => {
        if (width <= 375) { // Iphone 6
            return { width: 180, height: 180, }
        }
        if (width < 300) { // Iphone 5
            return { width: 120, height: 120, }
        }

        if (width > 375) {
            return { width: 240, height: 240, }
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAwareScrollView
                ref={scroll}
                innerRef={ref => { scroll = ref }}
            >
                <View style={{ flex: 1 }}>

                    <View style={{ flex: 1 }}>
                        <View style={styles.imageContainer}>
                            <EspartaniaLogo imgStyle={imgStyle()} />
                        </View>
                        <PrimaryTextInput
                            name='Email'
                            autoCapitalize='none'
                            autoCorrect={false}
                            returnKeyType='next'
                            keyboardType='email-address'
                            placeholder='Email'
                            onFocus={(event) => {
                                _scrollToInput(findNodeHandle(event.target))
                            }}
                            onSubmitEditing={() => forwardedInputRef.current.focus()}
                        />
                        <PrimaryTextInput
                            name='Senha'
                            secureTextEntry={true}
                            keyboardType='default'
                            autoCapitalize='none'
                            autoCorrect={false}
                            placeholder='Senha'
                            forwardedInputRef={forwardedInputRef}
                        />
                        <Text style={{
                            textAlign: 'right',
                            marginRight: '10%',
                            color: Colors.primaryRed,
                            fontSize: 15,
                            marginVertical: 10
                        }}>
                            Esqueceu a senha?
                        </Text>

                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
                            <EspartaniaButton
                                espartaniaButtonText='Efetuar Login'
                                styleContainer={{ marginTop: 15 }}
                                onPress={() => {
                                    dispatch(doLogin('xtheus@gmail.com', 'espartania'))
                                }}
                            />
                            <SecondaryEspartaniaButton
                                espartaniaButtonText='Criar nova conta'
                                styleContainer={{ marginTop: 15 }}
                                onPress={() => {
                                    // dispatch(doLogin())
                                }}
                            />
                        </View>

                        <AuthLoginFooter />

                    </View>

                </View>
                {/* </ScrollView> */}
            </KeyboardAwareScrollView>
        </TouchableWithoutFeedback>
    )


}

const styles = {
    safeAreaContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    imageContainer: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomEndRadius: 40,
        borderBottomStartRadius: 40,
        backgroundColor: Colors.primaryRed,
        marginBottom: 50,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
}
