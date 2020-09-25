import React from 'react';
import LoggedOutNav from './LoggedOutNav';
import LoggedInNav from './LoggedInNav';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

export default function SwitchNav() {

  const { logged } = useSelector(state => state.login)

  return (
    <NavigationContainer>

      {!logged &&
        <LoggedOutNav isLogged={logged} />
      }

      {logged &&
        <LoggedInNav />
      }

    </NavigationContainer>
  );

}
