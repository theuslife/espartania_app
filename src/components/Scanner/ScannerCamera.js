import { Camera } from 'expo-camera';
import resources from '../../config/resources';
import React, { useState, useEffect } from 'react';
import { TuimGreenIcone } from '../Design/Imagens';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { View, Text, Animated, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function ScannerCamera() {

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    const [animationLineHeight, setAnimationLineHeight] = useState(0)
    const [focusLineAnimation] = useState(
        new Animated.Value(0),
    )

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    const animateLine = () => {
        Animated.sequence([
            Animated.timing(focusLineAnimation, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: false
            }),
            Animated.timing(focusLineAnimation, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: false
            }),
        ]).start(animateLine)
    }

    useEffect(() => {

        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();

        animateLine()

    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.middle}>

            <View style={styles.scannerCameraContainer}>


                <TuimGreenIcone
                    style={styles.tuimGreenIconeOnLeftTop}
                    imgStyle={{ width: 45, height: 45, marginTop: 20 }}
                />

                <TuimGreenIcone
                    style={styles.tuimGreenIconeOnRightTop}
                    imgStyle={{ width: 70, height: 70, marginTop: 30 }}
                />

                <View
                    style={{ flex: 1, width: '100%', backgroundColor: 'black', }}
                    onLayout={e => setAnimationLineHeight(e.nativeEvent.layout.height)}
                >

                    <BarCodeScanner
                        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                        style={StyleSheet.absoluteFillObject}
                    />


                    {!scanned && (
                        <Animated.View
                            style={[
                                styles.animationLineStyle,
                                {
                                    transform: [
                                        {
                                            translateY: focusLineAnimation.interpolate({
                                                inputRange: [0, 1],
                                                outputRange: [0, animationLineHeight],
                                            }),
                                        },
                                    ],
                                },
                            ]}
                        />
                    )}

                    {scanned && (
                        <TouchableOpacity
                            onPress={() => setScanned(false)}
                            style={styles.rescanIconContainer}>
                            <Image
                                source={resources.rescan}
                                style={{ width: 50, height: 50 }}
                            />
                        </TouchableOpacity>
                    )}

                </View>
            </View>

        </View>
    )
}

const styles = {
    middle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    scannerCameraContainer: {
        width: '70%',
        height: 370,
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    tuimGreenIconeOnLeftTop: {
        top: -20,
        width: 60,
        left: -15,
        height: 60,
        zIndex: 99999,
        borderRadius: 30,
        position: 'absolute',
        backgroundColor: '#00C830',
        transform: [{ rotate: '-20deg' }],
    },
    animationLineStyle: {
        height: 2,
        width: '100%',
        backgroundColor: 'red',
    },
    tuimGreenIconeOnRightTop: {
        top: -15,
        right: -15,
        width: 90,
        height: 90,
        zIndex: 99999,
        borderRadius: 45,
        position: 'absolute',
        backgroundColor: '#00C830',
        transform: [{ rotate: '40deg' }],
    },
    rescanIconContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
}
