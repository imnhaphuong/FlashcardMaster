import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import colors from '../../../contains/colors';
import CustomButton from '../../components/CustomButton/CustomButton';
import { chooseMUQuest } from "../../redux/actions/actionQuestion"
import { updateScore } from "../../redux/actions/actionUser"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';

export default function MutipleChoiceScreen(props) {
    const dispatch = useDispatch();
    const i = props.index
    // const options = props.options
    const flashcards = props.flashcards
    const user = useSelector((state) => state.infoUser)
    const define = flashcards[i].define;
    const randoms = [];
    const [options, setOptions] = useState([]);
    // const options=[]
    const array = []
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    useEffect(() => {
        randoms.push(i);
        array.push(define)
        do {
            const random = Math.floor((Math.random() * (flashcards.length)))
            if (randoms.includes(random) !== true) {
                randoms.push(random)
                array.push(flashcards[random].define)
            }

        } while (array.length < 4)
        shuffleArray(array)
        setOptions(array)
    }, [])
    let correct;
    const chooseAnswer = (define, score, indexOption) => {
        options.map((item, indexOp) => {
            if (item === flashcards[i].define)
                correct = indexOp;

        })
        const question = {
            index: i + 1,
            term: flashcards[i].term,
            options: options,
            typeQuestion: 1,
            correct: correct,
            answer: indexOption
        }
        dispatch(chooseMUQuest(question))
        if (define === flashcards[i].define) {
            dispatch(updateScore(user.scores + 1));
        }
        if (props.index + 1 === flashcards.length) {
            props.navigation.replace('test_result', {
                flashcards: flashcards, 
            })
        } else {
            props.navigation.replace('test', {
                flashcards: flashcards, index: (props.index + 1)
            })
        }

    }
   
    console.log("Score", user.scores)
    return (
        <View style={styles.testComponent}>

            <View style={{ height: '40%', justifyContent: 'center' }}>
                <View style={{ height: '40%', justifyContent: 'center', paddingVertical: 30 }}>
                    <Text style={[styles.textTrueFalse, { color: colors.violet }]} >
                        Thuật ngữ :
                    </Text >
                    <Text style={styles.textTrueFalse} >
                        {flashcards[i].term}
                    </Text >
                </View >
            </View>
            <View style={{ height: '60%' }}>
                {
                    console.log("optionssadas", options)

                }
                {options.map((item, index) => {
                    return (
                        <CustomButton type="CHANGE_TRUE" text={item} onPress={() =>
                            chooseAnswer(item, user.score, index)
                        } hide="hide" />
                    )
                })}

            </View >
        </View>
    )
}