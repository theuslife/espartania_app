import React from 'react'
import { View, Image } from 'react-native'
import resources from '../../config/resources'
const { logo, logo2, logo_transparent, logo_transparent_2, background, headerLogo2 } = resources

export function EspartanialogoOnTop({ imgStyle }) {
    return (
        <View style={styles.espartanialogoOnTop} >
            <View style={styles.middleFlex}>
                <Image
                    source={headerLogo2}
                    style={[{ width: 120, height: 35 }, imgStyle]}
                />
            </View>
        </View>
    )
}

export function EspartaniaLogo({ imgStyle }) {
    return (
        <Image
            source={logo2}
            style={[{ width: 120, height: 120, marginTop: 20 }, imgStyle]}
        />
    )
}

export function EspartaniaImageBackground({ imgStyle }) {
    return (
        <View style={styles.espartanialogoOnTop} >
            <View style={styles.middleFlex}>
                <Image
                    source={background}
                    style={[{ width: 1000, height: 1000 }, imgStyle]}
                />
            </View>
        </View>
    )
}

const styles = {
    middleFlex: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    espartanialogoOnTop: {
        height: 35,
        paddingVertical: 5,
        width: 120,
        backgroundColor: '#FFF',
    },
}
