import { configureStore } from '@reduxjs/toolkit';
import countSlice from './countSlice';

const store = configureStore({
  reducer: [countSlice.reducer],
});

export default store;
