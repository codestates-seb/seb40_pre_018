import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './loginSlice';
import searchSlice from './searchSlice';

const store = configureStore({
  reducer: {
    loginReducer: loginSlice.reducer,
    searchReducer: searchSlice.reducer,
  },
});

export default store;
