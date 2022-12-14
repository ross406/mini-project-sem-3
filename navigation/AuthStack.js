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

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName='Onboarding'>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />           
    </Stack.Navigator>
  );
};

export default AuthStack;
