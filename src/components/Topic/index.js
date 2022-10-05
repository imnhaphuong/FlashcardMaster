import React from "react";
import UnitCard from "../../components/UnitCard";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import colors from "../../../contains/colors";

const topicname = "Topic";
export default function Topic() {
  return (
    <View style={{marginTop: 15}}>
      <View style={Styles.topic}>
        <Text style={Styles.titletopic}>{topicname}</Text>
        <Text style={Styles.readmore}>Xem thêm</Text>
      </View>
      <View style={Styles.unitcard}>
        <UnitCard />
        <UnitCard />
      </View>
      <View style={Styles.unitcard}>
        <UnitCard />
        <UnitCard />
      </View>
    </View>
  );
}
const Styles = StyleSheet.create({
  topic: {
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20
  },
  titletopic: {
    color: '#2D005B',
    fontSize: 16
  },
  readmore: {
    color: colors.violet,
    fontSize: 14,
  },
  unitcard: {
    flexDirection: 'row',
    marginHorizontal: 20
  }
});