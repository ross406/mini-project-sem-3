import React from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

function WelcomeScreen({navigation }) {
    return (
        <ImageBackground style={styles.background} source={require("../assets/showcase.jpg")}>
               
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../assets/logo.png')} />
                    <Text>Code Practice</Text>
                </View>
                <View onPress={() => navigation.navigate('Blind75')} style={styles.blind75Button}><Text>Blind 75</Text></View>
                <View style={styles.allButton}></View>
                
            </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#111"
    },
    background:{    
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center"
        // height:"100%"
    },
    blind75Button:{
        width: '100%',
        height:70,
        backgroundColor:"#fc5c65"
    },
    allButton:{
        width: '100%',
        height:70,
        backgroundColor:"#4ecdc4"
    },
    logo:{
        width:100,
        height:100,
       
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