import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, TextInput, View, FlatList} from 'react-native';
const SearchBar = () => 
{
const [filterdData, setfilterdData]=useState([]);
const [masterData, setmasterData]=useState([]);
const [search, setsearch]= useState('');

useEffect(()=>{
  fetchPosts();
  return ()=>{

  }
},[])

const fetchPosts = () => {
        const apiURL='https://jsonplaceholder.typicode.com/posts';
        fetch(apiURL)
        .then((response)=>response.json())
        .then((responseJson)=>{
          setfilterdData(responseJson);
          setmasterData(responseJson);
        }).catch((error)=>{
          console.error(error);
        })
           }

const searchFilter = (text) =>{
        if(text){
          const newData = masterData.filter((item)=>{
            const itemData =item.name ? item.name
                       : '';
            const textData = text;
            return itemData.indexOf(textData)>-1;
          });
        setfilterdData(newData);
        setsearch(text);}
        else {
          setfilterdData(masterData);
          setsearch(text);
        }}
const ItemView =({item})=>{
            return (
              <Text style ={styles.itemStyle}>
               {item.name}
              </Text>
            )
          }
const ItemSeparatorView = () => {
            return (
              <View 
              style={{height:0.5, width: '100%'}}/>
            )
          }
      
return (
    
 <View style= {styles.container}>


    <TextInput
    style={styles.textInputStyle}
    value={search}
    placeholder="Search here"
    placeholderTextColor='white'
    underlineColorAndroid="transparent"
    onChangeText={(text)=>searchFilter(text)}/>

<FlatList
data={filterdData}
keyExtractor={(item, index)=>index.toString()}
ItemSeparatorComponent={ItemSeparatorView}
renderItem={ItemView}/>

</View>
    
)

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f8ff',
      },
    
      itemStyle:{
        padding: 15,
        margin: 3,
        backgroundColor:'white',
        borderRadius: 10,
        color:'black',
        width: '95%',
        alignSelf: 'center'
    
      },
      textInputStyle:{
        margin:5,
        borderColor: '#f0f8ff',
        borderWidth: 1,
        borderRadius:10,
        height: 50,
        color: 'white',
        backgroundColor:'#00bfff',
        textAlign: 'center',
        fontSize: 17
    }
    
});
export default SearchBar;