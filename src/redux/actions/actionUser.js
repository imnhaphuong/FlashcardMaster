import { UPDATE_SCORES } from '../reducers/infoReducer'
import { CREATE_USER } from '../reducers/infoReducer'

export const updateScore = (score) => async dispatch => {
    try {
        //1. side-effect: gọi lên server hoặc làm gì bất đồng bộ (middleware redux-thunk giúp việc này)
        await console.log("gọi lên server")
        // await new Promise(resolve, reject => {
        //     setTimeout(() => {
        //         resolve()
        //     }, 2000)
        // })
        await console.log("đã cập nhật lên server")

        //2. cập nhật thông tin của reducer trong store (payload)
        dispatch({
            type: UPDATE_SCORES,
            score: score,
        })
    } catch (err) {

        console.log(err)
    }
}
export const createUser = (user) => async dispatch => {
    try {
        //1. side-effect: gọi lên server hoặc làm gì bất đồng bộ (middleware redux-thunk giúp việc này)
        await console.log("gọi lên server")
        // await new Promise(resolve, reject => {
        //     setTimeout(() => {
        //         resolve()
        //     }, 2000)
        // })
        await console.log("đã cập nhật lên server")

        //2. cập nhật thông tin của reducer trong store
        dispatch({
            type: CREATE_USER,
            email: user.email,
            fullname: user.fullname,
        })
    } catch (err) {

        console.log(err)
    }
}