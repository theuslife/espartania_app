import React from 'react'
import AuthLogin from '../Auth/AuthLogin';
import { tuimHeader } from '../Design/commonStyle';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function LoggedOutNav({ isLogged, doLogin }) {
    return (
        <Stack.Navigator
            initialRouteName="AuthLogin"
        >
            <Stack.Screen
                name='AuthLogin'
                component={AuthLogin}
                doLogin={doLogin}
                // options={{
                //     ...tuimHeader,
                //     animationTypeForReplace: isLogged ? 'pop' : 'push'
                // }}
            />
        </Stack.Navigator>
    )
}
