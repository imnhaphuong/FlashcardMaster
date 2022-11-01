import { View, Text, StatusBar, KeyboardAvoidingView, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import colors from '../../../contains/colors'
import styles from "./style";
import Back from "../../../assets/images/header/back.svg";
import Check from "../../../assets/images/header/check.svg";
import { SafeAreaView } from 'react-native-safe-area-context'
import CheckBox from "react-native-checkbox";
import { FieldArray, Formik, getIn } from 'formik';
import CreateUnitCard from '../../components/CreateUnitCard/CreateUnitCard';
import CustomInputUnit from '../../components/CustomInputUnit/CustomInputUnit';
import Add from "../../../assets/images/checkbox/add.svg";
import { Unitchema } from '../../../contains/validation'
import CustomButton from '../../components/CustomButton/CustomButton';
import uuid from 'react-native-uuid';
const CreateUnitScreen = ({ navigation }) => {
  const label = 'Tên học phần';
  const term = 'Thuật ngữ'
  const defi = 'Định nghĩa'
  const example = 'Ví dụ'
  const [flashCard, setFlashCard] = useState({
    id: '',
    term: '',
    define: "",
    example: "",
    image: "",
  })
  const [components, setComponents] = useState([flashCard]);

  const onUploadImage = () => {
    console.log("onUploadImage");
  }
  const createUnit = (values) => {
    console.log("values", values);
  }
  return (

    <Formik
      style={styles.form}
      initialValues={{
        unitName: "",
        flashCard: [{
          id: uuid.v4(),
          term: "",
          define: "",
          example: "",
          image: "",
        }],
        mode: false,
      }}
      onSubmit={(values) => createUnit(values)}
      validationSchema={Unitchema}
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


          <FieldArray
            name='flashCard'
          >
            {({ push }) => (
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
                      navigation.goBack();
                    }}
                  >
                    <Back />
                  </TouchableOpacity>
                  <Text style={styles.textHeader}>Tạo học phần</Text>
                  <TouchableOpacity onPress={handleSubmit}>
                    <Check />
                  </TouchableOpacity>
                </KeyboardAvoidingView>
                <ScrollView >
                  <View style={styles.content}>
                    <CustomInputUnit onChangeText={handleChange('unitName')}
                      onBlur={handleBlur('unitName')} value={values.unitName} errors={errors.unitName} touched={touched.unitName} label={label} />
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
                        console.log("mode", values.mode);
                      }}
                    />
                    <View style={styles.createCard}>
                      {
                        values.flashCard.map((item, i) => {
                          const te = `flashCard[${i}].term`
                          const errTerm = getIn(errors, te);
                          const de = `flashCard[${i}].define`
                          const errDefine = getIn(errors, de);
                          const ex = `flashCard[${i}].example`
                          const errExample = getIn(i, ex);
                          return (
                            <View key={i} style={styles.formCard}>
                              <CustomInputUnit name={te} onChangeText={handleChange(te)
                              } value={values.flashCard[i].term}
                                onBlur={handleBlur(te)} errors={errTerm} touched={item.term} label={term} />
                              <CustomInputUnit name={de} onChangeText={handleChange(de)} value={values.flashCard[i].define}
                                onBlur={handleBlur(de)} errors={errDefine} touched={item.define} label={defi} />
                              <CustomInputUnit name={ex} onChangeText={handleChange(ex)} value={values.flashCard[i].example}
                                onBlur={handleBlur(ex)} errors={errExample} touched={item.example} label={example} />
                              <CustomButton type="ADD" text="Tải ảnh lên" onPress={onUploadImage} hide="hide" />
                            </View>
                          )
                        })
                      }

                    </View>

                  </View>
                  
                </ScrollView>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => {
                      push({
                        id: uuid.v4(), term: "",
                        define: "",
                        example: "",
                        image: "",
                      })
                    }}
                    style={styles.add}
                  >
                    <View style={styles.addIcon}>
                      <Add />
                    </View>
                  </TouchableOpacity>
              </SafeAreaView>
            )}

          </FieldArray>


        </>
      )}
    </Formik>


  )
}

export default CreateUnitScreen