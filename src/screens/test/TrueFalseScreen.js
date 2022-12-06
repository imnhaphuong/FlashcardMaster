import { View, Text } from 'react-native'
import styles from './style'
import colors from '../../../contains/colors';
import CustomButton from '../../components/CustomButton/CustomButton';
import { chooseTFQuest } from "../../redux/actions/actionQuestion"
import { updateScore } from "../../redux/actions/actionUser"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';

export default function TrueFalseScreen(props) {
    const dispatch = useDispatch();
    const i = props.index
    const sco = props.score
    const flashcards = props.flashcards
    const user = useSelector((state) => state.infoUser)
    const random = Math.floor((Math.random() * (i + 2))) + (i)
    const define = flashcards[random].define;
    const Questions = useSelector((state) => state.questReducer)
    console.log("Questionshgfhgfh", Questions)
    const onTrueButton = (define) => {
        if (define === flashcards[i].define) {
            const question = {
                index: i + 1,
                typeQuestion: 0,
                define: define,
                defineQuest: flashcards[i].define,
                question: flashcards[i].term,
                correct: "Đúng",
                answer: "Đúng"
            }
            dispatch(chooseTFQuest(question))
            if (question.correct === question.answer) {
                dispatch(updateScore(user.score + sco));
            }
        } else {
            const question = {
                index: i + 1,
                typeQuestion: 0,
                define: define,
                defineQuest: flashcards[i].define,
                question: flashcards[i].term,
                correct: "Sai",
                answer: "Đúng"
            }
            dispatch(chooseTFQuest(question))
        }

        props.navigation.replace('test', {
            flashcards: flashcards, index: (props.index + 1)
        })


    }
    const onFalseButton = (define) => {
        if (define !== flashcards[i].define) {
            const question = {
                index: i + 1,
                typeQuestion: 0,
                define: define,
                defineQuest: flashcards[i].define,
                question: flashcards[i].term,
                correct: "Sai",
                answer: "Sai"
            }
            dispatch(chooseTFQuest(question))
            if (question.correct === question.answer) {
                dispatch(updateScore(user.score + sco));
            }
        } else {
            const question = {
                index: i + 1,
                typeQuestion: 0,
                define: define,
                defineQuest: flashcards[i].define,
                question: flashcards[i].term,
                correct: "Đúng",
                answer: "Sai"
            }
            dispatch(chooseTFQuest(question))
        }

        props.navigation.replace('test', {
            flashcards: flashcards, index: (props.index + 1)
        })

    }


    return (
        <View style={styles.testComponent}>

            <View style={{ height: '60%', justifyContent: 'center' }}>
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
                <View style={{ height: '60%', justifyContent: 'flex-start', paddingVertical: 30 }}>
                    <Text style={[styles.textTrueFalse, { color: colors.violet }]} >
                        Định nghĩa:
                    </Text >
                    <Text style={styles.textTrueFalse} >

                        {define}
                    </Text >
                </View >
            </View>
            <View style={{ height: '40%' }}>
                <CustomButton type="CHANGE_TRUE" text="Đúng" onPress={() =>
                    onTrueButton(define, user.score)
                } hide="hide" />
                <CustomButton type="CHANGE_FALSE" text="Sai" onPress={() =>
                    onFalseButton(define, user.score)
                } hide="hide" />
            </View >



        </View>
    )
}