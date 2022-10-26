import { View, Text, StatusBar, KeyboardAvoidingView, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import colors from '../../../contains/colors'
import styles from "./style";
import Back from "../../../assets/images/header/back.svg";
import Check from "../../../assets/images/header/check.svg";
import { SafeAreaView } from 'react-native-safe-area-context'
import { Stack, TextInput, IconButton } from "react-native-paper";
import CheckBox from "react-native-checkbox";
import { Formik } from 'formik';
import CreateUnitCard from '../../components/CreateUnitCard/CreateUnitCard';
import CustomInputUnit from '../../components/CustomInputUnit/CustomInputUnit';
const CreateUnitScreen = () => {
  const label = 'Tên học phần'
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={colors.white}
        barStyle={"dark-content"}
        showHideTransition={"fade"}
      />
      {/* Header */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.header}
      >
        <TouchableOpacity
          onPress={() => {
            props.navigation.goBack();
          }}
        >
          <Back />
        </TouchableOpacity>
        <Text style={styles.textHeader}>Tạo học phần</Text>
        <TouchableOpacity>
          <Check />
        </TouchableOpacity>
      </KeyboardAvoidingView>
      <ScrollView >
        <View style={styles.content}>
          <Formik
            style={styles.form}
            initialValues={{
              name: "",
              creator: "nhaphuong",
              mode: true,
            }}
            onSubmit={(values) => submitData(values)}
          // validationSchema={createClassSchema}
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
                <CustomInputUnit label={label}/>
                <CheckBox
                  containerStyle={styles.containerCB}
                  checkboxStyle={styles.checkbox}
                  labelStyle={styles.labelCheckbox}
                  checkedImage={require("../../../assets/images/checkbox/checked.png")}
                  uncheckedImage={require("../../../assets/images/checkbox/unchecked.png")}
                  label="Công khai học phần"
                  checked={values.mode}
                  onChange={() => {
                    setFieldValue("mode", !values.mode);
                  }}
                />
                <View style={styles.createCard}>
                  <CreateUnitCard onPress={handleSubmit}/>
                </View>
              </>
            )}
          </Formik>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default CreateUnitScreen