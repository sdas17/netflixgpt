import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const  authsore=configureStore({
    reducer:{
        user: userSlice,
    }

})
export default authsore;