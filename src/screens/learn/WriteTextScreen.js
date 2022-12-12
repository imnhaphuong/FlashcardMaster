import { View, Text, KeyboardAvoidingView, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import styles from './style'
import colors from '../../../contains/colors';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInputUnit from '../../components/CustomInputUnit/CustomInputUnit';
import Check from "../../../assets/images/checkbox/checkSend.svg";
import { Formik } from 'formik'
import { SignInSchema } from '../../../contains/validation'
export default function WriteTextScreen(props) {
  const dispatch = useDispatch();
  const i = props.index
  const flashcards = props.flashcards
  const submitData = (values) => {
    console.log("send Answer", values)
  }
  return (

    <KeyboardAvoidingView offset={10}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      
      <View style={styles.testComponent}>

        <View style={{ height: '70%', justifyContent: 'center' }}>
          <View style={{ height: '40%', justifyContent: 'flex-end', paddingVertical: 30 }}>
            <Text style={[styles.textTrueFalse, { color: colors.violet }]} >
              Thuật ngữ :
            </Text >
            <Text style={styles.textTrueFalse} >
              {flashcards[i].term}
              {/* {console.log("flashcards",i)} */}
            </Text >
          </View >
          <View style={{ backgroundColor: colors.graySecondary, height: 2 }}></View>
          <View style={{ height: '50%', justifyContent: 'flex-start', paddingVertical: 30 }}>
            <Text style={[styles.textTrueFalse, { color: colors.violet }]} >
              Định nghĩa:
            </Text >
            {/* <Text style={styles.textTrueFalse} >

            {define}
          </Text > */}
          </View >
        </View>
        <Formik
          initialValues={{
            answer: '',
          }}
          validateOnMount={true}
          onSubmit={async (values, { resetForm }) => {
            await submitData(values)
            resetForm();
          }}
        >
          {({ handleChange, handleSubmit, values, }) => (
            <View style={{ height: '30%', flexDirection: 'row' }}>
              <View style={{ width: '85%' }}>
                <CustomInputUnit onChangeText={handleChange('answer')} value={values.answer} />
              </View>
              <View style={{ width: '15%', marginLeft: 10 }}>
                <TouchableOpacity onPress={handleSubmit}  >
                  <View style={{
                    flexDirection: 'row',
                    borderRadius: 10,
                    height: 50,
                    width: 50,
                    zIndex: 1000,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: colors.violet
                  }}>
                    <Text style={{
                      fontSize: 16,
                      letterSpacing: 0.2,
                      fontFamily: 'WorkSans-SemiBold',
                    }}>
                      <Check />
                    </Text>
                  </View>
                </TouchableOpacity >
              </View>
            </View >
          )}
        </Formik>
      </View>
    </KeyboardAvoidingView>


  )
}