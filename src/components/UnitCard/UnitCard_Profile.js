import { Text, View, Image, Pressable } from "react-native";
import React from "react";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

const UnitCardProfile = ({unit}) => {
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
        {unit.mode ? (
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

export default UnitCardProfile;
