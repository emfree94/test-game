import { createSlice } from '@reduxjs/toolkit'

const responseSlice = createSlice({
  name: 'response',
  initialState: {
    data: null,
  },
  reducers: {
    saveResponseData: (state, action) => {
      state.data = action.payload
    },
  },
})

export const { saveResponseData } = responseSlice.actions

export default responseSlice.reducer