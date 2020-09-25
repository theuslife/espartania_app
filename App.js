import store from './src/store'
import { AppLoading } from 'expo';
import { Provider } from 'react-redux'
import { fetchFonts } from './src/config/fonts';
import React, { useEffect, useState } from 'react';
import { checkExpoServerUpdate } from './src/config/updates'
import SwitchNav from './src/components/Navigators/SwitchNav';
import { getNotificationsParams } from './src/config/notifications';

export default App = () => {

  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {

    //Check new updates
    checkExpoServerUpdate();

    //Deal with Push Notifications
    if (!__DEV__)
      getNotificationsParams()

    return () => { }

  }, [])


  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      >
      </AppLoading>
    )
  }

  if (fontLoaded) {
    return (
      <Provider store={store} >
        <SwitchNav />
      </Provider>
    );
  }
  // return (
  //   <Provider store={store} >
  //     <SwitchNav />
  //   </Provider>
  // );

}


