import React from 'react'
import Colors from '../../config/colors';
import { TextInput, View, Text } from 'react-native'
import { Icon } from 'react-native-elements';

export function PrimaryTextInput(props) {

    const { style = {}, forwardedInputRef, name = '', iconName, iconType } = props;

    return (
        <View style={{ width: '100%', marginVertical: 10, }}>

            <Text style={{
                marginLeft: '10%',
                top: 20,
                fontSize: 14,
                zIndex: 99,
                color: Colors.primaryRed
            }}>{name}</Text>

            <View style={{
                width: '100%',
                alignItems: 'center',
            }}>
                <View style={{ width: '80%', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end', top: 30}}>
                    <Icon name={iconName} type={iconType} color={'gray'} />
                </View>
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
