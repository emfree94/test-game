import { createSlice } from '@reduxjs/toolkit';

const responseSlice = createSlice({
  name: 'response',
  initialState: {
    data: null,
  },
  reducers: {
    userData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { userData } = responseSlice.actions;

export default responseSlice.reducer;
