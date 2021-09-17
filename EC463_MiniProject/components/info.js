
import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';
import { StackActions } from '@react-navigation/native';
import {Context} from './context'

const info = ({navigation}) => {
  const [servings, onChangeServings] = useState(1);
  const [calories, setCalories] = useState(null);
  const {mealdata,actions} = useContext(Context);
  const [historyFood, setHistoryFood] = useState(null);
  const [currentfood, setCurrentfood] = useState(mealdata[mealdata.length - 1]); 
  useEffect(() => {
    console.log(mealdata)
    setHistoryFood(mealdata.slice(0,mealdata.length - 2))
  }, [])
  useEffect(() => {
    setCalories(servings*currentfood.Calories);
    setCurrentfood({...currentfood, servings: servings});
    console.log(currentfood);
  },[servings]);
  const setMeal = () =>{
    actions({type:'setMeal', 
      payload: [...historyFood,currentfood]})
  }
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
        onChangeText={onChangeServings}
        value={servings+''}
        placeholder= '1'
        keyboardType="numeric"
        placeholderTextColor="white"
        returnKeyType= 'done' 
      />
      </View>
      <View style={{ flex: 2,}}><Text style={{fontSize: 20, color:'white'}}> {currentfood.Food}: {calories} Cal</Text></View>
      <View style={{ flex: 1, width : 120 }}>
      <Button
        title="Scan More"
        color="white"
        width = "120"
        onPress={() => {
          navigation.dispatch(StackActions.replace('Camera'));
          setMeal();
        }}
      />
      </View>
      <View style={{ flex: 1, width : 120 }}>
      <Button
        title="Finish"
        color="white"
        width = "120"
        onPress={() => {
          navigation.dispatch(StackActions.replace('HomeScreen'));
          setMeal();
        }}
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