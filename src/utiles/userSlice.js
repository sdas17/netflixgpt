import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: null,
  reducers: {
    addObject: (state, action) => {
      return action.payload
    },
    removeObject: (state, action) => {
        return null
    }
  }
});

export const { addObject, removeObject } = userSlice.actions;
export default userSlice.reducer;
