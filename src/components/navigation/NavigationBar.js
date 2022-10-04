import * as React from 'react';
import styles from './style';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home_Screen from '../../screens/home_detail/Home_Screen';
import colors from '../../../contains/colors';
import Home from '../../../assets/images/home.svg';
import Class from '../../../assets/images/class.svg';
import New from '../../../assets/images/new.svg';
import Noti from '../../../assets/images/noti.svg';
import Profile from '../../../assets/images/profile.svg';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home" component={Home_Screen} options={{
          tabBarIcon:({focused}) => (
            <View style={styles.view}>
              <Home style={{
                 width:50,
                 height:50,
                tintColor: focused ? colors.violet : colors.graySecondary
              }}/>
            </View>
          )
        }}/>
       <Tab.Screen
        name="class" component={Home_Screen} options={{
          tabBarIcon:({focused}) => (
            <View style={styles.view}>
               <Class style={{
                 width:50,
                 height:50,
                tintColor: focused ? colors.violet : colors.graySecondary
              }}/>
            </View>
          )
        }}/>
         <Tab.Screen
        name="new" component={Home_Screen} options={{
          tabBarIcon:({focused}) => (
            <View style={styles.view}>
               <New style={{
                 width:50,
                 height:50,
                tintColor: focused ? colors.violet : colors.graySecondary
              }}/>
            </View>
          )
        }}/>
         <Tab.Screen
        name="noti" component={Home_Screen} options={{
          tabBarIcon:({focused}) => (
            <View style={styles.view}>
               <Noti style={{
                 width:50,
                 height:50,
                tintColor: focused ? colors.violet : colors.graySecondary
              }}/>
            </View>
          )
        }}/>
         <Tab.Screen
        name="profile" component={Home_Screen} options={{
          tabBarIcon:({focused}) => (
            <View style={styles.view}>
               <Profile style={{
                 width:50,
                 height:50,
                tintColor: focused ? colors.violet : colors.graySecondary
              }}/>
            </View>
          )
        }}/>
    </Tab.Navigator>
  );
}
export default function NavigationBar() {
  return (
    <NavigationContainer independent ={true}>
      <MyTabs />
    </NavigationContainer>
  );
}