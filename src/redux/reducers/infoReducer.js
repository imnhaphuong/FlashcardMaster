export const CREATE_USER = "UPDATE_DAY_ACTIVE";
export const UPDATE_SCORE = "UPDATE_SCORE";
export const UPDATE_COIN = "UPDATE_COIN";

const initialState = {
    email: "",
    fullname: " ",
    unitCreated: 0,
    flashcardCreated: 0,
    score: 0,
    dayActive: 0,
}
export default function actionForReducer(state = initialState, payload) {
    switch (payload.type) {
        case CREATE_USER:
            return {
                ...state,
                email: payload.email,
                fullname: payload.fullname,
            }
        case UPDATE_SCORE:
            return {
                ...state,
                score: payload.score
            }
        case UPDATE_COIN:
            return {
                ...state,
                coin: payload.coin
            }
        default:
            return state
    }
}