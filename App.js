import React from 'react';
import {View, StyleSheet, Alert, TextInput,Button,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Principal from './src/Principal';
import Nosotros from './src/Nosotros';
import Datos from './src/Datos';
//Nombre: Olvera González Abraham
//Grupo: TI02SM-18
//Pantalla: App


const Stack = createStackNavigator();

const App:  () => React$Node = () =>{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Principal">
        <Stack.Screen 
        name="Principal" 
        component={Principal} />
        <Stack.Screen 
        name="Nosotros" 
        component={Nosotros} />
        <Stack.Screen 
        name="Datos" 
        component={Datos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;