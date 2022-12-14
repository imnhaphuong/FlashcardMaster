import React from "react";
import UnitCard from "../UnitCard";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Styles from "./styles";

const TopicCard = (props) => {
  const UNIT_DATA = props.units;
  const myRenderItem = ({ item }) => (
    <>
      <UnitCard
        unit={item}
      />
    </>
  );
  return (
    <SafeAreaView>
      <View style={{ marginTop: 15 }}>
        <View style={Styles.topic}>
          <Text style={Styles.titletopic}>{props.name}</Text>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate("TopicReadMore", { name: props.name })
            }
          >
            <Text style={Styles.readmore}>Xem thêm</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.wrapUnits}>
          <FlatList
            data={UNIT_DATA}
            renderItem={myRenderItem}
            numColumns={2}
            keyExtractor={(item) => item._id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default TopicCard;
