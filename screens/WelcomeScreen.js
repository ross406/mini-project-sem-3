import React, { useContext } from 'react';
// import { Image, ImageBackground, StyleSheet, View } from 'react-native';
import { SafeAreaView, View, Text, TouchableOpacity, Image,StyleSheet } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import { Text } from 'react-native-paper';
import { AuthContext } from '../context/AuthContext';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function WelcomeScreen({navigation }) {
    const {logout, setIsLoading} = useContext(AuthContext);
    return (
        // <ImageBackground style={styles.background} source={require("../assets/showcase.jpg")}>
               
        //     <View style={styles.logoContainer}>
        //         <Image style={styles.logo} source={require('../assets/logo.png')} />
        //         <Text style={styles.logoText}>Code Practice</Text>
        //     </View>
        //     <TouchableOpacity onPress={() => {
        //         // setIsLoading(true)
        //         navigation.navigate('Blind75')}}  style={styles.blind75Button}><Text  style={styles.text}>Blind 75</Text></TouchableOpacity >
        //     <TouchableOpacity onPress={() => {
        //         // setIsLoading(true)
        //         navigation.navigate('Top150')}} style={styles.top150Button}><Text  style={styles.text}>Top 150</Text></TouchableOpacity>
        //     <TouchableOpacity onPress={() => {
        //         // setIsLoading(true)
        //         navigation.navigate('All305')}} style={styles.all305Button}><Text  style={styles.text}>All 305</Text></TouchableOpacity>
        //     <TouchableOpacity onPress={() => logout()} style={styles.all305Button}><Text  style={styles.text}>Logout</Text></TouchableOpacity>
                
        // </ImageBackground>
        <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}>
        <View style={{marginTop: 20}}>
          <Text
            style={{
              // fontFamily: 'Inter-Bold',
              fontWeight: 'bold',
              fontSize: 30,
              color: '#20315f',
            }}>
            Code Practice
          </Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('../assets/logo.png')}
          style={{height: 300, width: 300,backgroundColor:"#111",borderRadius:500, transform: [{rotate: '-15deg'}]}}
        />
       
        </View>
         <TouchableOpacity
          style={{
            backgroundColor: '#AD40AF',
            padding: 20,
            width: '90%',
            borderRadius: 10,
            marginBottom: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
          onPress={() => navigation.navigate('Blind75')}>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              textAlign: 'center',
              fontWeight: 'bold',
              // fontFamily: 'Roboto-MediumItalic',
            }}>
           Blind 75
          </Text> 
          <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#AD40AF',
            padding: 20,
            width: '90%',
            borderRadius: 10,
            marginBottom: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
          onPress={() => navigation.navigate('Top150')}>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              textAlign: 'center',
              fontWeight: 'bold',
              // fontFamily: 'Roboto-MediumItalic',
            }}>
           Top 150
          </Text> 
          <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#AD40AF',
            padding: 20,
            width: '90%',
            borderRadius: 10,
            marginBottom: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
          onPress={() => navigation.navigate('All305')}>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              textAlign: 'center',
              fontWeight: 'bold',
              // fontFamily: 'Roboto-MediumItalic',
            }}>
          All 305
          </Text> 
          <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#AD40AF',
            padding: 20,
            width: '90%',
            borderRadius: 10,
            marginBottom: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
          onPress={() => logout()}>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              textAlign: 'center',
              fontWeight: 'bold',
              // fontFamily: 'Roboto-MediumItalic',
            }}>
         Logout
          </Text> 
          <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
        </TouchableOpacity>
       
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#111"
    },
    logoText:{
        fontSize:15,
        marginTop:7,
        fontWeight:"bold"
    },
    text:{
        fontSize:30,
        marginTop:15
    },
    background:{    
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center"
        // height:"100%"
    },
    blind75Button:{
        width: 200,
        height:70,
        backgroundColor:"#fc5c65",
        alignItems:"center",
        borderRadius:40,
        marginBottom:10,
        // position:"absolute"
    },
    top150Button:{
        width: 200,
        height:70,
        backgroundColor:"#4ecdc4",  
        alignItems:"center",
        borderRadius:40,
        marginBottom:10
        // position:"absolute"      
    },
    all305Button:{
        width: 200,
        height:70,
        backgroundColor:"yellow",
        alignItems:"center",
        borderRadius:40,
        // position:"absolute",
        marginBottom:100
    },
    logo:{
        width:100,
        height:100,
        transform: [{rotate: '-15deg'}],
        backgroundColor:"#111",
        borderRadius:100,
        paddingTop:20
    },
    logoContainer:{
        position:'absolute',
        top:70,
        alignItems:'center'
    }

})

export default WelcomeScreen;