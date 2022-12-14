import { createSlice } from '@reduxjs/toolkit'

const initialState = {

}
export const fcardSlice = createSlice({
    name: 'fcard',
    initialState,
    reducers: {
        createFcard:(state, action) => {
            return {...state,fcards:action.payload.flashcards, id: action.payload.id}
        },
        resetFcard:(state, action) => {
            return {initialState,id:action.payload}

        }
    }
})
export const { createFcard,resetFcard} = fcardSlice.actions

export default fcardSlice.reducer