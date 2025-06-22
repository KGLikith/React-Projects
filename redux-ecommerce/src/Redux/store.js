import { configureStore } from "@reduxjs/toolkit"
import productsSliceReducer from "./Reducers/productsReducer"
import productSliceReducer from "./Reducers/ProductReducers"

export const store=configureStore({
    reducer:{
        allProducts:productsSliceReducer,
        product:productSliceReducer
    },
    devTools:true
})