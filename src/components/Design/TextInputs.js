import React from 'react'
import { TextInput, View, Text } from 'react-native'
import Colors from '../../config/colors';

export function PrimaryTextInput(props) {

    const { style = {}, forwardedInputRef, name = '' } = props;

    return (
        <View style={{ width: '100%', marginVertical: 10, }}>

            <Text style={{
                marginLeft: '10%',
                top: 5,
                fontSize: 14,
                zIndex: 99,
                color: Colors.primaryRed
            }}>{name}</Text>

            <View style={{
                width: '100%',
                alignItems: 'center',
            }}>
                <TextInput
                    {...props}
                    ref={forwardedInputRef}
                    style={[styles.commonTextInput, style]}
                >
                </TextInput>
            </View>

        </View>
    );
}

const styles = {
    commonTextInput: {
        height: 40,
        width: '80%',
        borderBottomWidth: 1,
        borderBottomColor: Colors.primaryRed
    }
}
