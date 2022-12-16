import { StatusBar } from 'expo-status-bar';
import { Linking, StyleSheet, Text, SafeAreaView,ScrollView,View } from 'react-native';
import data from '../data/top150.json';
import { Button, DataTable } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL } from '../config';
import axios from 'axios';
import Checkbox from 'expo-checkbox';
import { ActivityIndicator } from 'react-native-paper';

export default function Top150() {
  const [top150,setTop150] = useState([]);
  const [isLoading, setIsLoading] = useState(false); 

  useEffect(()=> {
    setIsLoading(true);
    getData()
  },[])

  const getData = async() => {
    let userData = await AsyncStorage.getItem('userData');
    let email = JSON.parse(userData).email
    axios.post(`${BASE_URL}/getData`, {
      email:email,     
    }).then(res=>{
        let newData = data       
        let top150 = res.data.top150
        newData.forEach((value,index) => {
          let idx = top150.indexOf(index)
          if(idx !== -1){
            newData[index].completed = true
          } else {
            newData[index].completed = false
          }
        })
        setTop150(newData);          
        setIsLoading(false);
    }).catch(e => {
        setIsLoading(false);
        console.log("getData error",e)
    })
  }

  const setSelection = (value,index) => {
    let data = [...top150]
    data[index].completed = value;
    setTop150(data)
    let completed = []
    data.forEach((value,index) => {
      if(value.completed){
        completed.push(index)
      }
    })    
    saveTop150(completed)
  }

  const saveTop150 = async (completed) => {
    let userData = await AsyncStorage.getItem('userData');
    let email = JSON.parse(userData).email 
    axios.post(`${BASE_URL}/top150`, {
        email:email,
        top150:completed
    }).then(res=>{
        console.log("RESPONSE",res.data)  
    }).catch(e => {
        console.log("saveTop150 error",e.message)
    })

  }

  if(isLoading){
    return(
        <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
            <ActivityIndicator size={'large'}/>
        </View>
    )
  }
  return (
    <SafeAreaView >      
      <DataTable style={styles.container}>
      <DataTable.Header style={styles.tableHeader}>    
        <DataTable.Title style={{flex: 3}}>Problem</DataTable.Title>
        <DataTable.Title>Difficulty</DataTable.Title>
        <DataTable.Title>Video</DataTable.Title>
      </DataTable.Header>
      <ScrollView>
      {
        data.map((value,index) => (
          <DataTable.Row key={"key"+index}>
           
            <DataTable.Cell style={{flex: 3}}>
             <View style={{display:'flex',flexDirection:"row",textOverflow:"elipsis"}}>              
                <Checkbox
                  style={styles.checkbox}
                  value={value.completed}
                  onValueChange={(value) => setSelection(value,index)}
                  color={value.completed ? '#4630EB' : undefined}
                /> 
                <Text style={styles.questionText} onPress={() => Linking.openURL(value['links-href'])}>{index+1 + ". "+value.links}</Text>
              </View> 
            </DataTable.Cell>
                
            <DataTable.Cell>{value.difficulty}</DataTable.Cell>
            <DataTable.Cell> 
              <TouchableOpacity style={styles.blind75Button} onPress={() => Linking.openURL(value.video)}>
                <Text style={styles.text}>Video</Text>
              </TouchableOpacity>
            </DataTable.Cell>
          </DataTable.Row>
        ))
      }
      
      </ScrollView>
      
    </DataTable>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom:100,
  },
  questionText:{
    textDecorationLine:'underline',
    color:"blue",
    paddingLeft:10,
    width:"90%"
  },
  text:{
    fontSize:13,
  },
  blind75Button:{
    marginTop:13,
    backgroundColor:"#fc5c65",
    alignItems:"center",
    borderRadius:40,
    
    padding:5
    // position:"absolute"
  },
  tableHeader: {
    backgroundColor: '#fc5c65',
  },
  button:{
    color:'#111',
    backgroundColor: '#fc5c65',
  },
  checkbox:{
    display:"flex",
        
  }
});
