import store from './src/store'
import { Provider } from 'react-redux'
import React, { useEffect, useState } from 'react';
import { checkExpoServerUpdate } from './src/config/updates'
import SwitchNav from './src/components/Navigators/SwitchNav';
import { getNotificationsParams } from './src/config/notifications';

export default App = () => {

  useEffect(() => {

    //Check new updates
    checkExpoServerUpdate();

    //Deal with Push Notifications
    if (!__DEV__)
      getNotificationsParams()

    return () => { }

  }, [])

    return (
      <Provider store={store} >
        <SwitchNav />
      </Provider>
    );

}


