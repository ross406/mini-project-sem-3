import { StatusBar } from 'expo-status-bar';
import { Linking, StyleSheet, Text, SafeAreaView,ScrollView, View} from 'react-native';
import data from '../data/blind75.json';
import { Button, DataTable } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
// import CheckBox from '@react-native-community/checkbox';
import Checkbox from 'expo-checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { BASE_URL } from '../config';
import { ActivityIndicator } from 'react-native-paper';

export default function Blind75() {
  const [blind75,setBlind75] = useState([]);
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
        let blind75 = res.data.blind75
        newData.forEach((value,index) => {
          let idx = blind75.indexOf(index)
          if(idx !== -1){
            newData[index].completed = true
          } else {
            newData[index].completed = false
          }
        })
        setBlind75(newData);     
        setIsLoading(false);     
    }).catch(e => {
        setIsLoading(false);    
        console.log("getData error",e)
    })
  }

  const setSelection = (value,index) => {
    let data = [...blind75]
    data[index].completed = value;
    setBlind75(data)
    let completed = []
    data.forEach((value,index) => {
      if(value.completed){
        completed.push(index)
      }
    })    
    saveBlind75(completed)
  }

  const saveBlind75 = async (completed) => {
    let userData = await AsyncStorage.getItem('userData');
    let email = JSON.parse(userData).email 
    axios.post(`${BASE_URL}/blind75`, {
        email:email,
        blind75:completed
    }).then(res=>{
        console.log("RESPONSE",res.data)  
    }).catch(e => {
        console.log("saveBlind75 error",e.message)
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
        blind75?.map((value,index) => (
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
  text:{
    fontSize:13,
  },
  questionText:{
    textDecorationLine:'underline',
    color:"blue",
    paddingLeft:10,
    width:"90%"
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
