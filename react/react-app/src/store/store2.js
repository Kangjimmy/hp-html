import { combineReducers, configureStore } from '@reduxjs/toolkit';
import memberSlice from '../features/member/memberSlice';

const rootReducer = combineReducers({
  member: memberSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
