
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import camera from './components/camera';
import info from './components/info';
import { useState, useEffect } from 'react';
import {LoginScreen,HomeScreen,RegistrationScreen,HistoryScreen} from './src/screens'
import { firebase } from './src/firebase/config'
import {GlobalUserState} from './components/globalstate';
import {Context} from './components/context'

const Stack = createNativeStackNavigator();

const App = () => {
  
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)
  const store = GlobalUserState();
  return (
    <Context.Provider value = {store}>
    <NavigationContainer>
      <Stack.Navigator>
        {store.userdata ? (
          <Stack.Screen name="HomeScreen" component = {HomeScreen} options = {{headerBackTitleVisible: false, gestureEnabled: false}}/>
        ) : null}
          <Stack.Screen name="Login" component = {LoginScreen}  options = {{gestureEnabled: false}}/>
          <Stack.Screen name="Registration" component = {RegistrationScreen} />
          <Stack.Screen name="History" component = {HistoryScreen} />
          <Stack.Screen name="Camera" component = {camera} />
          <Stack.Screen name="Info" component = {info} />
      </Stack.Navigator>
    </NavigationContainer>
    </Context.Provider>
  );
};


export default App;


