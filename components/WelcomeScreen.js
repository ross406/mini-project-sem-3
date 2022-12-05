import React from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native-paper';

function WelcomeScreen({navigation }) {
    return (
        <ImageBackground style={styles.background} source={require("../assets/showcase.jpg")}>
               
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../assets/logo.png')} />
                    <Text style={styles.logoText}>Code Practice</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Blind75')}  style={styles.blind75Button}><Text  style={styles.text}>Blind 75</Text></TouchableOpacity >
                <TouchableOpacity onPress={() => navigation.navigate('Top150')} style={styles.top150Button}><Text  style={styles.text}>Top 150</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('All305')} style={styles.all305Button}><Text  style={styles.text}>All 305</Text></TouchableOpacity>
                
            </ImageBackground>
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