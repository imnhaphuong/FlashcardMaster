import { View, SafeAreaView, FlatList } from "react-native";
import React from "react";
import styles from "./style";
import UnitCard from "../../components/UnitCard";

const ClassDetailScreen = () => {
  const UNIT_DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      unit_name: "Bài 1",
      number_of_cards: "0",
      username: "user0",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      unit_name: "Bài 2",
      number_of_cards: "10",
      username: "user 1231323",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      unit_name: "Bài 3",
      username: "user 112313",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      unit_name: "Bài 4: this is a long unit name",
      username: "nguyen van a",
    },
  ];

  const myRenderItem = ({ item }) => (
    <UnitCard
      unit_name={item.unit_name}
      username={item.username}
      number_of_cards={item.number_of_cards}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapUnits}>
        <FlatList
          data={UNIT_DATA}
          renderItem={myRenderItem}
          numColumns={2}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default ClassDetailScreen;
