import React from 'react';
import Colors from '../../config/colors';
import { useSelector } from 'react-redux';
import MainStackNav from './MainStackNav';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function LoggedInNav() {

    const { logged } = useSelector(state => state.login)

    return (
        <Tab.Navigator
            initialRouteName="Dashboard"
            tabBarOptions={{
                activeTintColor: Colors.primaryRed,
                inactiveTintColor: 'gray'
            }}
        >
            <Tab.Screen
                name='Dashboard'
                component={MainStackNav}
                options={{
                    tabBarLabel: 'Início',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={20} />
                    ),
                }}
            />
            <Tab.Screen
                name='Explorar'
                component={MainStackNav}
                options={{
                    tabBarLabel: 'Explorar',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="explore" type='materialicons-' color={color} size={20} />
                    ),
                }}
            />
            <Tab.Screen
                name='Premium'
                component={MainStackNav}
                options={{
                    tabBarLabel: 'Premium',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="trophy" color={color} size={20} />
                    ),
                }}
            />
            <Tab.Screen
                name='Comunidade'
                component={MainStackNav}
                options={{
                    tabBarLabel: 'Comunidade',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="network" type='entypo' color={color} size={20} />
                    ),
                }}
            />
            <Tab.Screen
                name='Artigos'
                component={MainStackNav}
                options={{
                    tabBarLabel: 'Artigos',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="cast-education" type='material-community' color={color} size={20} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}
