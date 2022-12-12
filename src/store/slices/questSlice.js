import { createSlice } from '@reduxjs/toolkit'
import produce from "immer"

const initialState = {
    id: "",
    questions: [],
    questionsTrue: [],
    questionsFalse: [],
}
export const questSlice = createSlice({
    name: 'quest',
    initialState,
    reducers: {
        chooseTFQuest: (state, action) => {
            const checkTF = action.payload.correct === action.payload.answer ? true : false
            const TFQuest = {
                index: action.payload.index,
                question: action.payload.question,
                typeQuestion: action.payload.typeQuestion,
                define: action.payload.define,
                defineQuest: action.payload.defineQuest,
                correct: action.payload.correct,
                answer: action.payload.answer,
            }
            if (checkTF === true) {
                return { ...state, questions: [...state.questions, TFQuest], questionsTrue: [...state.questionsTrue, action.payload.index] }
            } else {
                return { ...state, questions: [...state.questions, TFQuest], questionsFalse: [...state.questionsFalse, action.payload.index] }
            }
        },
        chooseMuQuest: (state, action) => {
            const checkMU = action.payload.correct === action.payload.answer ? true : false
            const MuQuest = {
                index: action.payload.index,
                question: action.payload.question,
                typeQuestion: action.payload.typeQuestion,
                options: action.payload.options,
                correct: action.payload.correct,
                answer: action.payload.answer,
            }
            if (checkMU === true) {
                return { ...state, questions: [...state.questions, MuQuest], questionsTrue: [...state.questionsTrue, action.payload.index] }
            } else {
                return { ...state, questions: [...state.questions, MuQuest], questionsFalse: [...state.questionsFalse, action.payload.index] }
            }
        },
        resetQuest: (state, action) => {
            return { ...state, questions: [], questionsFalse: [], questionsTrue: [], id: action.payload }
        },
        writeText: (state, action) => {
            const checkWrite = action.payload.correct === action.payload.answer ? true : false
            const WriteQuest = {
                index: action.payload.index,
                question: action.payload.question,
                typeQuestion: action.payload.typeQuestion,
                correct: action.payload.correct,
                answer: action.payload.answer,

            }
            if (checkWrite === true) {
                return { ...state, questions: [...state.questions, WriteQuest], questionsTrue: [...state.questionsTrue, action.payload.index] }
            } else {
                return { ...state, questions: [...state.questions, WriteQuest], questionsFalse: [...state.questionsFalse, action.payload.index] }
            }
        }

    }
})
// Action creators are generated for each case reducer function
export const { chooseTFQuest, chooseMuQuest, resetQuest,writeText } = questSlice.actions

export default questSlice.reducer