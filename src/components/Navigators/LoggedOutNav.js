import React from 'react'
import AuthLogin from '../Auth/AuthLogin';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function LoggedOutNav({ isLogged }) {
    return (
        <Stack.Navigator
            initialRouteName="AuthLogin"
        >
            <Stack.Screen
                name='AuthLogin'
                component={AuthLogin}
                options={{
                    headerShown: false,
                    animationTypeForReplace: isLogged ? 'pop' : 'push'
                }}
            />
            {/* <Stack.Screen
                name='AuthRegister'
                component={AuthRegister}
                options={{
                    ...tuimHeader,
                    animationTypeForReplace: isLogged ? 'pop' : 'push'
                }}
            /> */}
        </Stack.Navigator>
    )
}
