import { StatusBar } from 'expo-status-bar';
import { Linking, StyleSheet, Text, SafeAreaView,ScrollView } from 'react-native';
import data from '../data/top150.json';
import { Button, DataTable } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Top150() {
  return (
    <SafeAreaView >      
      <DataTable style={styles.container}>
      <DataTable.Header style={styles.tableHeader}>
        {/* <DataTable.Title>Number</DataTable.Title> */}
        <DataTable.Title style={{flex: 3}}>Problem</DataTable.Title>
        <DataTable.Title>Difficulty</DataTable.Title>
        <DataTable.Title>Video</DataTable.Title>
      </DataTable.Header>
      <ScrollView>
      {
        data.map((value,index) => (
          <DataTable.Row key={"key"+index}>
            {/* <DataTable.Cell style={{flex: 1}}>{index + 1}</DataTable.Cell> */}
            <DataTable.Cell style={{flex: 3}}>
                <Text style={styles.questionText} onPress={() => Linking.openURL(value['links-href'])}>{index+1 + ". "+value.links}</Text></DataTable.Cell>
            <DataTable.Cell>{value.difficulty}</DataTable.Cell>
            <DataTable.Cell> 
            <TouchableOpacity style={styles.blind75Button} onPress={() => Linking.openURL(value.video)}>

            <Text style={styles.text}>Video</Text>
            </TouchableOpacity>
              {/* <Button style={styles.button}
              color="#000000" 
                title="Video"
                onPress={() => Linking.openURL(value.video)}
              /> */}
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
    color:"blue"
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
  }
});
