import { View, Text, KeyboardAvoidingView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style'
import colors from '../../../contains/colors';
import { useDispatch, useSelector } from 'react-redux';
import CustomInputUnit from '../../components/CustomInputUnit/CustomInputUnit';
import Check from "../../../assets/images/checkbox/checkSend.svg";
import { Formik } from 'formik'
import fonts from '../../../contains/fonts';
import ModalAnswer from './ModalAnswer';
import { useNavigation } from '@react-navigation/native';

export default function WriteTextScreen(props) {
  const dispatch = useDispatch();
  const i = props.index
  const round = props.round
  const flashcards = props.flashcards
  const [showModal, setShowModal] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [correct, setCorrect] = useState("");
  const [random, setRandom] = useState(null);
  const navigation = useNavigation()
  useEffect(() => {
    const ran = (Math.round(Math.random() * 1));
    console.log("index", i);

    if (ran === 0) {
      console.log("a", ran)
      setRandom(ran)
      setQuestion(flashcards[i].term)
      setCorrect(flashcards[i].define)
    } else {
      console.log("b", ran);
      setRandom(ran)
      setQuestion(flashcards[i].define)
      setCorrect(flashcards[i].term)
    }
  }, [i])

  const submitData = (values) => {
    console.log("send Answer", values)
    if (values.answer.trim() === correct) {
      console.log("đúng");
      if (props.index + 1 === flashcards.length) {
        props.navigation.replace('lern_result', {
          flashcards: flashcards, round: round
        })
      } else {
        props.navigation.replace('learn', {
          flashcards: flashcards, index: (i + 1), 
        })
      }
    } else {
      setShowModal(true);
      setAnswer(values.answer)

    }

  }
  const onClose = () => {
    setShowModal(false);
  }
  return (

    <KeyboardAvoidingView offset={10}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <ModalAnswer question={question} answer={answer} correct={correct} visible={showModal} onClose={onClose} />
      <View style={styles.testComponent}>

        <View style={{ height: '65%', justifyContent: 'center' }}>
          <View style={{ height: '25%', justifyContent: 'flex-end', paddingVertical: 20 }}>
            <Text style={[styles.textTrueFalse, { color: colors.violet }]} >
              {random === 0 ? "Thuật ngữ" : "Định nghĩa"}
            </Text >
            <Text style={styles.textTrueFalse} >
              {question}
            </Text >
            {console.log("flashcards[i].example", flashcards[i].example)}
            {
              (flashcards[i].example !== "" || flashcards[i].example !== undefined) ? <View style={{ flexDirection: "row" }}>
                <Text style={{
                  fontSize: 18,
                  fontFamily: fonts.regular, color: colors.violet
                }} >
                  Ví dụ :
                </Text >
                <Text style={{
                  marginLeft: 10,
                  fontSize: 18,
                  fontFamily: fonts.regular,
                  color: colors.highlight,
                }} >
                  {flashcards[i].example}
                </Text >
              </View> : ""
            }

          </View >
          <View style={{ backgroundColor: colors.graySecondary, height: 2 }}></View>
          <View style={{ height: '35%', justifyContent: 'flex-start', paddingVertical: 30 }}>
            <Text style={[styles.textTrueFalse, { color: colors.violet }]} >
              {random === 1 ? "Thuật ngữ" : "Định nghĩa"}
            </Text >
            {flashcards[i].image === "" ? "" : <View style={{ width: "100%", flexDirection: 'row', justifyContent: 'center' }}>
              <Image
                style={{ height: 150, width: 150, marginBottom: 20, resizeMode: 'contain' }}
                source={{ uri: flashcards[i].image }} />
            </View>}
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
            <View style={{ height: '35%', flexDirection: 'row' }}>
              <View style={{ width: '85%' }}>
                <CustomInputUnit placeholder="Nhập đáp án ..." onChangeText={handleChange('answer')} value={values.answer} />
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