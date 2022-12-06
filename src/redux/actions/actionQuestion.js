
import { CHOOSE_TFQUEST } from '../reducers/questReducer'
import { CHOOSE_MUQUEST } from '../reducers/questReducer'
import {RESET_QUESTIONS } from '../reducers/questReducer'


export const chooseMuQuest = (question) => async dispatch => {
    try {
        console.log("gọi dispatch");
        //2. cập nhật thông tin của reducer trong store (payload)
        dispatch({
            index: question.index,
            type: CHOOSE_MUQUEST,
            question: question.question,
            typeQuestion: question.typeQuestion,
            options: question.options,
            correct: question.correct,
            answer: question.answer,

        })
    } catch (err) {

        console.log(err)
    }
}
export const chooseTFQuest = (question) => async dispatch => {
    try {
        //2. cập nhật thông tin của reducer trong store (payload)
        dispatch({
            index: question.index,
            type: CHOOSE_TFQUEST,
            typeQuestion: question.typeQuestion,
            answer: question.answer,
            defineQuest: question.defineQuest,
            define:question.define,
            question: question.question,
            correct: question.correct,
        })
    } catch (err) {

        console.log(err)
    }
}
export const resetQuest = (id) =>  dispatch => {
    dispatch({
        id:id,
        type: RESET_QUESTIONS,
    })
}
// export const resetQuest = {
//     type: RESET_QUESTIONS
//   }