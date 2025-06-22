import { configureStore } from "@reduxjs/toolkit";
import checkoutslicered from "./checkoutslice/checkoutslice"

export const store=configureStore({
    reducer:{
        checkout:checkoutslicered
    },
    devTools:true
})