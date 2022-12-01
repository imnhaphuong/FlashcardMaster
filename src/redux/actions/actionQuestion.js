import { CREATE_TFQUEST } from '../reducers/questReducer'
import { CREATE_MUQUEST } from '../reducers/questReducer'
import { CHOOSE_TFQUEST } from '../reducers/questReducer'
import { CHOOSE_MUQUEST } from '../reducers/questReducer'



export const createTFQuest = (question) => async dispatch => {
    try {
        //2. cập nhật thông tin của reducer trong store (payload)
        dispatch({
            index:question.index,
            type: CREATE_TFQUEST,
            term: question.term,
            correct: question.correct,
        })
    } catch (err) {

        console.log(err)
    }
}
export const createMUQuest = (question) => async dispatch => {
    try {

        //2. cập nhật thông tin của reducer trong store (payload)
        dispatch({
            index:question.index,
            type: CREATE_MUQUEST,
            question: question.question,
            type: question.type,
            options: question.options,
            correct: question.correct,
        })
    } catch (err) {

        console.log(err)
    }
}
export const chooseMUQuest = (question) => async dispatch => {
    try {

        //2. cập nhật thông tin của reducer trong store (payload)
        dispatch({
            index:question.index,
            type: CHOOSE_MUQUEST,
            term: question.term,
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
            index:question.index,
            type: CHOOSE_TFQUEST,
            typeQuestion: question.typeQuestion,
            answer: question.answer,
            term: question.term,
            correct: question.correct,
        })
    } catch (err) {

        console.log(err)
    }
}