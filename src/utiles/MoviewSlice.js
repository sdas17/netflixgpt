import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "moviews",
    initialState: {
        nowPlayingMovies: null,
        animationMoviews: null,
        PopularMovies: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addAnimationmovews: (state, action) => {
            state.animationMoviews = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.PopularMovies = action.payload;

        },

    }
})


export const { addNowPlayingMovies, addAnimationmovews, addPopularMovies } = moviesSlice.actions;

export default moviesSlice.reducer;