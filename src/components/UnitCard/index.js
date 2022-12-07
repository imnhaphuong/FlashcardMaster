import { Text, View, Image, Pressable } from "react-native";
import React from "react";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

const UnitCard = ({unit}) => {
  // const id = props.id;
  // const creator = props.creator 
  // const number_of_cards = `${props.number_of_cards} thẻ`;
  // const unit_name = props.unit_name 
  const navigation = useNavigation()

  return (
    <Pressable
      style={styles.wrapUnitCard}
      onPress={() => {
        // console.log("press on the unit card has id = " + id);
        navigation.navigate("unit_detail", {
          id: unit._id,
        });
      }}
    >
      <Text style={styles.unitName}>{unit.unitName}</Text>
      <Text style={styles.numberOfCards}>{unit.flashcards.length} thẻ</Text>
      <View style={styles.wrapUser}>
        <Image
          style={styles.avatar}
          source={{uri: unit.creator.avatar}}
        />
        <Text style={styles.username}>{unit.creator.fullname}</Text>
      </View>
    </Pressable>
  );
};

export default UnitCard;
