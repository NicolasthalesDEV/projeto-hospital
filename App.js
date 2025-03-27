import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import { useState } from 'react';
import MainNavigator from './navigator/MainNavigator';

export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const setLogin = ()=>{
    setIsLoggedIn(true)
  }
  return (
    <View style={styles.container}>
      {isLoggedIn ? <MainNavigator /> : <LoginScreen setLogin={() => setLogin() } />}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
