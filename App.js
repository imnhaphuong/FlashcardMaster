import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import SignUpScreen from "./src/screens/sign_up/SignUpScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ClassDetailScreen from "./src/screens/class_detail";
import Home from "./src/screens/home_detail/Home_Screen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignInScreen from "./src/screens/sign_in/SignInScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          // tắt header
          headerShown: false,
        }}
        initialRouteName="SignIn">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="ClassDetail" component={ClassDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}