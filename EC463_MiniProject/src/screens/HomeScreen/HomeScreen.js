import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import styles from './styles';
import camera from '../../../components/camera';
import info from '../../../components/info';

export default function HomeScreen(props) {
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
            onPress={() => navigation.navigate('HistoryScreen', { name: 'Jane' })}>
              <Text style={styles.buttonText}>
                Previous Scans
              </Text>
          </Pressable>
    
        </View>
      );
}