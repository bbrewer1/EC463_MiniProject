import React from 'react'
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import styles from './styles';


export default function HomeScreen({navigation}) {
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
            onPress={() => navigation.navigate('History')}>
              <Text style={styles.buttonText}>
                Previous Scans
              </Text>
          </Pressable>
    
        </View>
      );
}