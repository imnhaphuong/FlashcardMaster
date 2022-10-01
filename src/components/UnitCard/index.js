import { Text, View, Image } from "react-native";
import React, { Component } from "react";
import styles from "./style";

const UnitCard = (props) => {
  const unitName = props.unitName ? props.unitName : "Bài 2";
  const numberOfCards = props.numberOfCards
    ? `${props.numberOfCards} thẻ`
    : "12 thẻ";
  // const avatar = props.avatar ? :
  const username = props.username ? props.username : "user100233";

  return (
    <View style={styles.wrapUnitCard}>
      <View style={styles.unitCard}>
        <Text style={styles.unitName}>{unitName}</Text>
        <Text style={styles.numberOfCards}>{numberOfCards}</Text>
        <View style={styles.wrapUser}>
          <Image
            style={styles.avatar}
            source={require("../../../assets/images/avt-default.png")}
          />
          <Text style={styles.username}>{username}</Text>
        </View>
      </View>
    </View>
  );
};

export default UnitCard;
