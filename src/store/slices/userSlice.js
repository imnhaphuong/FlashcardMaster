import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  units: null,
  classes: null,
  insigniaes: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUnits: (state, action) =>{
      state.units = action.payload;
    },
    setClasses: (state, action) =>{
      state.classes = action.payload;
    },
    setInsigniaes: (state, action) =>{
      state.insigniaes = action.payload;
    },
    updateScore: (state, action) =>{
      console.log( action.payload);
      state.user.scores = action.payload;
    },
    resetUser:(state, action)=>{
      return state=initialState
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUser, setUnits, setClasses, setInsigniaes,updateScore,resetUser } = userSlice.actions

export default userSlice.reducer