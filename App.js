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
import NavigationBar from "./src/components/Navigation/NavigationBar";
import { Text } from "react-native";
import ClassScreen from "./src/screens/class";
import * as Linking from "expo-linking";
import linking_config from "./linking-config";
import dynamicLinks from "@react-native-firebase/dynamic-links";
import { Provider } from "react-redux";
import { store } from './src/redux/store'
import * as Font from 'expo-font';
import AppLoading from "expo-app-loading";
import UnitDetail from "./src/screens/unit_detail";
import CreateUnitScreen from "./src/screens/create_unit/CreateUnitScreen";
import ImportUnit from "./src/screens/imp_unit";
import UpdateUnitScreen from "./src/screens/update_unit/UpdateUnitScreen";
import Profile_Screen from "./src/screens/profile/Profile_Screen";
import Setting_Screen from "./src/screens/Setting";
import Changepassword from "./src/screens/change_pasword";
import { storeRoot } from "./src/store/store";

const Stack = createNativeStackNavigator();

const loadAssets = async () =>
  await Font.loadAsync({
    'WorkSans': require('./assets/fonts/WorkSans-Medium.ttf'),
    'WorkSans-Bold': require('./assets/fonts/WorkSans-Bold.ttf'),//fontWeight:700
    'WorkSans-BoldItalic': require('./assets/fonts/WorkSans-BoldItalic.ttf'),
    'WorkSans-Italic': require('./assets/fonts/WorkSans-Italic.ttf'),
    'WorkSans-SemiBold': require('./assets/fonts/WorkSans-SemiBold.ttf'),//fontWeight:500
    'WorkSans-Thin': require('./assets/fonts/WorkSans-Thin.ttf'),
  });


export default function App() {
  const linking = {
    prefixes: ["https://flashcardmaster.page.link", Linking.createURL("/")],
    linking_config,
  };

  const [data, setdata] = useState(null);

  function handleDeepLink(event) {
    let data = Linking.parse(event.url);
    setdata(data);
  }
  const url = Linking.useURL();

  console.log("url" + url);

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

  const [isReady, setIsReady] = useState(false)
  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadAssets}
        onFinish={() => setIsReady(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  // useEffect(() => {
  //   async function loadResourcesAndDataAsync() {
  //     try {
  //       SplashScreen.preventAutoHideAsync();
  //       await Font.loadAsync({
  //         ...FontAwesome.font,
  //         'WorkSans': require('../assets/fonts/WorkSans-Medium.ttf'),
  //       });
  //     } catch (e) {
  //       console.warn(e);
  //     } finally {
  //       await new Promise(resolve => setTimeout(resolve, 2000));
  //       setIsReady(true);
  //       SplashScreen.hideAsync();
  //     }
  //   }
  //   loadResourcesAndDataAsync();
  //   // return isReady;

  // }, []);



  return (
    <Provider store={storeRoot} >
      <Provider store={store}>
        <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
          <Stack.Navigator
            screenOptions={{
              // tắt header
              headerShown: false,
            }}
            initialRouteName="profile"
          >
            <Stack.Screen name="class_detail" component={ClassDetailScreen} />
            <Stack.Screen name="nav" component={NavigationBar} />
            <Stack.Screen name="class" component={ClassScreen} />
            <Stack.Screen name="imp_unit" component={ImportUnit} />
            <Stack.Screen name="home" component={Home_Screen} />
            <Stack.Screen name="sign_up" component={SignUpScreen} />
            <Stack.Screen name="sign_in" component={SignInScreen} />
            <Stack.Screen name="unit_detail" component={UnitDetail} />
            <Stack.Screen name="Search" component={Search_Screen} />
            <Stack.Screen name="TopicReadMore" component={TopicReadMore} />
            <Stack.Screen name="verify_email" component={VerifyEmailScreen} />
            <Stack.Screen name="create_unit" component={CreateUnitScreen} />
            <Stack.Screen name="update_unit" component={UpdateUnitScreen} />

            <Stack.Screen name="profile" component={Profile_Screen} />
            <Stack.Screen name="Setting" component={Setting_Screen} />
            <Stack.Screen name="Changepassword" component={Changepassword} />

          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </Provider>

  );
}
