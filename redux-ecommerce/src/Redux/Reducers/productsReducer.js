import { createSlice,createSelector,createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  products:[]
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state,{payload}) => {
      state = {...state,products:payload}
      return state;
    },
    default:(state)=>{
      state= state;
      return state;
    }
  },
})



export const { setProducts } = productsSlice.actions

export default productsSlice.reducer