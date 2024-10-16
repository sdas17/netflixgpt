import { createSlice } from "@reduxjs/toolkit";


const GptSlice = createSlice({
    name: "gpt",
    initialState: {
        gptSearch: false,
    },
    reducers: {
        toggleGptSearch: (state, action) => { // Updated function name to reflect its behavior
            state.gptSearch = !state.gptSearch;
        },
    },
});

export const { toggleGptSearch } = GptSlice.actions;
export default GptSlice.reducer
