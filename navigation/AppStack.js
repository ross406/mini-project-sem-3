import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Blind75 from '../screens/Blind75';
import Top150 from '../screens/Top150';
import All305 from '../screens/All305';
import WelcomeScreen from '../screens/WelcomeScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>     
      <Stack.Screen name="Home" component={WelcomeScreen} />
      <Stack.Screen name="Blind75" component={Blind75} />
      <Stack.Screen name="Top150" component={Top150} />
      <Stack.Screen name="All305" component={All305} />      
    </Stack.Navigator>
  );
};

export default AppStack;
