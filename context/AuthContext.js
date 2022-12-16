import React, {createContext, useEffect, useState}  from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { BASE_URL } from '../config';
import { Alert } from 'react-native';

export const AuthContext = createContext();

export const AuthProvider = ({navigation,children}) => {
    const [isLoading,setIsLoading] = useState(false);
    const [userToken,setUserToken] = useState(null)
    const [userData,setUserData] = useState(null)

    const login = (email,password) => {
        setIsLoading(true);
        console.log({
            email:email,
            password:password,
        })
        axios.post(`${BASE_URL}/auth/signin`, {
            email:email,
            password:password,
        }).then(res=>{
            setUserToken(res.data.accessToken);
            AsyncStorage.setItem('userToken', res.data.accessToken);
            AsyncStorage.setItem('userData', JSON.stringify(res.data));             
        }).catch(e => {
            console.log("LOGIN error",e.message)
        })
        setIsLoading(false);
    }

    const register = (email,password,confirmPassword,userName) => {


        setIsLoading(true);       
        axios.post(`${BASE_URL}/auth/signup`, {
            username:userName,
            email:email,
            password:password,
        }).then(res=>{
            if(res)  Alert.alert(
                "Resiger",
                res.data.message,)     
        }).catch(e => {
            console.log("REGISTER error",e.message)
        })
        setIsLoading(false);
    }

    const logout = () => {
        setIsLoading(true);
        setUserToken(null);
        AsyncStorage.removeItem('userToken');
        AsyncStorage.removeItem('userData');
        setIsLoading(false);
    }

    const isLoggedIn = async() => {
        try {
            setIsLoading(true);
            let userToken = await AsyncStorage.getItem('userToken');
            let userData = await AsyncStorage.getItem('userData');
            setUserToken(userToken);
            setUserData(JSON.parse(userData));
            setIsLoading(false);
        } catch (error) {
            console.log(`IsLogged in error ${error}`);
        }
    }

    useEffect(()=>{
        isLoggedIn()
    },[])

    return(
        <AuthContext.Provider value={{login, register, logout, isLoading, userToken, userData}}>
            {children}
        </AuthContext.Provider>
    )
}