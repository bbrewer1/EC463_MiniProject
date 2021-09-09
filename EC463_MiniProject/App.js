import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Button } from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name = "Home"
          component = {HomeScreen}
          options = {{title: 'Welcome' }}
        />
        <Stack.Screen name="History" component={HistoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Go to Jane's history"
      onPress={() =>
        navigation.navigate('History', { name: 'Jane' })
      }
    />
  );
};
const HistoryScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s history</Text>;
};

export default App;

/*
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Testing git in vscode</Text>
      <StatusBar style="auto" />
    </View>
  );
}
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});