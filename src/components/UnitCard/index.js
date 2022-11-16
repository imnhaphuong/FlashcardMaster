import { Text, View, Image, Pressable } from "react-native";
import React from "react";
import styles from "./style";

const UnitCard = (props) => {
  const id = props.id;
  const creator = props.creator 
  const number_of_cards = `${props.number_of_cards} thẻ`;
  const unit_name = props.unit_name 

  return (
    <Pressable
      style={styles.wrapUnitCard}
      onPress={() => {
        console.log("press on the unit card has id = " + id);
        props.navigation.navigate("unit_detail", {
          id: id,
        });
      }}
    >
      <Text style={styles.unitName}>{unit_name}</Text>
      <Text style={styles.numberOfCards}>{number_of_cards}</Text>
      <View style={styles.wrapUser}>
        <Image
          style={styles.avatar}
          source={{uri: creator.avatar}}
        />
        <Text style={styles.username}>{creator.fullname}</Text>
      </View>
    </Pressable>
  );
};

export default UnitCard;
