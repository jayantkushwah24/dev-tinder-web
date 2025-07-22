import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: [], // better than null
  reducers: {
    addFeed: (state, action) => {
      return action.payload;
    },
    removeUserFromFeed: (state, action) => {
      return state.filter((user) => user._id !== action.payload);
    },
    removeFeed: () => {
      return [];
    },
  },
});

export const { addFeed, removeUserFromFeed, removeFeed } = feedSlice.actions;
export default feedSlice.reducer;
