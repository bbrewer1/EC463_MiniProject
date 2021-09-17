import React from 'react'
import { Context } from '../../../components/context'
import {
    FlatList,
    Text,
    View,
  } from 'react-native';
import { useContext } from 'react';
import styles from './styles';

export default function HistoryScreen() {
    const {mealdata} = useContext(Context);
    const rendermeal = ({item, index}) => {
        return (
            <View style={styles.entityContainer}>
                <Text style={styles.entityText}>
                {'\u25CF'} {item.servings} {item.Food}:  {item.servings*item.Calories} Cal
                </Text>
            </View>
        )
    }
    return (<FlatList
    data={mealdata}
    renderItem={rendermeal}
    keyExtractor={item => item.id}
    />);
}