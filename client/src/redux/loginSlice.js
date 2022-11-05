import { createSlice } from '@reduxjs/toolkit';
import { addLocalStorage, removeLocalStroage } from '../utils/localStorage';
import { loginAction } from './actions';
import { initialState } from './initialState';
import { toast } from 'react-toastify';

const loginSlice = createSlice({
  name: 'loginReducer',
  initialState: initialState,
  reducers: {
    logOut: (state) => {
      state.user = null;
      removeLocalStroage();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginAction.pending, (state) => {
      state.status = 'Loading';
    });
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.user = action.payload;
      addLocalStorage(state.user);
    });
    builder.addCase(loginAction.rejected, (state) => {
      state.status = 'Fail';
      toast.error('The email or password is incorrect.');
    });
  },
});

export default loginSlice;
export const { logOut } = loginSlice.actions;
