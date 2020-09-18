import * as React from 'react';
import { Icon } from "react-native-elements";
import { EspartanialogoOnTop } from "./Imagens";

export const espartaniaHeader = {
    headerShown: true,
    headerBackTitleVisible: false,
    headerBackImage: props => <Icon name='menu' type='entypo' size={40} color={'white'} {...props} />,
    headerTitle: props => <EspartanialogoOnTop {...props} />,
    headerTitleAlign: 'center',
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
