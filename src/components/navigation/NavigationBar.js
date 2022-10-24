import React, { useEffect, useState } from 'react';
import styles from './style';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home_Screen from '../../screens/home_detail/Home_Screen';
import colors from '../../../contains/colors';
import Home from '../../../assets/images/home.svg';
import HomeFocus from '../../../assets/images/homefocus.svg'
import Class from '../../../assets/images/class.svg';
import ClassFocus from '../../../assets/images/classfocus.svg';
import New from '../../../assets/images/new.svg';
import NewFocus from '../../../assets/images/newfocus.svg';
import Noti from '../../../assets/images/noti.svg';
import NotiFocus from '../../../assets/images/notifocus.svg';
import Profile from '../../../assets/images/profile.svg';
import ProfileFocus from '../../../assets/images/profilefocus.svg';
import { View } from 'react-native';
// import ClassDetailScreen from '../../screens/class_detail';
import ClassScreen from '../../screens/class';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();
export default function NavigationBar() {
  const [currentScreen, setcurrentScreen] = useState("class");
  const [userId, setUserId] = useState('');
  const [type, setType] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('userId').then(result => {
      setUserId(result);
    })

    console.log("userId", userId);
  }, [])
  async function fetchData() {
    const data = {
      _id: userId,
    }
    console.log("userId2345", userId);
    try {
      const result = await fetch("http://192.168.43.158:3000/api/users/id", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      }).then(res => res.json()
      )
      console.log("resultNavi", result);
      setType(result.type);
      console.log("type---",type);
    } catch (err) {
      console.log(err);
    }
  }
  if (userId !== '') {
    fetchData();
    if (type === 1) {
      return (
        <Tab.Navigator screenOptions={
          {
            tabBarStyle: { height: 80 },
          }
        }>
          <Tab.Screen
            name="home" component={Home_Screen} options={{
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
          <Tab.Screen
            name="new"
            component={Home_Screen}
            options={{
              headerShown: false,
              tabBarShowLabel: false,

              tabBarIcon: ({ focused }) => (
                <View style={styles.view}>
                  {focused ? <NewFocus /> : <New />}
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
            name="noti"
            component={Home_Screen}
            options={{
              headerShown: false,
              tabBarShowLabel: false,

              tabBarIcon: ({ focused }) => (
                <View style={styles.view}>
                  {focused ? <NotiFocus /> : <Noti />}
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
            component={Home_Screen}
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
    } else {
      return (
        <Tab.Navigator screenOptions={
          {
            tabBarStyle: { height: 80 },
          }
        }>
          <Tab.Screen
            name="home" component={Home_Screen} options={{
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
          <Tab.Screen
            name="new"
            component={Home_Screen}
            options={{
              headerShown: false,
              tabBarShowLabel: false,

              tabBarIcon: ({ focused }) => (
                <View style={styles.view}>
                  {focused ? <NewFocus /> : <New />}
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
            name="noti"
            component={Home_Screen}
            options={{
              headerShown: false,
              tabBarShowLabel: false,

              tabBarIcon: ({ focused }) => (
                <View style={styles.view}>
                  {focused ? <NotiFocus /> : <Noti />}
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
            component={Home_Screen}
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
  }




}