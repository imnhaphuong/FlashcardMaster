import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import SignUpScreen from './src/screens/sign_up/SignUpScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          // tắt header
          headerShown: false,
        }}>
          <Stack.Screen name="SignUp" component={SignUpScreen} />

        </Stack.Navigator>
      </NavigationContainer>
  );
}


