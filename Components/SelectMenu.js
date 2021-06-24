import SelectBox from 'react-native-multi-selectbox';
import React, {useState, useEffect} from 'react';
import { Image,StyleSheet, Text, TextInput, View, ActivityIndicator, SafeAreaView, TouchableHighlight, Animated, FlatList} from 'react-native';
import { color } from 'react-native-reanimated';
// import { onChange } from 'react-native-reanimated';

const K_OPTIONS = [
    { 
    item: 'Search by',
    id: '0'
    },
    {
      item: 'Name',
      id: '1',
    },
    {
      item: 'LastName',
      id: '2',
    },
    {
      item: 'Provider',
      id: '2',
    },
    {
      item: 'Location',
      id: '4',
    }
  ]
const SelectMenu = () => 
{
    const [selectedValue, setSelectedValue] = useState({});


    

return (
    
    <View style={styles.container}>

    <SelectBox
    label = " "
    options = {K_OPTIONS}
    value ={selectedValue}
    onChange={onChange()}
    hideInputFilter={true}
    labelStyle={{colors: 'transparent'}}
    containerStyle={styles.select}
    optionContainerStyle ={styles.optionLabelStyle}
    selectedItemStyle ={{color: 'white', textAlign: 'center'}}
    arrowIconColor='white'
    />

    </View>
)




function onChange(){
    return (val)=> setSelectedValue(val)
}
};
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#f0f8ff',
        margin: 3,
        justifyContent: 'center'
    
      },
    select:{
        margin:3,
        borderColor: '#f0f8ff',
        borderWidth: 1,
        borderRadius:10,
        height: 50,
        color: 'white',
        backgroundColor:'#00bfff',
        width: '98%',
        alignItems: 'center',


    },
    optionLabelStyle:{
        margin:3,
        borderColor: '#f0f8ff',
        borderWidth: 1,
        borderRadius:10,
        height: 50,
        backgroundColor:'white',
        width: '98%',
        justifyContent: 'center',
    }
    
});
export default SelectMenu;