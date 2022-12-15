import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import styles from "./style";
import Coin from "../../../assets/images/header/coin.svg";
import colors from "../../../contains/colors";
import fonts from "../../../contains/fonts";
import { useSelector } from "react-redux";


const InsigniaCard = ({insignia,onClickItem, disable}) => {
  const id = insignia.id;
  const name = insignia.name ? insignia.name : "Tên huy hiệu ";
  const price = insignia.price ? insignia.price : "200";
  const insigniaImage = insignia.image ? insignia.image : "https://tc-animate.techorus-cdn.com/resize_image/resize_image.php?image=4905610201440_1.jpg&width=500";
  const { user } = useSelector(state => state.user);
  const [errorMessage, setErroMessage] = useState([]);

  return (
    <TouchableOpacity
      {...errorMessage && <Text style={{ color: "#DD0000" }}>{errorMessage}</Text>}
      style={[styles.card, { borderColor: disable ? colors.darkGray : colors.text }]}
      onPress={() => { 
        onClickItem(insignia)
      }
      }
      disabled={disable}
    >
      <Image source={{ uri: insigniaImage }} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.price}>
          {disable ? <Text style={{ color: colors.darkGray, fontStyle: "italic", fontFamily: fonts.semibold }}>Đã mua</Text> :
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
