import { Text, View, StatusBar, SafeAreaView } from "react-native";
import React, { Component } from "react";
import styles from "./style";
import UnitCard from "../../components/UnitCard";

export class ClassDetailScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.titleBar}>
        <View style={styles.wrapUnits}>
          <UnitCard unitName={"Bài 1"} />
          <UnitCard unitName={"Bài 2"} />
          <UnitCard unitName={"Bài 3 this is a long unitname "} />
          <UnitCard unitName={"Bài 4"} />
        </View>
      </SafeAreaView>
    );
  }
}

export default ClassDetailScreen;
