import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { NavigationContainer, DefaultTheme  } from '@react-navigation/native';
import { Linking, StyleSheet, Text, SafeAreaView,ScrollView } from 'react-native';
import { Button, DataTable } from 'react-native-paper';
import Blind75 from './components/Blind75';
import Top150 from './components/Top150';
import All305 from './components/All305';
import WelcomeScreen from './components/WelcomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'green',    
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={WelcomeScreen} />
      <Stack.Screen name="Blind75" component={Blind75} />
      <Stack.Screen name="Top150" component={Top150} />
      <Stack.Screen name="All305" component={All305} />      
    </Stack.Navigator>
  </NavigationContainer>

   
    // <SafeAreaView >
     
      //  <Blind75/> 
    // </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  
});
