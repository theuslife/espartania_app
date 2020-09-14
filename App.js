import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color: 'white', fontSize: 40}}>Bem vindos</Text>
      <StatusBar style="auto" />
    </View>                                       
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a4031f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
