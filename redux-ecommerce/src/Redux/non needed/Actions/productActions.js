
//  forget about this not needed... use the simpler newer approach....

import { ActionTypes } from "../Constants/productConstants";

export const setProducts=(products)=>{
    return {
        type:ActionTypes.SET_PRODUCTS,
        payLoad:products,
    }
}

export const selectedProduct=(product)=>{
    return {
        type:ActionTypes.SELECTED_PRODUCT,
        payLoad:product,
    }
}

export const removeSelectedProduct=(product)=>{
    return {
        type:ActionTypes.DELETE_SELECTED_PRODUCT
    }
}