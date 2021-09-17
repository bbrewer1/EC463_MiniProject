import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { StackActions } from '@react-navigation/native';
import {Context} from './context'



 const camera = ({navigation}) =>{
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const {mealdata, actions} = useContext(Context);

  const getInfo = (foodName) => {
    fetch('https://api.nal.usda.gov/fdc/v1/foods/search?api_key=E9600OWz1JligXmYNXwZrVfcKSVbgswSBCPlOTyx&query='+foodName)
    .then( response => response.json())
    .then( result => { 
      result.foods[0].foodNutrients.forEach((element) => {
      if (element.nutrientNumber == "208"){
      /*console.log(element.nutrientName+': '+ element.value + ' ' + element.unitName)*/
      actions({type:'setMeal', 
      payload: {
        Calories:element.value,
        Food:foodName,
      }})  
      }
      });
      console.log(mealdata)
    })
    .catch(error=>{console.log(error)})
  }

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const FinishScan = () => {
    setScanned(false)
    navigation.dispatch(StackActions.replace('Info'));
  }
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    Alert.alert('Confirmation', `Is this ${data}?`, [
      {
          text: 'Yes',
          onPress:() => FinishScan(),
      },
      {
          text: 'No',
          onPress: () => setScanned(false),
          style: 'cancel',
      },
  ]);
  var foodInfo = getInfo(data);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

export default camera;