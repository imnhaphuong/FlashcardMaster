export const UPDATE_DAY_ACTIVE = "UPDATE_DAY_ACTIVE";

const initialState = {
    email: "",
    fullName: " ",
    password: "",
    isVerified: false,
    avatar: "",
    unitCreated: 0,
    flashcardCreated: 0,
    scores: 0,
    dayActive: 0,
    type: 0,
    role: 0,
    createdAt: "",
}
export default function actionForReducer(state = initialState, payload) {
    switch (payload.type) {
        case UPDATE_DAY_ACTIVE:
            return {
                ...state,
                type: payload.dayActive
            }
        default:
            return state
    }
}