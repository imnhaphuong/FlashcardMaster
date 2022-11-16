import { Text, View, Image, Pressable } from "react-native";
import React, { useState } from "react";
import styles from "./style";

const ImpUnitCard = (props) => {
  const id = props.id;
  const mode = props.mode;
  const class_mode = props.class_mode;
  const unit_name = props.unit_name;
  const number_of_cards = `${props.number_of_cards} thẻ`;
  const creator = props.creator;
  const selectedArray = props.selectedArray;
  const [active, setActive] = useState(selectedArray.includes(id));
  const isDisable = class_mode == 1 && mode == 0;

  return (
    <Pressable
      style={[
        styles.wrapUnitCard,
        active ? styles.active : null,
        isDisable ? styles.disabled : null,
      ]}
      onPress={() => {
        if (!isDisable) {
          //push item to selected array if wasn't selected
          if (!active) {
            props.pushItemToSelectedArray(id);
          } else {
            props.removeItemFromSelectedArray(id);
          }
          setActive(!active);
        }
      }}
    >
      <Text style={styles.unitName}>
        {unit_name} + {creator._id}
      </Text>
      {mode ? (
        <Image
          style={styles.tagMode}
          source={require("../../../assets/images/classmode/public.png")}
        />
      ) : (
        <Image
          style={styles.tagMode}
          source={require("../../../assets/images/classmode/private.png")}
        />
      )}
      <Text style={styles.numberOfCards}>{number_of_cards}</Text>
      <View style={styles.wrapUser}>
        <Image style={styles.avatar} source={{ uri: creator.avatar }} />
        <Text style={styles.username}>{creator.fullname}</Text>
      </View>
    </Pressable>
  );
};

export default ImpUnitCard;
