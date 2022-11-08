import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './loginSlice';
import renderSlice from './renderSlice';
import searchSlice from './searchSlice';

const store = configureStore({
  reducer: {
    loginReducer: loginSlice.reducer,
    searchReducer: searchSlice.reducer,
    renderReducer: renderSlice.reducer,
  },
});

export default store;
