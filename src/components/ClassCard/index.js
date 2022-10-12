import { Text, Pressable, View, TouchableWithoutFeedback,Image} from "react-native";
import React from "react";
import styles from "./style";
import Members from "../../../assets/images/members.svg";

const ClassCard = (props) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        console.log("press a class card");
        props.navigation.navigate("ClassDetail",
        {
          id: props.id
        }
        );
      }}
    >
      <View style={styles.wrapClassCard}>
        <Text style={styles.className}>{props.class_name}</Text>
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
