import React, {useState} from 'react';
import {View, Text, TextInput,StyleSheet, SafeAreaView, TouchableOpacity, Picker} from 'react-native';
// import SelectMenu from '../Components/SelectMenu'
const Select = ({navigation}) => 
{
const [selectedValue, setSelectedValue] = useState("Select by specialty")
return (
  <SafeAreaView style={styles.Select}>
<View style={styles.container}>
<Picker 
selectedValue ={selectedValue}
style={{height: 50, width: 200, }}
onValueChange={(itemValue, itemIndex)=> setSelectedValue(itemValue)}>
  <Picker.Item label ='Select by specialty' value ='select'/>
</Picker>


{/* <TouchableOpacity
      style={styles.Option1} onPress={()=>navigation.navigate('Results')
    }>
              <Text style={styles.Text}>Select by specialty</Text>
      </TouchableOpacity> */}
    </View>
      <TouchableOpacity
      style={styles.Option2} onPress={()=>navigation.navigate('Results')
    }>
         {/* <TextInput
    style={styles.textInputStyle}
    value={search}
    placeholder="Search by provider's name"
    placeholderTextColor='white'
    underlineColorAndroid="transparent"
    onChangeText={(text)=>searchFilter(text)}/> */}
              <Text style={styles.Text}>Provider's name</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.Option3} onPress={()=>navigation.navigate('Results')
    }>
              <Text style={styles.Text}>Select by Location</Text>
      </TouchableOpacity>

    </SafeAreaView>
)

};
const styles = StyleSheet.create({

    Select:{
        backgroundColor: 'white',
        alignItems: 'center',
        flex:1,
        justifyContent:'center',
    },
    Option1:{
      margin: 10,
      borderRadius: 15,
      backgroundColor: '#000033',
      width: '97%',
      height: '22%',
      justifyContent: 'center',
    },
    Option2:{
      margin: 10,
      borderRadius: 15,
      backgroundColor: '#008ae6',
      width: '97%',
      height: '22%',
      justifyContent: 'center',
    },
    Option3:{
      margin: 10,
      borderRadius: 15,
      backgroundColor: '#ff9900',
      width: '97%',
      height: '22%',
      justifyContent: 'center',
    },
    Text: {
      fontSize: 40,
      textAlign: 'center',
      fontFamily: 'Roboto',
      color: 'white',
    },
    container:{
      // flex: 1,
      // paddingTop: 40,
      // alignItems:'center' 
       }
    
});
export default Select;