import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './Components/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import Index from './Components/Index';
import Profile from './Components/Profile';



const Stack = createStackNavigator();



function App() {
 
  return (
   
    <NavigationContainer>
      
      <Stack.Navigator screenOptions={{
    headerShown: false  
  }}
>
        
        <Stack.Screen name="Home" component={SplashScreen} />
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="Profile" component={Profile}
        
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
