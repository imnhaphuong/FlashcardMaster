import React from "react";
import {
    Text,
    Image,
    View,
    StatusBar,
    ScrollView,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
    SegmentedControlTab,
} from "react-native";
import { useState } from "react";
import styles from "./style";
import Back_green from "../../../assets/images/header/back_green.svg";
import Tick from "../../../assets/images/header/Tick.svg";

const Setting_Screen = (props) => {
    return (
        <SafeAreaView>
            <View>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => {
                        props.navigation.goBack()
                    }}>
                        <Back_green />
                    </TouchableOpacity>
                    
                    <Text style={styles.title}>Cài đặt</Text>
                    <Tick style={styles.tick}/>
                    {/* <TouchableOpacity onPress={() => {
                        props.navigation.goBack()
                    }}>
                        
                    </TouchableOpacity> */}
                </View>
            </View>
        </SafeAreaView>
    )
}
export default Setting_Screen;