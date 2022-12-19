import { View, Text, SafeAreaView, StatusBar, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useState, useEffect, useLayoutEffect } from "react";
import styles from './style'
import colors from "../../../contains/colors";
import Back from "../../../assets/images/header/back.svg";
import Check from "../../../assets/images/header/check.svg";
import WriteTextScreen from './WriteTextScreen';
import MutipleChoiceScreen from './MutipleChoiceScreen';
import { ProgressBar, MD3Colors } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux'


export default function LearnScreen(props) {
    const [userId, setUserId] = useState(null);

    var params = props.route.params;
    const [numberOfUnits, setNumberOfUnits] = useState();
    const [progress, setProgress] = useState(0);
    const [index, setIndex] = useState(0);
    const [flashcards,setFlashcards] = useState(params.flashcards);
    const [round, setRound] = useState(1);
    const [random, setRandom] = useState(null);
    const [fcards, setFcards] = useState([])
    const fcard1 = params.fcard1
    const [fcard2, setFcard2] = useState([])
    useEffect(() => {
        const ran = (Math.round(Math.random() * 1));
        setRandom(ran)
        if (params.index !== undefined) {
            setIndex(params.index);
            // pro = (index + 1) / flashcards.length;
            setProgress((index + 1) / flashcards.length)
        } else {
            setProgress(1 / flashcards.length)
        }
        setNumberOfUnits(flashcards.length);
        
    }, [index])
    useLayoutEffect(() => {
        // if (flashcards.length > 3 && round === 1) {
        //     const fcard1 = flashcards.slice(0, Math.floor(flashcards.length / 2))
        //     // console.log("fcard1dasd", fcard1);
        //     setFcards(fcard1)
        // }
        if (params.round !== undefined) {
            setRound(params.round)
            setFlashcards(params.flashcards)
        }
    }, [round])

    return (
        <View style={styles.container}>
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
                    <Text style={styles.textHeader}>Vòng {round}</Text>
                </View>

            </KeyboardAvoidingView>
            <ProgressBar progress={progress} color={colors.violet} />
            <View style={styles.testType}>
                <View style={{ alignItems: "center" }}>
                    <Text style={styles.textTrueFalse}>{index + 1}/{numberOfUnits}</Text>
                </View>

                {
                    // console.log("flashcards",flashcards)
                    (random===1) ? <MutipleChoiceScreen navigation={props.navigation} index={index} flashcards={flashcards} round={round} />:
                    <WriteTextScreen navigation={props.navigation}  index={index} flashcards={flashcards} round={round} />
                    
                         
                }


            </View>

        </View>
    )
}