import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviewReducers from './MoviewSlice';
import gptReducer from '../utiles/GptSlice'
import GoogleSlice from "./../utiles/CongigTranslator";
const authsore = configureStore({
    reducer: {
        user: userSlice,
        movies: moviewReducers,
        gpt: gptReducer,
        Translator: GoogleSlice
    }

})
export default authsore;


