import { combineReducers, configureStore } from '@reduxjs/toolkit';
import countSlice from './countSlice';

const rootReducer = combineReducers({
  counter: countSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
