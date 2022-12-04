import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Linking, StyleSheet, Text, SafeAreaView,ScrollView } from 'react-native';
import { Button, DataTable } from 'react-native-paper';
import Blind75 from './components/Blind75';
import WelcomeScreen from './components/WelcomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={WelcomeScreen} />
      <Stack.Screen name="Blind75" component={Blind75} />
      
    </Stack.Navigator>
  </NavigationContainer>

   
    // <SafeAreaView >
     
      //  <Blind75/> 
    // </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  
});
