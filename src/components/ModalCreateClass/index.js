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
import CheckBox from "react-native-checkbox";

const ModalCreateClass = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const textHolder = `Tên lớp của bạn là?`;

  const submitData = async (values) => {
    fetch("http://flashcard-master.vercel.app/api/classes/create", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        setModalVisible(!modalVisible);
        Keyboard.dismiss;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Nhập tên lớp</Text>
              {/* Validate form */}
              <Formik
                style={styles.form}
                initialValues={{
                  name: "",
                  creator: "nhaphuong",
                  mode: true,
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
                    <CheckBox
                      containerStyle={styles.containerCB}
                      checkboxStyle={styles.checkbox}
                      labelStyle={styles.label}
                      checkedImage={require("../../../assets/images/checkbox/checked.png")}
                      uncheckedImage={require("../../../assets/images/checkbox/unchecked.png")}
                      label="Hiển thị lớp học ở chế độ công khai"
                      checked={values.mode}
                      onChange={() => {
                        setFieldValue("mode", !values.mode);
                      }}
                    />
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
                          onPress={() => setModalVisible(!modalVisible)}
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
                            Tạo
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
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View style={[styles.createBtn]}>
          <Text style={[styles.textBtn]}>+ Tạo lớp mới</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ModalCreateClass;
