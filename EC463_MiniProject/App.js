import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import camera from './components/camera'
import info from './components/info'


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Home screen set up */}
        <Stack.Screen
          name = "Home"
          backgroundColor = '#fff'
          component = {HomeScreen}
          options = {{title: 'Home' }}
        />
        {/* History screen set up */} 
        <Stack.Screen name="History" component={HistoryScreen}/>
        <Stack.Screen name="Camera" component = {camera}/>
        <Stack.Screen name="Info" component = {info}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

//Testing branch set up
//Home screen UI components
const HomeScreen = ({ navigation }) => {
  return (
    <View style = {styles.container}>

      {/* Title text component */}
      <Text style = {styles.titleText}>
        Nutritional Scanner
      </Text>

      {/* Subheader text component */}
      <View style = {styles.container}>
        <Text style = {styles.subtitleText}>
          A Senior Design Mini Project
        </Text>
      </View>

      {/* Button to start scanning items. Navigates to scanning screen */}
      <Pressable style={styles.Button}
      onPress={() => navigation.navigate('Camera')}>
        <Text style={styles.buttonText}>
          Get Started
        </Text>
      </Pressable>

      {/* Button to navigate to history screen, shows users 10 most recent scans */}
      <Pressable 
        style={styles.Button} 
        onPress={() => navigation.navigate('History', { name: 'Jane' })}>
          <Text style={styles.buttonText}>
            Previous Scans
          </Text>
      </Pressable>

    </View>
  );
};

// History Screen UI components
const HistoryScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s history</Text>;
};


export default App;


const styles = StyleSheet.create({
  // Style for title text
  titleText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  
  // Style for text within buttons
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  },

  // Style for subtitle text
  subtitleText: {
    fontSize: 18,
    fontWeight: 'bold'
  },

  // Style for buttons
  Button: {
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 50
  },

  // Style for containers containing elements
  container: {
    marginTop: 50,
    flex: 1,
    alignItems: 'center'
  },
});