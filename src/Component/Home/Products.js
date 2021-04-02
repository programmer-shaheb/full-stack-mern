import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Products = (props) => {
  const { _id, productName, price, weight, imgURL } = props.product;

  return (
    <>
      <div className="col-md-4 col-10 mx-auto mt-4 mb-2">
        <div className="card text-center product-card d-flex justify-content-center align-items-center">
          <img
            className="card-img-top img-fluid mt-4"
            src={imgURL}
            alt={productName}
          />
          <div className="card-body">
            <h3 className="card-title">
              {productName.toUpperCase()} {weight}
            </h3>
            <h4 className="card-text">$ {price}</h4>
            <Link to={`/products/${_id}`} className="btn btn-outline-success">
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
