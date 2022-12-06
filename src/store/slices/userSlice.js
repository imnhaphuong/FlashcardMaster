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
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUser, setUnits, setClasses, setInsigniaes } = userSlice.actions

export default userSlice.reducer