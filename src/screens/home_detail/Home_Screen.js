import React from "react";
import { Text, Image, View } from "react-native";
import Styles from "./style";
import { ScrollView } from "react-native";
import Coin from '../../../assets/images/coin.svg';
import Thegirl from '../../../assets/images/Thegirl.svg';
import { SafeAreaView } from "react-native";
import Topic from "../../components/Topic";

export default function Home_Screen() {
    const coinPrice = "200";
    return (
        <SafeAreaView style={Styles.container}>
            <View style={Styles.header}>
                <Image
                    style={Styles.landscape}
                    source={require("../../../assets/images/landscape.png")} />
                <View style={Styles.coin_display}>
                    <Coin />
                    <Text style={Styles.price}>{coinPrice}</Text>
                </View>
            </View>
            <ScrollView style={Styles.scroolview}>
                <View style={Styles.welcome}>
                    <View style={Styles.group21}>
                        <Text style={Styles.hello}>Chào cậu, <Text style={Styles.helloname}>Jessica</Text> </Text>
                    </View>
                    <View style={Styles.Thegirl}>
                        <Thegirl style={Styles.ThegirlItem} />
                    </View>
                </View>
                <View>
                    <Topic/>
                    <Topic/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}