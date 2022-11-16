import React, { useState } from "react";
import {
  Alert,
  Modal,
  Text,
  Pressable,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import styles from "./style";
import { createClassSchema } from "./validation";
import { Formik, Field, Form } from "formik";
import { Checkbox } from 'react-native-paper';
import AsyncStorage from "@react-native-async-storage/async-storage";
import colors from '../../../contains/colors'

const ModalCreateClass = (props) => {
  ///State
  //get user id when logged to fill in creator id
  const [userId, setuserId] = useState("");
  AsyncStorage.getItem("userId").then((result) => {
    setuserId(result);
  });
  //loading
  const setLoading = props.setLoading ? props.setLoading : null;
  //visible modal
  const visible = props.visible ? props.visible : false;
  const setVisibleModal = props.setVisibleModal ? props.setVisibleModal : false;

  const textHolder = `Tên lớp của bạn là?`;
  const className = props.name ? props.name : "";
  const myMode = props.mode == 0 ? false : true;
  const _id = props._id ? props._id : null;
  //url
  const url =
    props.event === "update"
      ? "https://flashcard-master.vercel.app/api/classes/update"
      : "https://flashcard-master.vercel.app/api/classes/create";

  //submit form create class
  const submitData = async (values) => {
    console.log(url);
    if (typeof setLoading == "function") {
      setLoading(true);
    }
    values.creator = userId;
    fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((resJson) => {
        console.log(values);
      })
      .catch((error) => {
        console.log(error);
      });
    setVisibleModal(false);
    if (typeof setLoading == "function") {
      setLoading(false);
    }
    if (typeof props.settoggleMore == "function") {
      props.settoggleMore(false);
    }
  };

  //UI
  return (
    <View>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={visible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setVisibleModal(!visible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Nhập tên lớp</Text>
              {/* Validate form */}
              <Formik
                style={styles.form}
                initialValues={{
                  id: _id,
                  name: className,
                  mode: myMode,
                }}
                onSubmit={(values) => submitData(values)}
                validationSchema={createClassSchema}
              >
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  setFieldValue,
                  values,
                  errors,
                  touched,
                }) => (
                  <>
                    <TextInput
                      style={styles.inputClassName}
                      placeholder={textHolder}
                      onChangeText={handleChange("name")}
                      onBlur={handleBlur("name")}
                      value={values.name}
                    />
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Checkbox
                        status={values.mode ? "checked" : "unchecked"}
                        onPress={() => {
                          setFieldValue("mode", !values.mode);
                        }}
                        uncheckedColor={colors.violet}
                        color={colors.violet}
                      />
                      <Text style={styles.text}>
                        Hiển thị lớp học ở chế độ công khai
                      </Text>
                    </View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <View>
                        {errors.name && touched.name ? (
                          <Text style={{ color: "red", textAlign: "left" }}>
                            {errors.name}
                          </Text>
                        ) : null}
                      </View>
                      <View style={styles.wrapButtons}>
                        <Pressable
                          style={[styles.buttonCancel]}
                          onPress={() => {
                            setVisibleModal(false);
                          }}
                        >
                          <Text style={[styles.textButton, styles.textCancel]}>
                            Hủy
                          </Text>
                        </Pressable>
                        <Pressable
                          style={[styles.button, styles.buttonCreate]}
                          onPress={handleSubmit}
                        >
                          <Text style={[styles.textButton, styles.textCreate]}>
                            {props.event === "update" ? "Cập nhật" : "Tạo"}
                          </Text>
                        </Pressable>
                      </View>
                    </View>
                  </>
                )}
              </Formik>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default ModalCreateClass;
