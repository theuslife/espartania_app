import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import resources from './src/config/resources'

const { logo2 } = resources


export default function App() {

  useEffect(() => {
    StatusBar.setBarStyle('light-content');
  }, [])

  return (
    <View style={styles.container}>
      <View>
        <Image
          resizeMode='contain'
          source={logo2}
          style={[{ width: 300, height: 300 }]}
        />
      </View>
      {/* <Text style={{ color: '#fff', fontSize: 50 }}>O futuro do esporte</Text> */}
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d51a1d',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
