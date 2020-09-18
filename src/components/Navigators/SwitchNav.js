import React from 'react';
import LoggedOutNav from './LoggedOutNav';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';

export default function SwitchNav() {

  const { logged } = useSelector(state => state.login)

  return (
    <NavigationContainer>

      {!logged &&
        <LoggedOutNav isLogged={logged} />
      }

      {logged && 
        <View></View>
      }
{/* 
      {logged &&
        <LoggedInNav />
      } */}

    </NavigationContainer>
  );

}
