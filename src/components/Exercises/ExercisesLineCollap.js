import React from 'react'
import Colors from '../../config/colors';
import { Icon } from 'react-native-elements';
import { View, Text, TouchableOpacity } from 'react-native';

export default function ExercisesLineCollap({ title, textBeforeIcon = '', onPress, iconName, activeOpacity = 1 }) {
    return (
        <View
            style={{
                backgroundColor: 'white',
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,
                elevation: 3
            }}
        >
            <TouchableOpacity
                activeOpacity={activeOpacity}
                style={{
                    flexDirection: 'row',
                    width: '100%',
                    padding: 5,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                onPress={() => onPress()}
            >

                <View style={{ flex: 1, marginLeft: 5 }}>
                    <Text
                        translate={false}
                        style={{
                            color: Colors.secondaryRed,
                            fontSize: 16,
                            fontFamily: 'Cinzel-Medium'
                        }}
                    >{title}</Text>
                </View>

                <View style={{
                    flex: 1,
                    marginRight: 5,
                    alignItems: 'flex-end',
                }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text

                            translate={false}
                            style={{ color: Colors.secondaryRed, margin: 4, marginRight: 10 }}
                        >{textBeforeIcon}</Text>
                        <Icon
                            type={'font-awesome'}
                            name={iconName}
                            color={Colors.secondaryRed}
                            size={25}
                        />
                    </View>
                </View>

            </TouchableOpacity>
        </View>
    )
}

const styles = {

}
