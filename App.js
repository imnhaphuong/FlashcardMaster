import React, { useState, useEffect } from "react";
import { Link, NavigationContainer } from "@react-navigation/native";
import SignUpScreen from "./src/screens/sign_up/SignUpScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ClassDetailScreen from "./src/screens/class_detail";
import Home_Screen from "./src/screens/home_detail/Home_Screen";
import NavigationBar from "./src/components/navigation/NavigationBar";
import SignInScreen from "./src/screens/sign_in/SignInScreen";
import { View, Text, Button } from "react-native";
import ClassScreen from "./src/screens/class";
import * as Linking from "expo-linking";
import linking_config from "./linking-config";
import dynamicLinks from "@react-native-firebase/dynamic-links";

const Stack = createNativeStackNavigator();

export default function App() {
  const linking = {
    prefixes: ['https://flashcardmaster.page.link', Linking.createURL("/")],
    linking_config,
  };

  const [data, setdata] = useState(null);

  function handleDeepLink(event) {
    let data = Linking.parse(event.url);
    setdata(data);
  }
  const url = Linking.useURL();

  console.log("url"+url );

  useEffect(() => {
    async function getInitalURL() {
      const initialURL = await Linking.getInitialURL();
      if (initialURL) setdata(Linking.parse(initialURL));
    }

    Linking.addEventListener("url", handleDeepLink);
    if (!data) {
      getInitalURL();
    }

    return () => {
      Linking.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Stack.Navigator
        screenOptions={{
          // tắt header
          headerShown: false,
        }}
        initialRouteName="nav"
      >
        <Stack.Screen name="class" component={ClassScreen} />
        <Stack.Screen name="nav" component={NavigationBar} />
        <Stack.Screen name="home" component={Home_Screen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="ClassDetail" component={ClassDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
