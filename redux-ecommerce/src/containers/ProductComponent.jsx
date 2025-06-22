import React from 'react'
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom"

const ProductComponent = () => {
    const productsdata=useSelector((state)=>state.allProducts.products);

    const renderList=productsdata.map((productdata)=>{
        return (
            <Link to={`/product/${productdata.id}` }>
            <div key={productdata.id} className="ui card four column wide "  style={{height:"450px",width:"250px",marginTop:"20px",display:'flex',flexDirection:'column',justifyContent:'space-between'}} >
                <div className="image" style={{display:'flex',flexDirection:'column',}}>
                    <img style={{width:"100%",height:"250px", justifyContent:'center',alignItems:'center'}} src=
                        {productdata.image} />
                </div>
                <div className="content" style={{display:'flex',flexDirection:'column',justifyContent:'flex-end'}}>
                    <a className="header">{productdata.title}</a>
                    <div className="meta price">
                    ${productdata.price}
                    </div>
                    <div className="meta">
                    {productdata.category}
                    </div>
                </div>
        </div>
            </Link>
        )
    })

    return (
        <>
        {renderList}</>
    )
}

export default ProductComponent
