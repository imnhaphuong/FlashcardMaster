import {
    Text,
    View,
    Image,
    TouchableOpacity
  } from "react-native";
  import React from "react";
  import styles from "./style";
  
  const InsigniaProfile = ({insigniaData}) => {
    console.log(insigniaData)
    return (
      <TouchableOpacity style={styles.card}
      >
        <Image source={{uri: insigniaData.image}} style={styles.image} />
        <View style={styles.container}>
          <Text style={styles.name}>{insigniaData.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  
  export default InsigniaProfile;
  