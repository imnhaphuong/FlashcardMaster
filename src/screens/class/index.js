import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Keyboard
} from "react-native";
import React, { useState } from "react";
import styles from "./style";
import ModalCreateClass from "../../components/ModalCreateClass";

const ClassScreen = (props) => {
  const [visible, setvisible] = useState(false);
  const popupModal = () => {
    setvisible(true);
    console.log("call" + visible);
    return true;
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.header}
      >
        <View>
          <Text style={styles.textHeader}>Lớp học</Text>
        </View>
      </KeyboardAvoidingView>

      <View style={styles.wrapContent}>
        <TextInput style={styles.input} placeholder="Nhập mã lớp học" />
       
        <TouchableOpacity
        onPress={Keyboard.dismiss}>
          <View style={[styles.btn, styles.joinBtn]}>
            <Text style={[styles.textBtn, styles.textJoin]}>Tham gia</Text>
          </View>
        </TouchableOpacity>
        
        <View style={styles.wrapOr}>
          <View style={styles.line} />
          <View>
            <Text style={styles.or}>HOẶC</Text>
          </View>
          <View style={styles.line} />
        </View>
        
        <ModalCreateClass />
      </View>
    </SafeAreaView>
  );
};

export default ClassScreen;
