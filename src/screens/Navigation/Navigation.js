import React,{useContext} from 'react';
import LogInPage from '../LogInPage/LogInPage';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from '../HomePage/HomePage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from '../../context/AuthContext';
import {View,ActivityIndicator} from 'react-native'

const Stack = createNativeStackNavigator();

function Navigation() {
   
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName={LogInPage}>
            <Stack.Screen name="LogInPage" component={LogInPage}/>
            <Stack.Screen name="HomePage" component={HomePage}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;