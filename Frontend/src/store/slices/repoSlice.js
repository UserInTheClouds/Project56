import { createSlice } from '@reduxjs/toolkit';

export const repoSlice = createSlice({
  name: 'repos',
  initialState: {
    list: [],
  },
  reducers: {
    setRepos: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setRepos } = repoSlice.actions;
export default repoSlice.reducer;
