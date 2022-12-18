import { Text, View, Image, Pressable } from "react-native";
import React from "react";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

const UnitCard = ({unit}) => {
  // const id = props.id;
  // const creator = props.creator 
  // const number_of_cards = `${props.number_of_cards} thẻ`;
  // const unit_name = props.unit_name 
  console.log("UNITS", unit);
  const navigation = useNavigation()

  return (
    <Pressable
      style={styles.wrapUnitCard}
      onPress={() => {
        console.log("press on the unit card has id = " + unit._id);
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
          source={{uri: unit.creator.avatar? unit.creator.avatar : "https://media.newyorker.com/photos/5f01e383b975762d612e0ff3/master/w_2560%2Cc_limit/Barasch-Avatar.jpg"}}
        />
        <Text style={styles.username}>{unit.creator.fullname?unit.creator.fullname:"user00" }</Text>
      </View>
    </Pressable>
  );
};

export default UnitCard;
