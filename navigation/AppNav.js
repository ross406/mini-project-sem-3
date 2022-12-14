import React, {useContext} from 'react';
import { NavigationContainer, DefaultTheme  } from '@react-navigation/native';
import AuthStack from './AuthStack';
import { AuthContext } from '../context/AuthContext';
import { ActivityIndicator } from 'react-native-paper';
import AppStack from './AppStack';
import { View } from 'react-native';


const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'green',    
  },
};

export default function AppNav() {
  // const {login} = useContext(AuthContext);
  const {isLoading,userToken} = useContext(AuthContext);



  if(isLoading){
    return(
        <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
            <ActivityIndicator size={'large'}/>
        </View>
    )
  }

  return (
    <NavigationContainer theme={MyTheme}>
        {userToken !== null ? <AppStack/> : <AuthStack /> }        
    </NavigationContainer>
  );
}

