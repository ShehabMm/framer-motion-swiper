import { createSlice } from '@reduxjs/toolkit'

const initialState = {

  mymood: "dark",
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.mymood = action.payload
    },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { increment,  } = counterSlice.actions

export default counterSlice.reducer