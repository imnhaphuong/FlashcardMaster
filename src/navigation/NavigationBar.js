import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from '../screens/home_detail/Home_Screen';
import Styles from './style';

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home" component={Homescreen} options={{
          tabBarIcon:({focused}) => (
            <View style={Styles.view}>
              <Image
                source={require("../../assets/images/home.png")} 
                resizeMethod='contain'
                style={{
                  width:50,
                  height:50,
                  tintColor: focused ? '#5856E7' : '#BCBEC0'
                }}/>
            </View>
          )
        }}/>
       <Tab.Screen
        name="class" component={Homescreen} options={{
          tabBarIcon:({focused}) => (
            <View style={Styles.view}>
              <Image
                source={require("../../assets/images/class.png")} 
                resizeMethod='contain'
                style={{
                  width:50,
                  height:50,
                  tintColor: focused ? '#5856E7' : '#BCBEC0'
                }}/>
            </View>
          )
        }}/>
         <Tab.Screen
        name="new" component={Homescreen} options={{
          tabBarIcon:({focused}) => (
            <View style={Styles.view}>
              <Image
                source={require("../../assets/images/new.png")} 
                resizeMethod='contain'
                style={{
                  width:50,
                  height:50,
                  tintColor: focused ? '#5856E7' : '#BCBEC0'
                }}/>
            </View>
          )
        }}/>
         <Tab.Screen
        name="noti" component={Homescreen} options={{
          tabBarIcon:({focused}) => (
            <View style={Styles.view}>
              <Image
                source={require("../../assets/images/noti.png")} 
                resizeMethod='contain'
                style={{
                  width:50,
                  height:50,
                  tintColor: focused ? '#5856E7' : '#BCBEC0'
                }}/>
            </View>
          )
        }}/>
         <Tab.Screen
        name="profile" component={Homescreen} options={{
          tabBarIcon:({focused}) => (
            <View style={Styles.view}>
              <Image
                source={require("../../assets/images/profile.png")} 
                resizeMethod='contain'
                style={{
                  width:50,
                  height:50,
                  tintColor: focused ? '#5856E7' : '#BCBEC0'
                }}/>
            </View>
          )
        }}/>
    </Tab.Navigator>
  );
}
export default function Tabs() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}