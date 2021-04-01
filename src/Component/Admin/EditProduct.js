import React, { useEffect, useState } from "react";
import Admin from "./Admin";
import "./EditProduct.css";

const EditProduct = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5055/products`)
      .then((res) => res.json())
      .then((data) => {
        setProductList(data);
      });
  }, []);

  const handleDeleteProduct = (id) => {
    console.log(id);
    fetch("http://localhost:5055/delete/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <>
      <Admin></Admin>
      <div className="editProduct">
        <h1>Edit Product</h1>
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                {productList.map((product) => (
                  <>
                    <div className="col-10">
                      <h3>{product.productName}</h3>
                      <button
                        onClick={() => handleDeleteProduct(`${product._id}`)}
                        className="btn btn-danger"
                      >
                        Delete Product
                      </button>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProduct;
