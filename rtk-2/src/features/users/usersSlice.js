import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, name: 'Saman Hoseinpour' },
  { id: 2, name: 'Ali Nosrati' },
  { id: 3, name: 'Hamed Hemati' },
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const AllUsers = (state) => state.users;

export default usersSlice.reducer;
