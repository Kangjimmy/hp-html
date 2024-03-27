import { createSlice } from '@reduxjs/toolkit';

// initialState는 복잡해서 따로 빼서 만드는 경우가 있다
const initialState = {
  value: 0,
  name: 'jimmy',
};
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      console.log('payload:', action.payload);
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
