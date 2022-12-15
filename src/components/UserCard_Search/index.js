import { Text, View, Image, Pressable } from "react-native";
import React from "react";
import styles from "./style";
import Class from '../../../assets/images/class.svg';
import Unit from '../../../assets/images/unit.svg';
import { useNavigation } from "@react-navigation/native";


const UserCard_Search = ({ user }) => {
  const navigation = useNavigation();
  console.log("USER", user);
  return (
    <Pressable
      style={styles.wrapUserCard}
      onPress={() => {
        navigation.navigate("Other_Profile_Screen", {
          id: user._id,
          fullname: user.fullname,
          email: user.email,
          avatar: user.avatar,
        });
      }}
    >
      <View style={styles.wrapUser}>
        <Image
          style={styles.avatar}
          source={{ uri: user.avatar ? user.avatar : "https://cdn-icons-png.flaticon.com/512/147/147142.png" }}/>
        <Text style={styles.email}>{user.email}</Text>
      </View>
      <Text style={styles.username}>{user.fullname}</Text>
      <View style={styles.infor}>
        <Class
          style={styles.icon} />
        <Text style={styles.public}>{user.classLength} lớp học công khai</Text>
      </View>
      <View style={styles.infor}>
        <Unit
          style={styles.icon} />
        <Text style={styles.public}>{user.unitLength} học phần công khai</Text>
      </View>
    </Pressable>
  );
};

export default UserCard_Search;
