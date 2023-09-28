import { createSlice } from '@reduxjs/toolkit';

const initialState = { count: 0 };

const counterSlice = createSlice({
  name: 'counter',
  initialState,

  reducers: {
    increase: (state) => {
      state.count++;
    },

    decrease: (state) => {
      state.count--;
    },

    reset: () => {
      return initialState;
    },
  },
});

export const { increase, decrease, reset } = counterSlice.actions;
export default counterSlice.reducer;
