import React, { useEffect, useState } from "react";
import Admin from "./Admin";
import "./EditProduct.css";

const EditProduct = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    fetch(`https://desolate-refuge-31632.herokuapp.com/products`)
      .then((res) => res.json())
      .then((data) => {
        setProductList(data);
      });
  }, [productList]);

  const handleDeleteProduct = (id) => {
    console.log(id);
    fetch("https://desolate-refuge-31632.herokuapp.com/delete/" + id, {
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
              <div className="row ">
                <table class="table table-bordered tab-case">
                  <thead>
                    <tr>
                      <th scope="col">Product Name</th>
                      <th scope="col">Price</th>
                      <th scope="col">Weight</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productList.map((product) => (
                      <tr>
                        <td>{product.productName}</td>
                        <td>{product.price}</td>
                        <td>{product.weight}</td>
                        <td>
                          <button
                            onClick={() =>
                              handleDeleteProduct(`${product._id}`)
                            }
                            className="btn btn-danger"
                          >
                            Delete Product
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProduct;
