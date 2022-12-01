export const CREATE_USER = "UPDATE_DAY_ACTIVE";
export const UPDATE_SCORES = "UPDATE_SCORES";

const initialState = {
    email: "",
    fullname: " ",
    unitCreated: 0,
    flashcardCreated: 0,
    scores: 0,
    dayActive: 0,

}
export default function actionForReducer(state = initialState, payload) {
    switch (payload.type) {
        case CREATE_USER:
            return {
                ...state,
                email: payload.email,
                fullname:payload.fullname,
            }
        case UPDATE_SCORES:
            return {
                ...state,
                scores: payload.score
            }
        default:
            return state
    }
}