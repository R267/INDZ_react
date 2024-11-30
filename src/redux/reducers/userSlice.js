// reducers/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    email: '',
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    resetUser: () => ({
      name: '',
      email: '',
    }),
  },
});

export const { setName, setEmail, resetUser } = userSlice.actions;
export default userSlice.reducer;
