import { createSlice } from '@reduxjs/toolkit';

const countSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: {
      reducer(state) {
        state.value += 1;
      },
    },
    decrement: {
      reducer(state) {
        state.value -= 1;
      },
    },
  },
});

export const { increment, decrement } = countSlice.actions;
export default countSlice;
