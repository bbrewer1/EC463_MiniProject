import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import styles from './styles';

export default function HistoryScreen(props) {
    return <Text>This is {route.params.name}'s history</Text>;
}