import React, { useEffect, useState } from "react";
import styles from "./style";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home_Screen from "../../screens/home_detail/Home_Screen";
import NotificationsScreen from "../../screens/notifications";
import colors from "../../../contains/colors";
import Home from "../../../assets/images/nab/home.svg";
import HomeFocus from "../../../assets/images/nab/homefocus.svg";
import Class from "../../../assets/images/nab/class.svg";
import ClassFocus from "../../../assets/images/nab/classfocus.svg";
import New from "../../../assets/images/nab/new.svg";
import NewFocus from "../../../assets/images/nab/newfocus.svg";
import Noti from "../../../assets/images/nab/noti.svg";
import NotiFocus from "../../../assets/images/nab/notifocus.svg";
import NotiUnRead from "../../../assets/images/nab/notiunread.svg"
import PressedNotiUnread from "../../../assets/images/nab/pressednotiunread.svg"
import Profile from "../../../assets/images/nab/profile.svg";
import ProfileFocus from "../../../assets/images/nab/profilefocus.svg";
import { View } from "react-native";
// import ClassDetailScreen from '../../screens/class_detail';
import ClassScreen from "../../screens/class";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CreateUnitScreen from "../../screens/create_unit/CreateUnitScreen";
import { useDispatch, useSelector } from "react-redux";
import Profile_Screen from "../../screens/profile/Profile_Screen";
import { getUnreadIndieNotificationInboxCount } from 'native-notify';


const Tab = createBottomTabNavigator();
export default function NavigationBar() {
  const [currentScreen, setcurrentScreen] = useState("class");
  const [type, setType] = useState("");
  const info = useSelector((state) => state.infoUser);
  const [unreadNotificationCount, setUnreadNotificationCount] = useState(0);
  const [userId, setUserId] = useState('')
  AsyncStorage.getItem("userId").then((result) => {
    setUserId(result);
    console.log('user id in nav' + userId);  
  });

  useEffect( () => {
    // let unreadCount =  getUnreadIndieNotificationInboxCount(userId, 5184, 'JScIpkViaeDrlzwDvEdXdh');
    // console.log("unreadCount: ", unreadCount);
    // setUnreadNotificationCount(unreadCount);

  //   AsyncStorage.getItem('userId').then(result => {
  //     setUserId(result);
  //   })
  //   if (userId !== '') {
  //     fetchData();
  //   }
  // }, [userId])
  // async function fetchData() {
  //   const data = {
  //     _id: userId
  //   }
  //   console.log("userId2345", userId);
  //   try {
  //     const url = "http://192.168.43.158:3000/api/users/id";
  //     // const url ="https://flashcard-master.vercel.app/api/users/id";
  //     const result = await fetch(url, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Accept": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     }).then(res => res.json()
  //     )
  //     setType(result.type);
  //   } catch (err) {
  //     console.log(err);
  //   }
  })
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { height: 80 },
      }}
    >
      <Tab.Screen
        name="home"
        component={Home_Screen}
        options={{
          tabBarShowLabel: false,
          //tabBarStyle: {width: 100},
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.view}>
              {focused ? <HomeFocus /> : <Home />}
            </View>
          ),
        }}
      />
      {/* if (type === 1) {
      ( */}
      <Tab.Screen
        name="class"
        component={ClassScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.view}>
              {focused ? <ClassFocus /> : <Class />}
            </View>
          ),
        }}
        listeners={({ navigation, route }) => ({
          focus: (e) => {
            setcurrentScreen(route.name);
          },
        })}
      />
      {/* )} */}
      <Tab.Screen
        name="create_unit"
        component={CreateUnitScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.view}>{focused ? <NewFocus /> : <New />}</View>
          ),
        }}
        listeners={({ navigation, route }) => ({
          tabPress: (e) => {
            e.preventDefault();
            // setcurrentScreen(route.name);
            navigation.push("create_unit");
          },
        })}
      />
      <Tab.Screen
        name="noti"
        component={NotificationsScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,

          tabBarIcon: ({ focused }) => (
            <View style={styles.view}>
              {focused ? 
               (unreadNotificationCount == 0) ? <NotiFocus /> :<PressedNotiUnread />
              :
              (unreadNotificationCount == 0) ? <Noti/> : <NotiUnRead/>}
            </View>
          ),
        }}
        listeners={({ navigation, route }) => ({
          focus: (e) => {
            setcurrentScreen(route.name);
          },
        })}
      />
      <Tab.Screen
        name="profile"
        component={Profile_Screen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,

          tabBarIcon: ({ focused }) => (
            <View style={styles.view}>
              {focused ? <ProfileFocus /> : <Profile />}
            </View>
          ),
        }}
        listeners={({ navigation, route }) => ({
          focus: (e) => {
            setcurrentScreen(route.name);
          },
        })}
      />
    </Tab.Navigator>
  );
}
