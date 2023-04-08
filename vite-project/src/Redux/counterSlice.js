import { createSlice } from '@reduxjs/toolkit'

const initialState = {

  mymood: localStorage.getItem("currenMode")===null?"dark": localStorage.getItem("currenMode")==="light"?"light":"dark",

display:"none"
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.mymood = action.payload
    },

    changeDisplay: (state, action) => {
      state.display = action.payload
    },

  },
})

// Action creators are generated for each case reducer function
export const { increment, changeDisplay } = counterSlice.actions

export default counterSlice.reducer