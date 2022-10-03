import React from "react";
import { Text , Image , View } from "react-native";
import Styles from "./style";
// import Tabs from "../../navigation/NavigationBar";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";


export default function Home_Screen () {
    const coinPrice = "200";
    const navigation = useNavigation();
    return (
        <View>
            <View style={Styles.boderbottom}>
                    <Image
                        style={Styles.landscape}
                        source={require("../../../assets/images/landscape.png")}/>
                    <View style={Styles.coin_display}>
                        <Image 
                            style={Styles.coin}
                            source={require("../../../assets/images/coin.png")}/>
                        <Text style={Styles.price}>{coinPrice}</Text>
                    </View>
            </View>
                <View style={Styles.oke}>
                    <View style={Styles.wellcome}>
                        <View style={Styles.group21}>
                            <View style={Styles.group22}>
                                <View style={Styles.rectangle}></View>
                                <Text style={Styles.hello}>Chào cậu, <Text style={{color:'#5856E7'}}>Jessica</Text> </Text>
                            </View>
                            <Image
                                source={require("../../../assets/images/thegirl.png")}
                                style={Styles.thegirl}/>
                        </View>
                        <Image
                            source={require("../../../assets/images/chat-yel.png")}
                            style={Styles.chatyel}/>
                        <Image
                            source={require("../../../assets/images/chat-vio.png")}
                            style={Styles.chatvio}/>
                    </View>
                </View>
        </View>
     );
}