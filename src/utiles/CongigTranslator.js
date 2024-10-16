import { createSlice } from "@reduxjs/toolkit";

const GoogleSlice = createSlice({
    name: "Translator",
    initialState: {
        GoogleTranslator: null
    },
    reducers: {
        addGoogleTranslator: (state, action) => {
            state.GoogleTranslator = action.payload;
        }
    }
});

export const { addGoogleTranslator } = GoogleSlice.actions;
export default GoogleSlice.reducer;
