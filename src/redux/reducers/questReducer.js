
export const CHOOSE_TFQUEST = "CHOOSE_TFQUEST";
export const CHOOSE_MUQUEST = "CHOOSE_MUQUEST";
export const RESET_QUESTIONS = "RESET_QUESTIONS";

import produce from "immer"

const initialUserState = {
    id: "",
    questions: [],
    questionsTrue: [],
    questionsFalse: [],
}
export default function actionForReducer(state = initialUserState, payload) {
    return produce(state, draft => {
        switch (payload.type) {
            case CHOOSE_TFQUEST:
                const checkTF = payload.correct === payload.answer ? true : false
                const TFQuest = {
                    index: payload.index,
                    question: payload.question,
                    typeQuestion: payload.typeQuestion,
                    define: payload.define,
                    defineQuest: payload.defineQuest,
                    correct: payload.correct,
                    answer: payload.answer,
                }
                if (checkTF === true) {
                    return { ...state, questions: [...state.questions, TFQuest], questionsTrue: [...state.questionsTrue, payload.index] }
                } else {
                    return { ...state, questions: [...state.questions, TFQuest], questionsFalse: [...state.questionsFalse, payload.index] }
                }
            case CHOOSE_MUQUEST:
                const checkMU = payload.correct === payload.answer ? true : false
                const MuQuest = {
                    index: payload.index,
                    question: payload.question,
                    typeQuestion: payload.typeQuestion,
                    options: payload.options,
                    correct: payload.correct,
                    answer: payload.answer,
                }
                if (checkMU === true) {
                    return { ...state, questions: [...state.questions, MuQuest], questionsTrue: [...state.questionsTrue, payload.index] }
                } else {
                    return { ...state, questions: [...state.questions, MuQuest], questionsFalse: [...state.questionsFalse, payload.index] }
                }
            case RESET_QUESTIONS:
                return {...draft,questions:[],questionsFalse:[],questionsTrue:[],id:payload.id}
            default:
                return state
        }
    })
}