import React from 'react'
import Product from '../Product/Product';
import { createDrawerNavigator } from '@react-navigation/drawer';
import PaymentCardRegister from '../Payment/PaymentCardRegister';

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
    return (
        <Drawer.Navigator initialRouteName="Product">
            <Drawer.Screen
                name='Product'
                component={Product}
            />
            <Drawer.Screen
                name='PaymentCardRegister'
                component={PaymentCardRegister}
            />
        </Drawer.Navigator>
    )
}

