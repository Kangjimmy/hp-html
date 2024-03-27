import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = { members: [] };

const memberSlice = createSlice({
  name: 'member',
  initialState,
  reducers: {
    insertMember: (state, action) => {
      const { name, age, region } = action.payload;
      state.members = [...state.members, { id: uuidv4(), name, age, region }];
    },
    deleteMember: (state, action) => {
      const id = action.payload;
      // state.members = state.members.filter((member) => member.id !== id);
      return {
        members: state.members.filter((member) => member.id !== id),
      };
    },
  },
});

export const { insertMember, deleteMember } = memberSlice.actions;

export default memberSlice.reducer;
