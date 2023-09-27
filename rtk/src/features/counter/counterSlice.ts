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
    // addSpecificAmount
    addAmount(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
    // reset
    reset() {
      return initialState;
    },
  },
});

export const { incremented, deceremented, addAmount, reset } =
  counterSlice.actions;
export default counterSlice.reducer;
