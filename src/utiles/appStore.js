import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviewReducers from './MoviewSlice';
const authsore = configureStore({
    reducer: {
        user: userSlice,
        movies: moviewReducers,
    }

})
export default authsore;