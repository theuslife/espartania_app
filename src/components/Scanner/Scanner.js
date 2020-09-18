import React, { useEffect } from 'react';
import ScannerTopMsg from './ScannerTopMsg';
import ScannerCamera from './ScannerCamera';
import ScannerFooterArea from './ScannerFooterArea';
import { View, StatusBar, Platform, KeyboardAvoidingView, Animated, TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function Scanner({ navigation: { navigate } }) {

    useEffect(() => {

        StatusBar.setBarStyle('light-content');

        return () => { }

    }, [])

    return (
        <>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior={Platform.OS == "ios" ? "padding" : "height"}
                >
                    <View style={styles.scannerContainer}>

                        <>
                            <ScannerTopMsg />

                            <Animated.View style={{ flex: 5 }}>
                                <ScannerCamera />
                            </Animated.View>


                            <View style={styles.footerContainer}>
                                <ScannerFooterArea
                                    navigate={navigate}
                                />
                            </View>
                        </>

                    </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback >
        </>
    )
}

const styles = {
    scannerContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    middleFlex: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    footerContainer: {
        flex: 1.9,
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
    }
}
