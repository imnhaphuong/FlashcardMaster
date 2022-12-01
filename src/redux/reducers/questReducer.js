
export const CHOOSE_TFQUEST = "CHOOSE_TFQUEST";
export const CHOOSE_MUQUEST = "CHOOSE_MUQUEST";



const initialUserState = {
    questions: []
}
export default function actionForReducer(state = initialUserState, payload) {
    switch (payload.type) {
        // case CREATE_TFQUEST:
        //     return {

        //         ...state,
        //         TFQuest: {
        //             index: payload.index,
        //             term: payload.term,
        //             correct: payload.correct,
        //         }

        //     }
        // case CREATE_MUQUEST:
        //     return {
        //         ...state,
        //         MUQUest: {
        //             index: payload.index,
        //             term: payload.term,
        //             options: payload.options,
        //             correct: payload.correct,
        //         }
        //     }
        case CHOOSE_TFQUEST:
            const TFQuests = { ...state }
            const TFQuest = {
                index: payload.index,
                term: payload.term,
                typeQuestion: payload.typeQuestion,
                correct: payload.correct,
                answer: payload.answer,
            }
            return { ...state, questions: [...state.questions,TFQuest ] }
        case CHOOSE_MUQUEST:
            const MuQuest = {
                index: payload.index,
                term: payload.term,
                typeQuestion: question.typeQuestion,
                options: payload.options,
                correct: payload.correct,
                answer: payload.answer,
            }

            return { ...state, questions: [...state.questions,  MuQuest ] }
        default:
            return state
    }
}