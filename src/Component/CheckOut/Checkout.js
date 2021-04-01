import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { userContext } from "../../App";

const Checkout = () => {
  const [productDetail, setProductDetail] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useContext(userContext);

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5055/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProductDetail(data[0]));
  }, [id]);

  const handleOrder = () => {
    const orderInfo = { ...productDetail, isLoggedIn };

    fetch("http://localhost:5055/addOrder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <h3>Checkout</h3>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Description</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>{productDetail.productName}</td>
                    <td>1</td>
                    <td>{productDetail.price}</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Total</th>
                    <th scope="col"></th>
                    <th scope="col">{productDetail.price}</th>
                  </tr>
                </tfoot>
              </table>
              <Link
                to="/orders"
                className="btn btn-success"
                onClick={handleOrder}
              >
                Check Out
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
