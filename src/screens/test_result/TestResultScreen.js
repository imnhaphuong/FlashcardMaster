import { View, Text, SafeAreaView, StatusBar, KeyboardAvoidingView, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from "react";
import styles from './style'
import colors from "../../../contains/colors";
import Back from "../../../assets/images/header/back.svg";
import { resetQuest } from "../../redux/actions/actionQuestion"
import { updateScore } from "../../redux/actions/actionUser"
import fonts from '../../../contains/fonts';
import { useDispatch, useSelector } from 'react-redux'
import TestResult from '../../components/TestResult/TestResult';


export default function TestResultScreen(props) {
    const Questions = useSelector((state) => state.questReducer)
    const user = useSelector((state) => state.infoUser)
    const trueAnswer = Questions.questionsTrue;
    const falseAnswer = Questions.questionsFalse;
    const dispatch = useDispatch();
    const coin = trueAnswer.length * 5;
    console.log("Questions", Questions)
    console.log("params.id", Questions.id)
    const onBack = () => {
        props.navigation.replace("unit_detail", {
            id: Questions.id,
        })
    }

    return (
        <SafeAreaView style={{ backgroundColor: colors.pastelPurple }}>
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
                    onPress={() => onBack()}
                >
                    <Back />
                </TouchableOpacity>
                <View style={{ width: "90%", }}>
                    <Text style={styles.textHeader}>Kết quả</Text>
                </View>
            </KeyboardAvoidingView>
            <View style={{ height: '100%', paddingVertical: 20 }}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 16, fontFamily: 'WorkSans-SemiBold', color: colors.violet }}>Bạn đã được {user.score} điểm cho bài kiểm tra</Text>
                </View>
                <View style={{ height: '20%', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', paddingHorizontal: 30 }}>
                    <Text style={{ fontSize: 50, fontFamily: 'WorkSans-SemiBold', color: colors.text }}>{user.score}đ</Text>
                    <View style={{ width: '70%', }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 12 }}>
                            <Text style={{ fontSize: 20, fontFamily: 'WorkSans-SemiBold', width: '50%', color: colors.success }}>Đúng </Text>
                            <Text style={{ fontSize: 20, fontFamily: 'WorkSans-SemiBold', color: colors.success }}>{trueAnswer.length}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', }}>
                            <Text style={{ fontSize: 20, fontFamily: 'WorkSans-SemiBold', width: '50%', color: colors.highlight }}>Sai </Text>
                            <Text style={{ fontSize: 20, fontFamily: 'WorkSans-SemiBold', color: colors.highlight }}>{falseAnswer.length}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: 20 }}>
                            <Text style={{ fontSize: 20, fontFamily: fonts.italic, color: colors.text, }}>*Xu nhận được: {coin} </Text>
                        </View>
                    </View>
                </View>
                <ScrollView style={{ flex: 1, paddingHorizontal: 20, height: '70%', }} >
                    <View style={{ height: '100%', paddingBottom: 120 }}>
                        <Text style={{ fontSize: 20, fontFamily: 'WorkSans-SemiBold' }}>Đáp án</Text>
                        {
                            Questions.questions.map((item, index) => {
                                return (
                                    <TestResult key={index} index={index} item={item} />
                                )
                            })
                        }
                    </View>
                </ScrollView>


            </View>
        </SafeAreaView>
    )
}