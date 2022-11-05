import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './loginSlice';

const store = configureStore({
  reducer: {
    loginReducer: loginSlice.reducer,
  },
});

export default store;
