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
  const topic_title = props.name ? props.name : "Topic";
  const readmore = "Xem thêm";
  const UNIT_DATA = props.units;

  const myRenderItem = ({ item }) => (
    <>
      <UnitCard
        unit_name={item.unitName}
        creator={item.creator}
        username={item.username}
        number_of_cards={item.flashcards.length}
      />
    </>
  );
  return (
    <SafeAreaView>
      <View style={{ marginTop: 15 }}>
        <View style={Styles.topic}>
          <Text style={Styles.titletopic}>{topic_title}</Text>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate("TopicReadMore", { name: props.name })
            }
          >
            <Text style={Styles.readmore}>{readmore}</Text>
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
