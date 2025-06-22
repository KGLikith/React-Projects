import { createSlice } from "@reduxjs/toolkit";


const initialState={
    counter:[
        {
            name:"Customer Info",
            Component: ()=> <div>Provide your contact details.</div>
        },
        {
            name:"Shipping Info",
            Component: ()=> <div>Enter your shipping address</div>
        },
        {
            name:"Payment Info",
            Component: ()=> <div>Complete payment for your order</div>
        },
        {
            name:"Delivered",
            Component: ()=> <div>Your order has been delivered</div>
        }
    ]
}

const checkoutslice=createSlice({
    name:"checkout",
    initialState,
    reducers:{
        
    }
})

export default checkoutslice.reducer;