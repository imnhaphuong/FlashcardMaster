import {
  Text,
  Pressable,
  View,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import styles from "./style";
import Members from "../../../assets/images/members.svg";

const ClassCard = ({classData}) => {
  const navigation = useNavigation()
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        console.log("press on the class card has jcode = " + classData.jcode);
        navigation.navigate("class_detail", {
          jcode: classData.jcode,
        });
      }}
    >
      <View style={styles.wrapClassCard}>
        {classData.mode ? (
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
        <Text style={styles.className}>{classData.name}</Text>
        <View style={styles.wrapCreator}>
          <Image
            style={styles.avatarCreator}
            source={{uri: classData.creator.avatar}}
          />
          <Text style={styles.usernameCreator}>{classData.creator.fullname}</Text>
        </View>
        <View style={styles.wrapMembers}>
          <Members />
          <Text style={styles.numberOfMembers}>
            {classData.members.length} thành viên
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ClassCard;
