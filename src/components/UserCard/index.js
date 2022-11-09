import { Text, View, Image } from "react-native";
import React from "react";
import styles from "./style";
import colors from "../../../contains/colors";
import GroupRemove from "../../../assets/images/group-remove.svg";

const UserCard = (props) => {
  const isCreator = props.isCreator;
  const bg = isCreator ? colors.yellow : colors.white;
  const removeBtn = isCreator ? null : <GroupRemove />;

  return (
    <View
      style={[
        styles.wrapUserCard,
        {
          backgroundColor: bg,
        },
      ]}
    >
      <View style={styles.wrapUser}>
        <Image
          style={styles.avatar}
          source={require("../../../assets/images/avt-default.png")}
        />
        <Text style={styles.username}>user100233</Text>
      </View>
      {removeBtn}
    </View>
  );
};

export default UserCard;
