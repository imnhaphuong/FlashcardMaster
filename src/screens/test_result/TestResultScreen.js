import { View, Text, SafeAreaView, StatusBar, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from "react";
import styles from './style'
import colors from "../../../contains/colors";
import Back from "../../../assets/images/header/back.svg";
import Check from "../../../assets/images/header/check.svg";

import { ProgressBar, MD3Colors } from 'react-native-paper';
import fonts from '../../../contains/fonts';
import { useDispatch, useSelector } from 'react-redux'


export default function TestResultScreen() {
    const Questions = useSelector((state) => state.questReducer)
    console.log("QuestionsMu", Questions.questions[0].typeQuestion)
    return (
        <SafeAreaView style={{backgroundColor: colors.white}}>
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
                <View style={{ width: "90%", }}>
                    <Text style={styles.textHeader}>Tổng kết</Text>
                </View>
            </KeyboardAvoidingView>
            <View style={{ height:'100%',padding: 20  }}>
                <View style={{  alignItems: 'center' }}>
                    <Text style={{ fontSize: 16, fontFamily: 'WorkSans-SemiBold',color:colors.violet }}>Bạn đã được 8 điểm cho bài kiểm tra</Text>
                </View>
                <View style={{ height: '20%', flexDirection: 'row', alignItems: 'flex-start',justifyContent: 'space-between', paddingHorizontal: 30 }}>
                    <Text style={{ fontSize: 50, fontFamily: 'WorkSans-SemiBold',color:colors.text }}>8đ</Text>
                    <View style={{  width: '70%', }}>
                        <View style={{  flexDirection: 'row', justifyContent: 'space-evenly',marginVertical:12 }}>
                            <Text style={{ fontSize: 20, fontFamily: 'WorkSans-SemiBold', width: '50%',color:colors.success }}>Đúng </Text>
                            <Text style={{ fontSize: 20, fontFamily: 'WorkSans-SemiBold',color:colors.success }}>12</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', }}>
                            <Text style={{ fontSize: 20, fontFamily: 'WorkSans-SemiBold', width: '50%',color:colors.highlight }}>Sai </Text>
                            <Text style={{ fontSize: 20, fontFamily: 'WorkSans-SemiBold',color:colors.highlight }}>8</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop:20 }}>
                            <Text style={{ fontSize: 20, fontFamily:fonts.italic,color:colors.text, }}>*Xu nhận được: </Text>
                        </View>
                    </View>
                </View>
                <View style={{ height: '70%', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 30 }}>
                    <Text style={{ fontSize: 20, fontFamily: 'WorkSans-SemiBold' }}>Đáp án</Text>
                </View>


            </View>
        </SafeAreaView>
    )
}