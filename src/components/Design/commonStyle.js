import * as React from 'react';
import { Avatar } from './Avatares';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import { EspartanialogoOnTop } from "./Imagens";

export const espartaniaHeader = {
    headerTitle: '',
    headerShown: true,
    headerTitleAlign: 'center',
    headerBackTitleVisible: false,
    headerLeft: (props) => (<EspartanialogoOnTop propsNav={props} />),
    headerRight: (props) => (
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            {/* <View style={{ marginRight: 25 }}>
                <Icon name="filter" type='font-awesome' color={'gray'} size={20} />
            </View> */}
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

export const blackShadow = {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    elevation: 3,
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
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
