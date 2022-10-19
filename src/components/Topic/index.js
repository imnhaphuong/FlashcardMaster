import React from "react";
import UnitCard from "../../components/UnitCard";
import { FlatList, Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import Styles from "./styles";
//import getdataTopic from "./getdataTopic";
import getDataUnit from "./getdataUnit";
import { useState } from "react";

const Topic = (props) => {
  const topic_name = props.topic_name ? props.topic_name : "Topic";

  const [UNIT_DATA, setdata] = useState([]);
  getDataUnit(setdata);

  const myRenderItem = ({ item }) => (
    <UnitCard
      unit_name={item.unit_name}
      username={item.username}
      number_of_cards={item.number_of_cards}
    />
  )

  return (
    <SafeAreaView>
      <View style={{ marginTop: 15 }}>
        <View style={Styles.topic}>
          <Text style={Styles.titletopic}>{topic_name}</Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('TopicReadMore')}>
            <Text style={Styles.readmore}>Xem thêm</Text>
          </TouchableOpacity>

        </View>
        <View style={Styles.wrapUnits}>
          <FlatList
            data={UNIT_DATA.reverse()}
            renderItem={myRenderItem}
            numColumns={2}
            //keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
export default Topic