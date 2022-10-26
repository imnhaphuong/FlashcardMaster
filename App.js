import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import SignUpScreen from "./src/screens/sign_up/SignUpScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ClassDetailScreen from "./src/screens/class_detail";
import Home_Screen from "./src/screens/home_detail/Home_Screen";
import SignInScreen from "./src/screens/sign_in/SignInScreen";
import Search_Screen from "./src/screens/search/Search_Screen";
import TopicReadMore from "./src/screens/readmore";
import VerifyEmailScreen from "./src/screens/verify_email/VerifyEmailScreen";
import NavigationBar from "./src/components/navigation/NavigationBar";
import {Text} from "react-native";
import ClassScreen from "./src/screens/class";
import * as Linking from "expo-linking";
import linking_config from "./linking-config";
import dynamicLinks from "@react-native-firebase/dynamic-links";
import SignInOption from "./src/screens/sign_in/SignInOption";
import CreateUnitScreen from "./src/screens/create_unit/CreateUnitScreen";

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
      Linking.removeEventListener("click", handleDeepLink);
    };
  }, []);

  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Stack.Navigator
        screenOptions={{
          // tắt header
          headerShown: false,
        }}
        initialRouteName="CreateUnit"
      >
        <Stack.Screen name="class" component={ClassScreen} />
        <Stack.Screen name="nav" component={NavigationBar} />
        <Stack.Screen name="home" component={Home_Screen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="ClassDetail" component={ClassDetailScreen} />
        <Stack.Screen name="Search" component={Search_Screen}/>
        <Stack.Screen name="TopicReadMore" component={TopicReadMore}/>
        <Stack.Screen name="VerifyEmail" component={VerifyEmailScreen} />
        <Stack.Screen name="CreateUnit" component={CreateUnitScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
