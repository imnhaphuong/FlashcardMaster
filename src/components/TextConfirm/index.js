import React, { useState } from "react";
import {
  Alert,
  Modal,
  Text,
  Pressable,
  View,
  ToastAndroid,
} from "react-native";
import styles from "./style";
import { Formik } from "formik";
import leaveClass from "../../../getdata/leaveClass";

const TextConfirm = (props) => {
  const visible = props.visible ? props.visible : false;
  const setVisibleModal = props.setVisibleModal ? props.setVisibleModal : null;
  //loading
  const setLoading = props.setLoading ? props.setLoading : null;

  const _id = props._id ? props._id : null;

  //submit form create class
  const submitData = async (values) => {
    setLoading(true);
    leaveClass(props.class_id, props.member_id)
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
              <Text style={styles.modalText}>{props.textTitle}</Text>
              {/* Validate form */}
              <Formik
                style={styles.form}
                initialValues={{
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
                            {props.textCancel ? props.textCancel : "Hủy"}
                          </Text>
                        </Pressable>
                        <Pressable
                          style={[styles.button, styles.buttonCreate]}
                          onPress={handleSubmit}
                        >
                          <Text style={[styles.textButton, styles.textCreate]}>
                            {props.textConfirm ? props.textConfirm : "Đồng ý"}
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

export default TextConfirm;
