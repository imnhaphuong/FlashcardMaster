import {
  Text,
  Pressable,
  View,
  TouchableWithoutFeedback,
  Image,
} from "react-native";

import React, { useState } from "react";
import styles from "./style";
import Members from "../../../assets/images/members.svg";

const ClassCard = (props) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        console.log("press on the class card has jcode = " + props.jcode);
        props.navigation.navigate("class_detail", {
          jcode: props.jcode,
        });
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
            source={{uri: props.creator.avatar}}
          />
          <Text style={styles.usernameCreator}>{props.creator.fullname}</Text>
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
