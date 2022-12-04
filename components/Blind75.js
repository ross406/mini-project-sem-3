import { StatusBar } from 'expo-status-bar';
import { Linking, StyleSheet, Text, SafeAreaView,ScrollView } from 'react-native';
import data from '../csvjson.json';
import { Button, DataTable } from 'react-native-paper';

export default function Blind75() {
  return (
    <SafeAreaView >
      <Text>Blind 75 </Text>
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
                <Text onPress={() => Linking.openURL(value['links-href'])}>{index+1 + ". "+value.links}</Text></DataTable.Cell>
            <DataTable.Cell>{value.difficulty}</DataTable.Cell>
            <DataTable.Cell> 
              <Button style={styles.button}
              color="#000000" 
                title="Video"
                onPress={() => Linking.openURL(value.video)}
              />
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
  tableHeader: {
    backgroundColor: '#DCDCDC',
  },
  button:{
    color:'#111',
    backgroundColor: '#DCDCDC',
  }
});
