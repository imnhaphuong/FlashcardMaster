import React from "react";
import UnitCard from "../../components/UnitCard";
import { FlatList, Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import Styles from "./styles";
//import getdataTopic from "./getdataTopic";
//import getDataUnit from "./getdataUnit";
import { useState } from "react";
//import { useNavigation } from '@react-navigation/native';

const Topic = (props) => {

  // const [TOPIC_DATA, setdata] = useState([]);
  // getdataTopic(setdata);

  const myRenderItem = ({ item }) => (
    <UnitCard
      unit_name={item.unitName}
      username={item.username}
      number_of_cards={item.number_of_cards}
    />
  )
  return (
    <SafeAreaView>
      <View style={{ marginTop: 15 }}>
        <View style={Styles.topic}>
          <Text style={Styles.titletopic}>Topic</Text>
          <TouchableOpacity
            onPress = {() => props.navigation.navigate('TopicReadMore')}
          >
            <Text style={Styles.readmore}>Xem thêm</Text>
          </TouchableOpacity>

        </View>
        <View style={Styles.wrapUnits}>
          {/* <FlatList
            data={TOPIC_DATA}
            renderItem={myRenderItem}
            numColumns={2}
          //keyExtractor={(item) => item.id}
          /> */}
        </View>
      </View>
    </SafeAreaView>
  );
}
export default Topic