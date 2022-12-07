import { View, Text, SafeAreaView, StatusBar, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from "react";
import styles from './style'
import colors from "../../../contains/colors";
import Back from "../../../assets/images/header/back.svg";
import Check from "../../../assets/images/header/check.svg";
import WriteTextScreen from './WriteTextScreen';
import MutipleChoiceScreen from './MutipleChoiceScreen';
import { ProgressBar, MD3Colors } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux'
import { updateScore } from "../../redux/actions/actionUser"
import { useLayoutEffect } from 'react';
export default function LearnScreen(props) {
    const [userId, setUserId] = useState(null);
    var params = props.route.params;
    const [numberOfUnits, setNumberOfUnits] = useState();
    const [number, setNumber] = useState();
    const [progress, setProgress] = useState(0);
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);
    const flashcards = params.flashcards;
    const [round, setRound] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [mess, setMess] = useState('');
    useEffect(() => {
        setScore(10 / flashcards.length)
        if (params.index !== undefined) {
            setIndex(params.index);
            // pro = (index + 1) / flashcards.length;
            setProgress((index + 1) / flashcards.length)
        } else {
            setProgress(1 / flashcards.length)
        }
        setNumberOfUnits(flashcards.length);
        
    }, [index])
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
                {/* <TouchableOpacity
                    onPress={() => {
                        props.navigation.goBack();
                    }}
                >
                    <Back />
                </TouchableOpacity> */}
                <View style={{ width: "90%", }}>
                    <Text style={styles.textHeader}>{round}</Text>
                </View>

            </KeyboardAvoidingView>
            <ProgressBar progress={progress} color={colors.violet} />
            <View style={styles.testType}>
                <View style={{ alignItems: "center" }}>
                    <Text style={styles.textTrueFalse}>{index + 1}/{numberOfUnits}</Text>
                </View>
                {(index < Math.floor(numberOfUnits / 2)) ?
                    <WriteTextScreen />
                    :
                    <MutipleChoiceScreen score={score} navigation={props.navigation} index={index} flashcards={flashcards} />
                }
            </View>
        </SafeAreaView>
    )
}