import React from 'react'
import { View, Text } from 'react-native'
import Login from './Login';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Teste() {
    return (
        <Stack.Navigator
            initialRouteName="Welcome"
        >
            <Stack.Screen
                name='Login'
                component={Login}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}
