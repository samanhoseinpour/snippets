import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // increment
    incremented(state) {
      state.value++;
    },
    // decrement
    deceremented(state) {
      state.value--;
    },
    // reset
    reset() {
      return initialState;
    },
  },
});

export const { incremented, deceremented, reset } = counterSlice.actions;
export default counterSlice.reducer;
