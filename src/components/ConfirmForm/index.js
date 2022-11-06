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
  const setVisibleModal = props.setVisibleModal ? props.setVisibleModal : null;
  //loading
  const setLoading = props.setLoading ? props.setLoading : null;

  const className = props.name;
  const _id = props._id ? props._id : null;

  const url = "https://flashcard-master.vercel.app/api/classes/delete";
  //submit form create class
  const submitData = async (values) => {
    setLoading(true);
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
        setLoading(false);
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
          visible={visible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setVisibleModal(!visible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                Bạn có chắc muốn xóa lớp{" "}
                <Text style={{ color: colors.highlight }}>"{className}"</Text>
              </Text>
              {/* Validate form */}
              <Formik
                style={styles.form}
                initialValues={{
                  id: _id,
                }}
                onSubmit={(values) => {
                  submitData(values);
                  setVisibleModal(false);
                }}
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
