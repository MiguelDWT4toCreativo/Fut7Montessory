import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  result: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setResult: (state, action) => {
      state.result = action.payload;
    },
  },
});

export const { setResult } = authSlice.actions;

export default authSlice.reducer;
