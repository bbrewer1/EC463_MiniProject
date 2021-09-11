
import React from 'react';
import { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
} from 'react-native';

const info = ({navigation}) => {
  const [number, onChangeNumber] = useState(null);
  const [calories, setCalories] = useState(0);
  useEffect(() => {
    setCalories(500*number);
  },[number]);
  return (
    <View style={[styles.container, {
      flexDirection: "column",
      alignItems:'center',
      backgroundColor:'#00008B'
    }]}>
      <View style={{ flex: 2,}}><Text style={{fontSize: 20, color:'white'}}>How many servings?</Text></View>
      <View style={{ flex: 2,}}>      
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="0"
        keyboardType="numeric"
        placeholderTextColor="white"
      />
      </View>
      <View style={{ flex: 2,}}><Text style={{fontSize: 20, color:'white'}}> {calories} Cal</Text></View>
      <View style={{ flex: 1, width : 120 }}>
      <Button
        title="Scan More"
        color="white"
        width = "120"
        onPress={() => navigation.goBack()}
      />
      </View>
      <View style={{ flex: 1, width : 120 }}>
      <Button
        title="Finish"
        color="white"
        width = "120"
        onPress={() => navigation.popToTop()}
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    margin: 12,
    width: 180,
    borderWidth: 1,
    padding: 10,
    borderColor: 'white',
    color: 'white',
  },
});


export default info;