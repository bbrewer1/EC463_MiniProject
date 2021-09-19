import React from 'react'
import { Context } from '../../../components/context'
import {
    FlatList,
    Text,
    View,
    Button
  } from 'react-native';
import { useContext, useState, useEffect} from 'react';
import styles from './styles';
import firebase from 'firebase';

export default function HistoryScreen() {
    const {userdata, mealdata, actions} = useContext(Context);
    const [historyData, setHistoryData] = useState(null);
    useEffect(() => {
        setHistoryData(mealdata)
    }, [])
    const DeleteHistory = (id) =>{
        setHistoryData(historyData.filter(historyData => historyData.id !== id));
        const MealsRef = firebase.firestore().collection('users').doc(userdata.id).collection('Meals')
        mealdata.forEach(element => {
            if (element.id == id){
                let removeItemid = element.docId ;
                MealsRef.doc(removeItemid).delete()
            }
        actions({type:'setMeal', payload: historyData})
        });
    };
    const rendermeal = ({item, index}) => {
        return (
            <View style={styles.entityContainer}>
                <Text style={styles.entityText}>
                {'\u25CF'} {item.servings} {item.Food}:  {item.servings*item.Calories} Cal
                </Text>
                <Button style={styles.entityButton} title="X" onPress={()=>DeleteHistory(item.id)}></Button>
            </View>
        )
    }
    return (<FlatList
    data={mealdata}
    renderItem={rendermeal}
    keyExtractor={item => item.id}
    />);
}
