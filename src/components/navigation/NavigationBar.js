import React, { useState } from 'react';
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

const Tab = createBottomTabNavigator();
export default function NavigationBar() {
  const [currentScreen, setcurrentScreen] = useState("class");

  return (
    <Tab.Navigator screenOptions={
      {tabBarStyle: {height: 80},
    }
    }>
      <Tab.Screen 
        name="home" component={Home_Screen} options={{
          tabBarShowLabel:false,
          //tabBarStyle: {width: 100},
          headerShown: false,
          tabBarIcon:({focused}) => (
            <View style={styles.view}>
             {focused ? <HomeFocus/> : <Home/>}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="class"
        component={ClassScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.view}>
             {focused ? <ClassFocus/> : <Class/>}
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
          tabBarIcon: ({ focused }) => (
            <View style={styles.view}>
              {focused ? <NewFocus/> : <New/>}
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
          tabBarIcon: ({ focused }) => (
            <View style={styles.view}>
              {focused ? <NotiFocus/> : <Noti/>}
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
          tabBarIcon: ({ focused }) => (
            <View style={styles.view}>
              {focused ? <ProfileFocus/> : <Profile/>}
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
