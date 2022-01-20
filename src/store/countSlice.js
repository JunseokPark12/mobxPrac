import { createSlice } from '@reduxjs/toolkit';

const countSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: {
      reducer(state) {
        state += 1;
      },
    },
    decrement: {
      reducer(state) {
        state -= 1;
      },
    },
  },
});

export const { increment, decrement } = countSlice.actions;
export default countSlice;
