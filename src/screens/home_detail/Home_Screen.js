import React from "react";
import { Text , Image , View } from "react-native";
import Styles from "./style";
import Tabs from "../../navigation/Tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function Headercontainer () {
    const titleText = "Flashcard Master";
    const coinPrice = "200";
    return (
        <View style={Styles.bottom}>
            <Text style={Styles.baseText}>
                <Text style={Styles.titleText}>
                  {titleText}
                </Text>
                <View>
                    <Image 
                        style={Styles.coin}
                        source={require("../../../assets/images/coin.png")}>
                    </Image>
                </View>
                <Text numberOfLines={5}>{coinPrice}</Text>
            </Text>
        </View>
     );
}