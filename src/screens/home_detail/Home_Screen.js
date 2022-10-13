import React from "react";
import { Text, Image, View, StatusBar } from "react-native";
import styles from "./style";
import { ScrollView } from "react-native";
import Coin from "../../../assets/images/coin.svg";
import Thegirl from "../../../assets/images/Thegirl.svg";
import { SafeAreaView } from "react-native";
import Topic from "../../components/Topic";
import Search from "../../../assets/images/Search.svg";
import colors from "../../../contains/colors";

export default function Home_Screen() {
  const coinPrice = "200";
  return (
    <SafeAreaView style={styles.container}>
     <StatusBar
        animated={true}
        backgroundColor={colors.white}
        barStyle={"dark-content"}
        showHideTransition={"fade"}
      />
      <View style={styles.header}>
        <Image
          style={styles.landscape}
          source={require("../../../assets/images/landscape.png")}
        />
        <View style={styles.coin_display}>
          <Coin />
          <Text style={styles.price}>{coinPrice}</Text>
        </View>
      </View>
      <ScrollView style={styles.scroolview}>
        <View style={styles.welcome}>
          <View style={styles.group21}>
            <Text style={styles.hello}>
              Chào cậu, <Text style={styles.helloname}>Jessica</Text>{" "}
            </Text>
          </View>
          <View style={styles.Thegirl}>
            <Thegirl style={styles.ThegirlItem} />
          </View>
        </View>
        <View>
          <Topic/>
          <Topic/>
        </View>
      </ScrollView>
      <View style={styles.search}>
        <View style={styles.searchicon}>
          <Search/>
        </View>
      </View>
    </SafeAreaView>
  );
}
