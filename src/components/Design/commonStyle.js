import * as React from 'react';
import { EspartanialogoOnTop } from "./Imagens";
import { Avatar } from './Avatares';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import Colors from '../../config/colors';

export const espartaniaHeader = {
    headerShown: true,
    headerBackTitleVisible: false,
    headerTitle: '',
    headerTitleAlign: 'center',
    headerLeft: (props) => (<EspartanialogoOnTop propsNav={props} />),
    headerRight: (props) => (
        <View style={{ flexDirection: 'row' , justifyContent: 'center', alignItems: 'center'}}>
            <View style={{ marginRight: 25 }}>
                <Icon name="filter" type='font-awesome' color={'gray'} size={20} />
            </View>
            <View style={{ marginRight: 25 }}>
                <Icon name="bell" type='font-awesome' color={'gray'} size={20} />
            </View>
            <Avatar />
        </View>
    ),
    headerStyle: {
        backgroundColor: '#FFF',
        height: 90,
    },
    headerLeftContainerStyle: {
        margin: 5
    }
}

export const primaryBackgroundRed = {
    backgroundColor: '#FFF'
}

export const primaryTextStyle = {
    fontSize: 24,
    color: '#0A3251',
    textAlign: 'center',
    fontFamily: 'Barlow-bold'
}

export const secondaryTextStyle = {
    fontSize: 18,
    color: '#2C2C2C',
    marginHorizontal: 5,
}

export default espartaniaHeader;
