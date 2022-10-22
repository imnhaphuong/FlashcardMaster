import {
  Text,
  Pressable,
  View,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import React from "react";
import styles from "./style";
import Members from "../../../assets/images/members.svg";

const ClassCard = (props) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        console.log("press on the class card has id = " + props.id);
        props.navigation.navigate("ClassDetail", { id: props.id });
      }}
    >
      <View style={styles.wrapClassCard}>
        {props.mode ? (
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

        <Text style={styles.className}>{props.name}</Text>
        <View style={styles.wrapCreator}>
          <Image
            style={styles.avatarCreator}
            source={require("../../../assets/images/avt-default.png")}
          />
          <Text style={styles.usernameCreator}>{props.creator}</Text>
        </View>
        <View style={styles.wrapMembers}>
          <Members />
          <Text style={styles.numberOfMembers}>
            {props.number_of_members} thành viên
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ClassCard;
