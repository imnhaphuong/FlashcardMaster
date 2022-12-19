import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import colors from '../../../contains/colors';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import ModalAnswer from './ModalAnswer';

export default function MutipleChoiceScreen(props) {
    const dispatch = useDispatch();
    const i = props.index
    const flashcards = props.flashcards
    const { user } = useSelector((state) => state.user)
    const define = flashcards[i].define;
    const randoms = [];
    const round = props.round;
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [correct, setCorrect] = useState("");
    const [options, setOptions] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [wrong, setWrong] = useState(0);
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
        setQuestion(flashcards[i].term)
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
    }, [i])
    const chooseAnswer = (indexOption) => {
        setCorrect(define)
        if (options[indexOption] === define) {
            if (props.index + 1 === flashcards.length) {
                props.navigation.replace('lern_result', {
                    flashcards: flashcards, round: round
                })
            } else {
                props.navigation.replace('learn', {
                    flashcards: flashcards, index: (i + 1), round: round
                })
            }
        } else {
            console.log("sai", wrong);
            setWrong(wrong + 1)
            // setQuestion(question);
            if (wrong >= 2) {
                setShowModal(true);
                setAnswer(options[indexOption])
            } else {
                setShowModal(true);
                setCorrect("")
                setTimeout(() => {
                    setShowModal(false);
                }, 1000)
            }
            // setQuestion(question);

            // setCorrect(correct);
        }
    }
    const onClose = () => {
        setShowModal(false);
    }
    return (
        <View style={styles.testComponent}>
            <ModalAnswer question={question} answer={answer} correct={correct} visible={showModal} onClose={onClose} />

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
                {options.map((item, index) => {
                    return (
                        <CustomButton key={index} type="CHANGE_TRUE" text={item} onPress={() =>
                            chooseAnswer(index)
                        } hide="hide" />
                    )
                })}

            </View >
        </View>
    )
}