import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import SignUpScreen from "./src/screens/sign_up/SignUpScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ClassDetailScreen from "./src/screens/class_detail";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          // tắt header
          headerShown: false,
        }}
        initialRouteName="ClassDetail"
      >
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ClassDetail" component={ClassDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}