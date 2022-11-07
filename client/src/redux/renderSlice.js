import { createSlice } from '@reduxjs/toolkit';

const renderSlice = createSlice({
  name: 'renderReducer',
  initialState: { render: false },
  reducers: {
    rendering: (state) => {
      state.render = !state.render;
    },
  },
});

export default renderSlice;
export const { rendering } = renderSlice.actions;
