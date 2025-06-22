import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { removeSelectedProduct, selectedProduct } from '../Redux/Actions/productActions';
import {
  selectedProduct,
  removeSelectedProduct,
} from "../Redux/Reducers/ProductReducers";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const { productId } = useParams();

  const { image, id, title, price, category } = product;

  const fetchproduct = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log(err));
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    productId && productId !== "" ? fetchproduct() : null;
    // when the page goes back or to different one
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <div
      className="ui card four column wide "
      style={{
        height: "450px",
        width: "250px",
        margin: "auto",
        marginTop: "100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      key={id}
    >
      {Object.keys(product).length === 0 ? (
        <div style={{ margin: "auto" }}>
          <h1>...Loading</h1>
        </div>
      ) : (
        <>
          <div
            className="image"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <img
              style={{
                width: "100%",
                height: "250px",
                justifyContent: "center",
                alignItems: "center",
              }}
              src={image}
            />
          </div>
          <div
            className="content"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <a className="header">{title}</a>
            <div className="meta price">${price}</div>
            <div className="meta">{category}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetail;
