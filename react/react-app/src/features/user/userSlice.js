import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  age: 0,
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeName: (state) => {
      state.name = 'jimmy';
    },
    changeAge: (state) => {
      state.age = 28;
    },
  },
});

export const { changeName, changeAge } = userSlice.actions;
export default userSlice.reducer;
