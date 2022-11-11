import { Text, View, Image } from "react-native";
import React from "react";
import styles from "./style";
import Class from '../../../assets/images/nab/class.svg';
import Unit from '../../../assets/images/unit.svg';

const UserCard = (props) => {
  const id = props.id;
  const fullname = props.fullname ? props.fullname : "user0";
  const number_of_class = `${props.number_of_class} lớp học`;
  const number_of_unit = `${props.number_of_unit} học phần`;

  return (
    <View style={styles.wrapUserCard}>
      <View style={styles.wrapUser}>
        <View>
          <Image
            style={styles.avatar}
            source={require("../../../assets/images/avt-default.png")}
          />
          <Text style={styles.username}>{fullname}</Text>
        </View>
        <View style={styles.infor}>
          <Class
            style={styles.icon} />
          <Text>{number_of_class}</Text>
        </View>
        <View style={styles.infor}>
          <Unit
            style={styles.icon} />
          <Text>{number_of_unit}</Text>
        </View>
      </View>
    </View>
  );
};

export default UserCard;
