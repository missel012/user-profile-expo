import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import PasswordRecoveryScreen from '../Screens/PasswordRecoveryScreen';
import ProfileScreen from '../Screens/ProfileScreen'; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
    <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}} />
    <Stack.Screen name="PasswordRecovery" component={PasswordRecoveryScreen} options={{headerShown: false}} />
    <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}} />
  </Stack.Navigator>
  
  );
}
