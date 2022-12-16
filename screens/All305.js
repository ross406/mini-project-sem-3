import { StatusBar } from 'expo-status-bar';
import { Linking, StyleSheet, Text, SafeAreaView,ScrollView,View } from 'react-native';
import data from '../data/all305.json';
import { Button, DataTable } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL } from '../config';
import axios from 'axios';
import Checkbox from 'expo-checkbox';
import { ActivityIndicator } from 'react-native-paper';

export default function All305() {
  const [all305,setAll305] = useState([]);
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
        let all305 = res.data.all305
        newData.forEach((value,index) => {
          let idx = all305.indexOf(index)
          if(idx !== -1){
            newData[index].completed = true
          } else {
            newData[index].completed = false
          }
        })
        setAll305(newData);          
        setIsLoading(false);
    }).catch(e => {
        setIsLoading(false);
        console.log("getData error",e)
    })
  }

  const setSelection = (value,index) => {
    let data = [...all305]
    data[index].completed = value;
    setAll305(data)
    let completed = []
    data.forEach((value,index) => {
      if(value.completed){
        completed.push(index)
      }
    })    
    saveAll305(completed)
  }

  const saveAll305 = async (completed) => {
    let userData = await AsyncStorage.getItem('userData');
    let email = JSON.parse(userData).email 
    axios.post(`${BASE_URL}/all305`, {
        email:email,
        all305:completed
    }).then(res=>{
        console.log("RESPONSE",res.data)  
    }).catch(e => {
        console.log("saveAll305 error",e.message)
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
        all305?.map((value,index) => (
          <DataTable.Row key={"key"+index}>            
            <DataTable.Cell style={{flex: 3}}>
               <View style={{display:'flex',flexDirection:"row",textOverflow:"elipsis"}}>              
                <Checkbox
                  style={styles.checkbox}
                  value={value.completed}
                  onValueChange={(value) => setSelection(value,index)}
                  color={value.completed ? '#4630EB' : undefined}
                /> 
                <Text ellipsizeMode={'tail'} style={styles.questionText} onPress={() => Linking.openURL(value['links-href'])}>{index+1 + ". "+value.links}</Text>
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
