import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const  authsore=configureStore({
    reducer:{
        users:userSlice
    }

})
export default authsore;