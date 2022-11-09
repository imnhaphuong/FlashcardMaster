import {UPDATE_DAY_ACTIVE} from '../reducers/infoReducer'
export const updateUser = (user) => async dispatch=>{
    try{
        //1. side-effect: gọi lên server hoặc làm gì bất đồng bộ
        await console.log("gọi lên server")
        //2. cập nhật thông tin của reducer trong store
        dispatch({
            type:UPDATE_DAY_ACTIVE,
            score:score,
        })
    }catch(err){
        console.log(err)
    }
}