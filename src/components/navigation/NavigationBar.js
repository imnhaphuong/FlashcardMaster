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
import ClassDetailScreen from '../../screens/class_detail';
import SysModal from '../SysModal/SysModal';

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="home" component={Home_Screen} options={{
          tabBarShowLabel:false,
          tabBarIcon:({focused}) => (
            <View style={styles.view}>
              <Home stroke ={focused ? colors.violet : colors.graySecondary}/>
            </View>
          )
        }}/>   
       <Tab.Screen
        name="class" component={ClassDetailScreen} options={{
          tabBarShowLabel:false,
          tabBarIcon:({focused}) => (
            <View style={styles.view}>
               <Class stroke ={focused ? colors.violet : colors.graySecondary}/>
            </View>
          )
        }}/>
         <Tab.Screen
        name="new" component={Home_Screen} options={{
          tabBarShowLabel:false,
          tabBarIcon:({focused}) => (
            <View style={styles.view}>
               <New stroke ={focused ? colors.violet : colors.graySecondary}/>
            </View>
          )
        }}/>
         <Tab.Screen
        name="noti" component={Home_Screen} options={{
          tabBarShowLabel:false,
          tabBarIcon:({focused}) => (
            <View style={styles.view}>
               <Noti stroke ={focused ? colors.violet : colors.graySecondary}/>
            </View>
          )
        }}/>
         <Tab.Screen
        name="profile" component={Home_Screen} options={{
          tabBarShowLabel:false,
          tabBarIcon:({focused}) => (
            <View style={styles.view}>
               <Profile stroke ={focused ? colors.violet : colors.graySecondary}/>
            </View>
          )
        }}/>
    </Tab.Navigator>
  );
}
export default function NavigationBar() {
  return (
    <NavigationContainer independent ={true}>
      <MyTabs/>
    </NavigationContainer>
  );
}