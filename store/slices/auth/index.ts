import { createSlice } from '@reduxjs/toolkit';

interface State {
  user: { id: string; name: string } | undefined;
  isLoggedIn: boolean;
}

const initialState = {
  user: undefined,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state: State, action) => {
      console.log('login');
    },
  },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
