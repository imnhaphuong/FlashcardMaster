import * as React from 'react';
import styles from './style';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home_Screen from '../../screens/home_detail/Home_Screen';


const Tab = createBottomTabNavigator();
export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home" component={Home_Screen} options={{
          tabBarIcon:({focused}) => (
            <View style={styles.view}>
              <Image
                source={require("../../../assets/images/home.png")} 
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
        name="class" component={Home_Screen} options={{
          tabBarIcon:({focused}) => (
            <View style={styles.view}>
              <Image
                source={require("../../../assets/images/class.png")} 
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
        name="new" component={Home_Screen} options={{
          tabBarIcon:({focused}) => (
            <View style={styles.view}>
              <Image
                source={require("../../../assets/images/new.png")} 
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
        name="noti" component={Home_Screen} options={{
          tabBarIcon:({focused}) => (
            <View style={styles.view}>
              <Image
                source={require("../../../assets/images/noti.png")} 
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
        name="profile" component={Home_Screen} options={{
          tabBarIcon:({focused}) => (
            <View style={styles.view}>
              <Image
                source={require("../../../assets/images/profile.png")} 
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
// export default function NavigationBar() {
//   return (
//     <NavigationContainer>
//       <MyTabs />
//     </NavigationContainer>
//   );
// }