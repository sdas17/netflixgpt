import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "moviews",
    initialState: {
        nowPlayingMovies: null,
        animationMoviews: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addAnimationmovews: (state, action) => {
            state.animationMoviews = action.payload;
        }
    }
})


export const { addNowPlayingMovies, addAnimationmovews } = moviesSlice.actions;

export default moviesSlice.reducer;