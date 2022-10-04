import React from "react";
import { View } from "react-native";
import NavigationBar from "./src/components/navigation/NavigationBar"; 
import { StyleSheet } from "react-native";

export default function Navi(){
    return(
        <View style={Styles.navigation}>
            <NavigationBar/>
        </View>
    );
}
const Styles = StyleSheet.create({
    navigation:{
        flexDirection: 'column',
        flex: 1
    }
});