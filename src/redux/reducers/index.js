import { combineReducers } from "redux";
import infoUser from './infoReducer'
import questReducer from './questReducer'
const reducers = combineReducers({
    infoUser:infoUser,
    questReducer:questReducer,
})
export default (state, action) => reducers(state, action)