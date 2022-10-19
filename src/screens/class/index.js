import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  StatusBar,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import styles from "./style";
import ModalCreateClass from "../../components/ModalCreateClass";
import colors from "../../../contains/colors";
import ClassCard from "../../components/ClassCard";
import getData from "./data";

const ClassScreen = (props) => {
  const [visible, setvisible] = useState(false);
  const popupModal = () => {
    setvisible(true);
    return true;
  };

  const myRenderItem = ({ item }) => (
    <ClassCard
      id={item._id}
      name={item.name}
      creator={item.creator}
      number_of_members={item.members.length}
      navigation={props.navigation}
    />
  );

  const [CLASSES_DATA, setdata] = useState([]);
  getData(setdata);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={colors.white}
        barStyle={"dark-content"}
        showHideTransition={"fade"}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.header}
      >
        <View>
          <Text style={styles.textHeader}>Lớp học</Text>
        </View>
      </KeyboardAvoidingView>
      <FlatList
        style={styles.wrapFlatList}
        showsVerticalScrollIndicator={false}
        data={CLASSES_DATA.reverse()}
        renderItem={myRenderItem}
        numColumns={1}
        keyExtractor={(item) => item._id}
        ListHeaderComponent={
          <View>
            <TextInput
              style={styles.input}
              placeholder="Nhập mã lớp học"
              onSubmitEditing={Keyboard.dismiss}
            />
            <TouchableOpacity
              onPress={() => {
                console.log(CLASSES_DATA);
              }}
            >
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

            <View style={[styles.wrapOr]}>
              <View style={styles.line} />
              <View>
                <Text style={styles.joined}>CÁC LỚP BẠN ĐÃ THAM GIA</Text>
              </View>
              <View style={styles.line} />
            </View>
          </View>
        }
        ListFooterComponent={<View style={{ height: 28 }} />}
      />
    </SafeAreaView>
  );
};

export default ClassScreen;
