import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert
} from "react-native";
import React from "react";
import styles from "./style";
import Coin from "../../../assets/images/header/coin.svg";

const InsigniaCard = (props) => {
  const id = props.id;
  const name = props.name ? props.name : "Tên huy hiệu ";
  const price = props.price ? props.price : "200";
  const insigniaImage = props.image ? props.image : "https://kynguyenlamdep.com/wp-content/uploads/2019/12/hinh-anh-hoa-hong-dep-va-y-nghia.jpg";


  const showAlert = () =>
  Alert.alert(
    "",
    "Mua huy hiệu... với giá " + price + " xu",
    [
      {
        text: "Huỷ",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "Mua", onPress: () => console.log("OK Pressed") }
    ]
  );
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {showAlert()}
    }
    >
      <Image source={{uri: insigniaImage}} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.price}>
          <Coin></Coin>
          <Text style={styles.price_text}>{price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default InsigniaCard;
