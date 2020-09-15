import React from 'react';
// import LoggedInNav from './LoggedInNav';
import LoggedOutNav from './LoggedOutNav';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

export default function SwitchNav() {

  const { logged } = useSelector(state => state.login)

  return (
    <NavigationContainer>

      {!logged &&
        <LoggedOutNav />
      }

      {/* {logged &&
        <LoggedInNav />
      } */}

    </NavigationContainer>
  );

}
