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
import { Formik, Field, Form } from "formik";
import CheckBox from "react-native-checkbox";
import AsyncStorage from "@react-native-async-storage/async-storage";
import colors from "../../../contains/colors";

const ConfirmForm = (props) => {
  const visible = props.visible ? props.visible : false;
  const [modalVisible, setModalVisible] = useState(visible);
  const className = props.name;
  const _id = props._id ? props._id : null;
  const url = "https://flashcard-master.vercel.app/api/classes/delete";
  //submit form create class
  const submitData = async (values) => {
    console.log(values);
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
        props.navigation.goBack();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //UI
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
              <Text style={styles.modalText}>
                Bạn có chắc muốn xóa lớp <Text style={{ color: colors.highlight }}>"{className}"</Text>
              </Text>
              {/* Validate form */}
              <Formik
                style={styles.form}
                initialValues={{
                  id: _id,
                }}
                onSubmit={(values) => submitData(values)}
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
                            setModalVisible(false);
                            if (typeof props.callback != "undefined");
                            props.setStateMethod(false);
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
                            Xóa
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

export default ConfirmForm;
