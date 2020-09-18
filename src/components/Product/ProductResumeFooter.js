import React from 'react'
import { Text } from 'react-native'

export default function ProductResumeFooter() {
    return (
        <>
            <Text style={styles.textResumeFooterHeader}>Condições Gerais</Text>
            <Text style={styles.textResumeHeader}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut velit quis mauris iaculis 
                condimentum non euismod risus. In pellentesque id erat eget rutrum. Aliquam eu pretium dui, 
                a rhoncus augue. Vestibulum sit amet scelerisque neque. Aliquam sed est felis. Mauris in 
                eleifend ante. Etiam bibendum vehicula nulla id lobortis.
            </Text>
        </>
    )
}

const styles = {
    textResumeFooterHeader: {
        fontSize: 20,
        color: '#494949',
        marginVertical: 10,
        marginHorizontal: 15,
        fontFamily: 'Barlow-bold'
    },
    textResumeHeader: {
        fontSize: 16,
        color: '#494949',
        marginHorizontal: 15,
        textAlign: 'justify',
        fontFamily: 'Barlow-regular'
    }
}
