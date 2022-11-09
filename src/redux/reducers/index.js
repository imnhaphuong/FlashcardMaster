import { combineReducers } from "redux";
import infoUser from './infoReducer'
const reducers = combineReducers({
    infoUser:infoUser
})
export default (state, action) => reducers(state, action)