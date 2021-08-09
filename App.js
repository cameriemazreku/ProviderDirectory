import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, Image } from 'react-native';
import Home from './Screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Select from './Screens/Select';
import ResultsOrganization from './Screens/ResultsOrganization';
import ResultsSpecialty from './Screens/ResultsSpecialty';
import ResultsPractitioner from './Screens/ResultsPractitioner';


export default function App() {
  const Stack = createStackNavigator();
  return (

    <SafeAreaView style={styles.container} >
      <Image source={require('./assets/VillageCareMAX.jpg')} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ResultsSpecialty" component={ResultsSpecialty} />
          <Stack.Screen name="ResultsOrganization" component={ResultsOrganization} />
          <Stack.Screen name="Select" component={Select} />
          <Stack.Screen name="ResultsPractitioner" component={ResultsPractitioner} />
        </Stack.Navigator>
      </NavigationContainer>

      <Text style={styles.Text}>Provider Directory app</Text>
    </SafeAreaView>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative'
  },
  Text: {
    fontSize: 17,
    alignSelf: 'center',
    backgroundColor: 'white'
  }
});
