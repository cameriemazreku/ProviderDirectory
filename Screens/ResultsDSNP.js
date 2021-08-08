
import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, SafeAreaView, FlatList,} from 'react-native';
// import data1 from '../util/data1';
import apiCall from '../assets/apiCall';
const ResultsDSNP = () => 
{
  const [data, setData] = useState([]);
  // const ResultsByProviderName = () => {  

useEffect(()=>{
  fetchPosts();
  return ()=>{

  }
},[])
 

  var practitioner=[];
  var organization=[];

  const fetchPosts=()=>{fetch('https://vc202011.aidbox.app/OrganizationAffiliation?_include=OrganizationAffiliation:organization&_include=OrganizationAffiliation:network&organizationActive=true&organizationName=essen',
  { headers: {"Content-Type": "application/json"},
        method: "GET"})
  .then((json) => json.json()) 
  .then((json)=>{
      console.log(json.entry.length)
      console.log(String(json.entry[0].resource.organization.resource.name))
      // for(let i=0;i<50;i++){

      //   console.log(json.entry[i].resource.organization.resource.name)}
      
      setData(String(json.entry[0].resource.organization.resource.name))})

  .catch((error)=>{console.log("---------------------------> error", error.message);})}
    

  // const fetchPosts=()=>{fetch('https://vc202011.aidbox.app/PractitionerRole?_include=PractitionerRole:organization&_include=PractitionerRole:practitioner&_include=PractitionerRole:network&_include=PractitionerRole:location&_include=PractitionerRole:healthcareService&practitionerActive=true&practitionerName=sumir',
  // { headers: {"Content-Type": "application/json"},
  //       method: "GET"})
  // .then((response) => response.json()) 
  // .then((json)=>{
  //   console.log(String(json.entry[0].resource.practitioner.resource.name[0].given)+' '+String(json.entry[0].resource.practitioner.resource.name[0].family))
  //   console.log(json.entry[0].resource.organization.resource.name)//organization for practitioner
  //   console.log(json.entry[58].resource.name) //organization  
  //   console.log(json.entry[58].resource.name) // plan 
  //   console.log(json.entry[58].resource.telecom[0].value)// phone number
  //   console.log(json.entry[58].resource.address.line[0])
  //   console.log(json.entry[58].resource.address.state)
  //   console.log(json.entry[58].resource.address.city)
  //   console.log(json.entry[58].resource.address.postalCode)
    // console.log(json.entry[0].resource.location.resource.location[0])
    // console.log(json.entry[0].resource.practitioner.telecom)


  //   for(let i=0;i<46;i++){
  //     // console.log(json.entry[i].resource.practitioner.resource.name[0])
  //     console.log(json.entry[i].resource.organization.resource.name)//organization for practitioner

  //     practitioner.push(String(json.entry[i].resource.practitioner.resource.name[0].given))
    

  //     organization.push(String(json.entry[i].resource.organization.resource.name))

  // }
    


    // console.log(json.entry.resource.practitioner.resource.name[0])
    // console.log(json.entry)

//     console.log(practitioner);
//     console.log(organization);
//     // console.log(String(json.entry[0].resource.practitioner.resource.name[0].given)+' '+String(json.entry[0].resource.practitioner.resource.name[0].family))
//     setData(String(json.entry[0].resource.practitioner.resource.name[0].given)+' '+String(json.entry[0].resource.practitioner.resource.name[0].family))
    
//       // x.push(json.entry[0].resource.practitioner.resource.name[0]);
//       // x.push(json.entry[1].resource.practitioner.resource.name[0]);
//       // console.log(x);
  
//     // console.log(JSON.stringify(json.entry[1].resource.practitioner.resource.name[0].given))

//   })
//     .catch((error)=>{console.log("---------------------------> error", error.message);})
  
// }

    // const endpoint = '/PractitionerRole?_include=PractitionerRole:organization&_include=PractitionerRole:practitioner&_include=PractitionerRole:network&_include=PractitionerRole:location&_include=PractitionerRole:healthcareService&practitionerActive=true&practitionerName=sumir' ;
    // console.log(endpoint);
    // const promise = apiCall(endpoint, 'get')
    
    // promise.then(blob => blob.json()).then(json => {
    //   // console.log(json.entry.practitioner.resource.name)
    // })
    // .then((json)=>setData(json.entry[0].resource.practitioner.resource.name[0].given))
    // .catch((error)=>{console.log("---------------------------> error", error.message);})
  // console.log(String(data1.practitioner.resource.name[0].given)+' '+String(data1.practitioner.resource.name[0].family));
  // console.log(data1.practitioner.resource.name[0].family);
// },[]);
//   const ItemView =({item})=>{
//     return (
//       <Text style ={styles.itemStyle}>
// {json.entry[0].resource.practitioner.resource.name[0].given}        
//       </Text>
//     )
//   }

  const ItemSeparatorView = () => {
    return (
      <View 
      style={{height:0.5, width: '100%'}}/>
    )
  }
  

return (
  <SafeAreaView style={styles.Select}>

  <View style={styles.Results}>

  {/* <FlatList
data={data}
keyExtractor={(item, index)=>index.toString()}
ItemSeparatorComponent={ItemSeparatorView}
// renderItem={ItemView}
renderItem={({item})=> (
  <Text style={styles.itemStyle}>{item}</Text>
)}
  /> */}



 <Text style={styles.Name}> John May</Text>
<Text style={styles.Text}> 300 East 34st </Text>
<Text style={styles.Text}> New York City, NY, 10220</Text>
<Text style={styles.Text}> Orthodentist</Text>
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
      // padding: 15,
      // margin: 3,
      backgroundColor:'white',
      borderRadius: 10,
      color:'black',
      width: '95%',
      alignSelf: 'center',
      fontSize: 20,
  
    },
    Results:{
      // margin: 5,
      borderRadius: 1,
      backgroundColor: 'white',
      width: '97%',
      height: '30%',
      borderColor: '#f0f8ff',
      borderWidth: 2,
      borderRadius: 5,
      // alignContent: 'space-between',

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
export default ResultsDSNP;