import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'searchReducer',
  initialState: { searchValue: '' },
  reducers: {
    search: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const { search } = searchSlice.actions;

export default searchSlice;
