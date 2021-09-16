import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import camera from './components/camera';
import info from './components/info';
import { useState } from 'react';
import {LoginScreen,HomeScreen,RegistrationScreen,HistoryScreen} from './src/screens'


const Stack = createNativeStackNavigator();

const App = () => {
  
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  return (
    <NavigationContainer>
      <Stack.Navigator>
        { user ? (
          <Stack.Screen name="HomeScreen">
            {props => <HomeScreen {...props} extraData={user} />}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name="Login" component = {LoginScreen} />
            <Stack.Screen name="Registration" component = {RegistrationScreen} />
            <Stack.Screen name="History" component = {HistoryScreen} />
            <Stack.Screen name="Camera" component = {camera} />
            <Stack.Screen name="Info" component = {info} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;


