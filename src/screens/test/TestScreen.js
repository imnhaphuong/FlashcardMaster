import { View, Text, SafeAreaView, StatusBar, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from "react";
import styles from './style'
import colors from "../../../contains/colors";
import Back from "../../../assets/images/header/back.svg";
import Check from "../../../assets/images/header/check.svg";
import TrueFalseScreen from './TrueFalseScreen';
import MutipleChoiceScreen from './MutipleChoiceScreen';
import { ProgressBar, MD3Colors } from 'react-native-paper';


export default function TestScreen() {


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
                <View style={{ width: "90%", }}>
                    <Text style={styles.textHeader}>Kiểm tra</Text>
                </View>

            </KeyboardAvoidingView>
            <ProgressBar progress={0.6} color={colors.violet} />
            <View style={styles.testType}>
                <View style={{ alignItems: "center" }}>
                    <Text style={styles.textTrueFalse}>14/20</Text>
                </View>
                {/* <TrueFalseScreen /> */}
                <MutipleChoiceScreen/>
            </View>
        </SafeAreaView>
    )
}