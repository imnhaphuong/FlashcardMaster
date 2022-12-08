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
  
  const NotiCard = (props) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          console.log("press on the class card has jcode = " + props._id);
        }}
      >
        <View style={styles.wrapNotiCard}>
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
          <Text style={styles.title}>{props.title}</Text>
          <View style={styles.wrapCreator}>
            {/* <Image
              style={styles.avatarCreator}
              source={{uri: props.creator.avatar}}
            /> */}
            <Text style={styles.usernameCreator}>{props.message}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };
  
  export default NotiCard;
  