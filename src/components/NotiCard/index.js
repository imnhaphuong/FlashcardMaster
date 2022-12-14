import {
  Text,
  TouchableOpacity,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import React, { useEffect, useState } from "react";
import styles from "./style";
import Remove from "../../../assets/images/noti/remove.svg";
import handleDeleteNotification from "../../../getdata/notifications/handleDeleteNotification";
import { useSelector } from "react-redux";
import getUserById from "../../../getdata/getUserById";
import { useNavigation } from "@react-navigation/native";

const NotiCard = (props) => {
  const navigation = useNavigation();
  const { user } = useSelector((state) => state.user);
  const [sender, setSender] = useState([]);
  let img = ""
  let jcode =""
  if (JSON.parse(props.noti.pushData).hasOwnProperty("sender")) {
    getUserById(setSender, JSON.parse(props.noti.pushData).sender);
    img = sender.avatar;
  }
  if (JSON.parse(props.noti.pushData).hasOwnProperty("img")) {
    img = JSON.parse(props.noti.pushData).img;
  }
  if (JSON.parse(props.noti.pushData).hasOwnProperty("jcode")) {
    jcode = JSON.parse(props.noti.pushData).jcode;
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        console.log(
          "press on the noti card has id = " + props.noti.notification_id
        );
        navigation.push("class_detail", {
          jcode: jcode,
        });
      }}
    >
      <View style={styles.wrapNotiCard}>
        <View style={{ width: "15%" }}>
          <Image
            style={{
              width: 40,
              height: 40,
              borderRadius: 100,
            }}
            source={{ uri: img }}
          />
        </View>
        <TouchableOpacity
          style={styles.remove}
          onPress={() => {
            console.log(user._id + " " + props.noti.notification_id);
            handleDeleteNotification(user._id, props.noti.notification_id);
          }}
        >
          <Remove />
        </TouchableOpacity>
        <View style={{ width: "85%", justifyContent: "space-between" }}>
          <Text style={styles.title}>{props.noti.title}</Text>
          <Text style={styles.message}>{props.noti.message}</Text>
          <Text style={styles.date}>{props.noti.date}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default NotiCard;
