import React,{useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux"
import ProductComponent from './ProductComponent';
import axios from "axios"
import { setProducts } from '../Redux/Reducers/productsReducer';

const ProductListing = () => {
    const products=useSelector((state)=>state.allProducts.products);
    const dispatch=useDispatch();

    const fetchdata=async()=>{
        const data =await axios.get('https://fakestoreapi.com/products').catch((err)=>{console.log(err)})
        dispatch(setProducts(data.data))
    }

    useEffect(() => {
      fetchdata()
    }, [])
    
  return (
    <div className='ui grid container' style={{marginTop:"20px"}} >
      <ProductComponent />
    </div>
  )
}

export default ProductListing
