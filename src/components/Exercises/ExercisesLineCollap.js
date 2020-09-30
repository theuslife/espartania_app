import React from 'react'
import Colors from '../../config/colors';
import { Icon } from 'react-native-elements';
import { View, Text, TouchableOpacity } from 'react-native';

export default function ExercisesLineCollap(props) {

    const { title, textBeforeIcon = '', onPress, iconName, activeOpacity = 1 } = props;

    return (
        <View
            style={styles.lineCollapContainer}
        >
            <TouchableOpacity
                activeOpacity={activeOpacity}
                style={styles.buttonContainer}
                onPress={() => onPress()}
            >

                <View style={{ flex: 3, flexDirection: 'row', alignItems: 'center', marginLeft: 5 }}>
                    <Text
                        translate={false}
                        style={styles.titleText}
                    >{title}
                    </Text>
                    <Text style={{
                        marginLeft: 5,
                        fontSize: 14,
                        color: Colors.secondaryRed
                    }}>(67 Exercícios)</Text>
                </View>

                <View style={styles.iconContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text
                            translate={false}
                            style={styles.iconText}
                        >{textBeforeIcon}</Text>
                        <Icon
                            type={'font-awesome'}
                            name={iconName}
                            // color={Colors.secondaryRed}
                            size={25}
                        />
                    </View>
                </View>

            </TouchableOpacity>
        </View>
    )
}

const styles = {
    lineCollapContainer: {
        shadowOffset: {
            width: 0,
            height: 1,
        },
        height: 40,
        elevation: 3,
        shadowRadius: 2.22,
        shadowColor: "#000",
        shadowOpacity: 0.22,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    buttonContainer: {
        padding: 5,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    titleText: {
        fontSize: 16,
        fontFamily: 'Cinzel-Medium',
        // color: Colors.secondaryRed,
    },
    iconContainer: {
        flex: 1,
        marginRight: 5,
        alignItems: 'flex-end',
    },
    iconText: {
        margin: 4,
        marginRight: 10,
        // color: Colors.secondaryRed,
    }
}
