import { Text, View, Image, Pressable } from "react-native";
import React from "react";
import styles from "./style";

const UnitCard = (props) => {
  const unit_name = props.unit_name ? props.unit_name : "Bài 2";
  const number_of_cards = props.number_of_cards
    ? `${props.number_of_cards} thẻ`
    : "12 thẻ";
  // const avatar = props.avatar ? :
  const username = props.username ? props.username : "user100233";

  return (
    <Pressable style={styles.wrapUnitCard} onPress={() => {props.navigation.navigate('unit_detail')}} >
      <Text style={styles.unitName}>{unit_name}</Text>
      <Text style={styles.numberOfCards}>{number_of_cards}</Text>
      <View style={styles.wrapUser}>
        <Image
          style={styles.avatar}
          source={require("../../../assets/images/avt-default.png")}
        />
        <Text style={styles.username}>{username}</Text>
      </View>
    </Pressable>
  );
};

export default UnitCard;
