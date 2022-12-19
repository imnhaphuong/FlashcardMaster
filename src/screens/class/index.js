import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  StatusBar,
  FlatList,
  ToastAndroid,
} from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./style";
import ModalCreateClass from "../../components/ModalCreateClass";
import colors from "../../../contains/colors";
import ClassCard from "../../components/ClassCard";
import getAllClasses from "../../../getdata/getAllClasses";
import getClassByJCode from "../../../getdata/getClassByJCode";
import Spinner from "react-native-loading-spinner-overlay";

const ClassScreen = (props) => {
  //State
  const [visible, setvisible] = useState(false);
  const [CLASSES, setClasses] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [jcodeValue, setJcodeValue] = useState("");
  const [temp, setTemp] = useState([]);

  const onRefreshData = () => {
    getAllClasses(setClasses, setLoading);
  };

  const myRenderItem = ({ item }) => (
    <ClassCard
      classData={item}
      navigation={props.navigation}
    />
  );
 

  //useEffect
  useEffect(() => {
    onRefreshData();
    const focusHandler = props.navigation.addListener("focus", () => {
      setLoading(true)
    });
    return focusHandler;
  }, [isLoading, props.navigation]);

  //join
  join = () => {
    if (temp.length == 0) {
      ToastAndroid.show(
        "Không tìm thấy lớp học có mã " + jcodeValue,
        ToastAndroid.CENTER
      );
    } else {
      props.navigation.navigate("class_detail", {
        jcode: jcodeValue,
      });
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Spinner color={colors.violet} visible={isLoading} />

      {/* Status Bar & Header*/}
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
      {/* Content */}
      <FlatList
        contentContainerStyle={styles.wrapFlatList}
        showsVerticalScrollIndicator={false}
        data={CLASSES}
        renderItem={myRenderItem}
        numColumns={1}
        keyExtractor={(item) => item._id}
        ListHeaderComponent={
          <View>
            <TextInput
              style={styles.input}
              placeholder="Nhập mã lớp học"
              onSubmitEditing={Keyboard.dismiss}
              value={jcodeValue.trim()}
              onChangeText={(value) => {
                setJcodeValue(value.trim());
                getClassByJCode(value, setTemp, setLoading);
              }}
            />
            <TouchableOpacity onPress={join}>
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

            <TouchableOpacity onPress={() => setvisible(!visible)}>
              <View style={[styles.btn, styles.createBtn]}>
                <Text style={[styles.textBtn, styles.textCreate]}>
                  + Tạo lớp mới
                </Text>
              </View>
            </TouchableOpacity>

            {visible ? (
              <ModalCreateClass
                visible={visible}
                setLoading={setLoading}
                setVisibleModal={setvisible}
              />
            ) : null}
            <View style={[styles.wrapOr]}>
              <View style={styles.line} />
              <View>
                <Text style={styles.joined}>CÁC LỚP BẠN ĐÃ THAM GIA</Text>
              </View>
              <View style={styles.line} />
            </View>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default ClassScreen;
