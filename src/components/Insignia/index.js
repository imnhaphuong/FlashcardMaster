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
import colors from "../../../contains/colors";
import fonts from "../../../contains/fonts";

const InsigniaCard = (props) => {
  const id = props.id;
  const name = props.name ? props.name : "Tên huy hiệu ";
  const price = props.price ? props.price : "200";
  const insigniaImage = props.image ? props.image : "https://tc-animate.techorus-cdn.com/resize_image/resize_image.php?image=4905610201440_1.jpg&width=500";
  const disable = props.disable;

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
      style={[styles.card, {borderColor: disable? colors.darkGray : colors.text}]}
      onPress={() => { showAlert() }
      }
      disabled={disable}
    >
      <Image source={{ uri: insigniaImage }} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.price}>
          {disable ? <Text style={{color: colors.darkGray, fontStyle: "italic", fontFamily: fonts.semibold}}>Đã mua</Text> :
            <>
              <Coin></Coin>
              <Text style={styles.price_text}>{price}</Text>
            </>
          }
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default InsigniaCard;
