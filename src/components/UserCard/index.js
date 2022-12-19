import { Text, View, Image, TouchableOpacity, Pressable } from "react-native";
import React, { useState } from "react";
import styles from "./style";
import colors from "../../../contains/colors";
import GroupRemove from "../../../assets/images/group-remove.svg";
import Key from "../../../assets/images/key.svg";
import TextConfirm from "../TextConfirm";
import leaveClass from "../../../getdata/leaveClass";

const UserCard = (props) => {
  const class_id = props.class_id
  const isCreator = props.isCreator;
  const user = props.user;
  const creatorCard = props.creatorCard;
  const bg = creatorCard ? colors.violet : colors.white;
  const [visible, setVisibleModal] = useState(false);
  const removeBtn = creatorCard ? null : (
    <TouchableOpacity
      onPress={() => {
        setVisibleModal(true);
      }}
    >
      <GroupRemove />
    </TouchableOpacity>
  );
  const isKey = creatorCard ? <Key /> : null;
  return (
    <View
      style={[
        styles.wrapUserCard,
        {
          backgroundColor: colors.white,
        },
      ]}
    >
      <View style={styles.wrapUser}>
        {user.avatar == "" ? (
          <Image
            style={styles.avatar}
            source={require("../../../assets/images/avt-default.png")}
          />
        ) : (
          <Image style={styles.avatar} source={{ uri: user.avatar }} />
        )}
        <Text style={styles.username}>{user.fullname} </Text>
      </View>
      <TextConfirm
        visible={visible}
        setVisibleModal={setVisibleModal}
        textTitle={`Xóa ${user.fullname} ra khỏi lớp`}
        textConfirm="Đồng ý"
        member_id={user._id}
        class_id={class_id}
        setLoading={props.setLoading}
      />
      {isKey}
      {isCreator ? removeBtn : null}
    </View>
  );
};

export default UserCard;
