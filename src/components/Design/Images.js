export function EspartaniaTransparentLogo({ imgStyle }) {
    return (
        <View style={styles.espartaniaTransparentLogo} >
            <View style={styles.middleFlex}>
                <Image
                    resizeMode='contain'
                    source={primaryLogo}
                    style={[{ width: 194, height: 85 }, imgStyle]}
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
    espartaniaTransparentLogo: {
        height: 86,
        width: 194,
        backgroundColor: 'white',
    },
}