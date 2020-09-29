import React from 'react'
import { View, Image } from 'react-native'
import resources from '../../config/resources'
const { logo2, logo_transparent_3, background } = resources

export function EspartanialogoOnTop({ imgStyle }) {
    return (
        <Image
            source={logo_transparent_3}
            style={[{ width: 110, height: 30 }, imgStyle]}
        />
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
    },
    espartanialogoOnTop: {
        height: 30,
        width: 100,
        marginRight: 50,
    },
}
