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
} from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./style";
import ModalCreateClass from "../../components/ModalCreateClass";
import colors from "../../../contains/colors";
import ClassCard from "../../components/ClassCard";
import getAllClasses from "../../../getdata/getAllClasses";
import Spinner from "react-native-loading-spinner-overlay";

const ClassScreen = (props) => {
  //State
  const [visible, setvisible] = useState(false);
  const [CLASSES, setClasses] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const onRefreshData = () => {
    getAllClasses(setClasses, setLoading);
  }
  const myRenderItem = ({ item }) => (
    <ClassCard
      mode={item.mode}
      _id={item._id}
      name={item.name}
      creator={item.creator}
      number_of_members={item.members.length}
      navigation={props.navigation}
    />
  );


  //useEffect
  useEffect(() => {
    onRefreshData()
    const focusHandler = props.navigation.addListener("focus", () => {
      onRefreshData()
    });
    return focusHandler;
  }, [isLoading, props.navigation]);

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
            />
            <TouchableOpacity>
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
