import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, Image } from 'react-native';
import Home from './Screens/Home';
import Select from './Screens/Select';
import Results from './Screens/Results';
// import HomeStack from './routes/homeStack';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  const Stack = createStackNavigator();
  return (
  
    <SafeAreaView style={styles.container} >
   <Image source ={require('./assets/VillageCareMAX.jpg')} />
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Select" component={Select} />  
          <Stack.Screen name="Results" component={Results}/>
      </Stack.Navigator>
    </NavigationContainer>
  
    <Text style={styles.Text}>Provider Directory app</Text>
    </SafeAreaView>
    
  );
}
const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor: 'white',
},
Text:{
  fontSize: 17,
  alignSelf: 'center',
  backgroundColor: 'white'
}
});
