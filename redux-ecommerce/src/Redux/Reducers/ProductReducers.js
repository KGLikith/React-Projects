import { createSlice } from '@reduxjs/toolkit'

const initialState = {
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    selectedProduct: (state,{payload}) => {
      state= {...state,...payload}
      return state;
    },
    removeSelectedProduct:(state,action)=>{
      return state={}
    }
  },
})

export const { selectedProduct,removeSelectedProduct } = productSlice.actions

export default productSlice.reducer