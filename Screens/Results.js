import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, SafeAreaView, FlatList,} from 'react-native';
// import data1 from '../util/data1';
import apiCall from '../assets/apiCall';
const Results = () => 
{
  const [data, setData] = useState([]);
  // const ResultsByProviderName = () => {  

useEffect(()=>{
  fetchPosts();
  return ()=>{

  }
},[])
 
// const a;
  var x=[];
  

  const fetchPosts=()=>{fetch('https://vc202011.aidbox.app/PractitionerRole?_include=PractitionerRole:organization&_include=PractitionerRole:practitioner&_include=PractitionerRole:network&_include=PractitionerRole:location&_include=PractitionerRole:healthcareService&practitionerActive=true&practitionerName=sumir',
  { headers: {"Content-Type": "application/json"},
        method: "GET"})
  .then((response) => response.json()) 
  .then((json)=>{
    // a=
    setData(json.entry[0].resource.practitioner.resource.name[0].given)
    
      x.push(json.entry[0].resource.practitioner.resource.name[0]);
      x.push(json.entry[1].resource.practitioner.resource.name[0]);
      console.log(x);
    console.log(json.entry[0].resource.practitioner.resource.name[0].given)
    console.log(JSON.stringify(json.entry[1].resource.practitioner.resource.name[0].given))

  })
    .catch((error)=>{console.log("---------------------------> error", error.message);})
  
}

    // const endpoint = '/PractitionerRole?_include=PractitionerRole:organization&_include=PractitionerRole:practitioner&_include=PractitionerRole:network&_include=PractitionerRole:location&_include=PractitionerRole:healthcareService&practitionerActive=true&practitionerName=sumir' ;
    // console.log(endpoint);
    // const promise = apiCall(endpoint, 'get')
    
    // promise.then(blob => blob.json()).then(json => {
    //   console.log(json.entry[0].resource.practitioner.resource.name[0].given)
    //   // console.log(json.entry.practitioner.resource.name)
    // })
    // .then((json)=>setData(json.entry[0].resource.practitioner.resource.name[0].given))
    // .catch((error)=>{console.log("---------------------------> error", error.message);})
  // console.log(data1.practitioner.recource.name.given);
  // console.log(data1.practitioner.resource.name.given);
// },[]);
//   const ItemView =({item})=>{
//     return (
//       <Text style ={styles.itemStyle}>
// {json.entry[0].resource.practitioner.resource.name[0].given}        
//       </Text>
//     )
//   }

  // const ItemSeparatorView = () => {
  //   return (
  //     <View 
  //     style={{height:0.5, width: '100%'}}/>
  //   )
  // }
  

return (
  <SafeAreaView style={styles.Select}>

  <View style={styles.Results}>

  <FlatList
data={data}
keyExtractor={(item, index)=>index.toString()}
// ItemSeparatorComponent={ItemSeparatorView}
// renderItem={ItemView}
renderItem={({item})=> (
  <Text style={styles.itemStyle}>{item}</Text>
)}
  />




{/* <Text style={styles.Name}> John May</Text>
<Text style={styles.Text}> 300 East 34st </Text>
<Text style={styles.Text}> New York City, NY, 10220</Text>
<Text style={styles.Text}> Orthodentist</Text>
    </View>
    <View style={styles.Results}>
      <Text style={styles.Name}>
        Will Smith
      </Text>
      <Text style={styles.Text}> 300 East 34st </Text>
<Text style={styles.Text}> New York City, NY, 10220</Text>
<Text style={styles.Text}> Orthodentist</Text>
</View>
<View style={styles.Results}>
      <Text style={styles.Name}>
        Will Smith
      </Text>
      <Text style={styles.Text}> 300 East 34st </Text>
<Text style={styles.Text}> New York City, NY, 10220</Text>
<Text style={styles.Text}> Orthodentist</Text>
</View>
<View style={styles.Results}>
      <Text style={styles.Name}>
        Will Smith
      </Text>
      <Text style={styles.Text}> 300 East 34st </Text>
<Text style={styles.Text}> New York City, NY, 10220</Text>
<Text style={styles.Text}> Orthodentist</Text> */}
</View>
    </SafeAreaView>
)

};
const styles = StyleSheet.create({

    Select:{
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        flex:1,
    },
    itemStyle:{
      padding: 15,
      margin: 3,
      backgroundColor:'white',
      borderRadius: 10,
      color:'black',
      width: '95%',
      alignSelf: 'center',
      fontSize: 20,
    },
    Results:{
      margin: 5,
      borderRadius: 1,
      backgroundColor: 'white',
      width: '97%',
      height: '22%',
      borderColor: '#f0f8ff',
      borderWidth: 2,
      borderRadius: 5,
      alignContent: 'space-between',

    },
    Text:{
      fontFamily: 'Roboto',
      color: 'black',
      fontSize: 15
      
    },
    Name: {
        fontSize: 30,
        fontFamily: 'Roboto',
        color: 'black',
        padding: 5,
      }
});
export default Results;