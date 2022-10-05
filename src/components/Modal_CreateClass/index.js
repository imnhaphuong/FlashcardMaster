import React, { useState } from "react";
import {
  Alert,
  Modal,
  Text,
  Pressable,
  View,
  TextInput,
  Button,
} from "react-native";
import styles from "./style";
import { createClassSchema } from "./validation";
import { Formik } from "formik";

const Modal_CreateClass = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const textHolder = `Tên lớp của bạn là?`;

  const submitData = async (values) => {
    fetch("https://flashcard-master.herokuapp.com/api/class/create", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(values),
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
    })
  };

  return (
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
              initialValues={{ name: '', creator: 'nhaphuong' }}
              onSubmit={(values) => submitData(values)}
              validationSchema={createClassSchema}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
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
                  <View style={{ flexDirection: "row" }}>
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
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

export default Modal_CreateClass;
