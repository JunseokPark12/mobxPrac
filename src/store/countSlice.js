import { createSlice } from '@reduxjs/toolkit';

const countSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: {
      reducer(state) {
        const propState = state;
        propState.value += 1;
      },
    },
    decrement: {
      reducer(state) {
        const propState = state;
        propState.value -= 1;
      },
    },
  },
});

export const { increment, decrement } = countSlice.actions;
export default countSlice;
