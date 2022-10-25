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
import getAllClasses from "../../../getdata/getAllClasses";

const ClassScreen = (props) => {
  const [loadingState, setloadingState] = useState(true);
  const [visible, setvisible] = useState(false);
  const [CLASSES_DATA, setdata] = useState([]);
  getAllClasses(setdata);

  const myRenderItem = ({ item }) => (
    <ClassCard
      mode={item.mode}
      id={item._id}
      name={item.name}
      creator={item.creator}
      number_of_members={item.members.length}
      navigation={props.navigation}
    />
  );

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
        data={CLASSES_DATA}
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
            {visible ? <ModalCreateClass visible={visible} /> : null}

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
