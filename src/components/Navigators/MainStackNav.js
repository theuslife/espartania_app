import React from 'react'
import Premium from '../Premium/PremiumCoach';
import Dashboard from '../Dashboard/Dashboard';
import Exercises from '../Exercises/Exercises';
import { espartaniaHeader } from '../Design/commonStyle';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function MainStackNav(props) {

    let initialRouteName = 'Dashboard';

    if ((props.route.name) == 'Premium') {
        initialRouteName = 'Premium';
    }

    return (
        <Stack.Navigator
            initialRouteName={initialRouteName}
        >
            <Stack.Screen
                name='Dashboard'
                component={Dashboard}
                options={{
                    // headerShown: false,
                    ...espartaniaHeader,
                }}
            />
            <Stack.Screen
                name='Exercises'
                component={Exercises}
                options={{
                    // headerShown: false,
                    ...espartaniaHeader,
                }}
            />
            <Stack.Screen
                name='Premium'
                component={Premium}
                options={{
                    ...espartaniaHeader,
                }}
            />
        </Stack.Navigator>
    )
}
