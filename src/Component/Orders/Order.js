import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../App";
import loader from "../../Loader/animation_500_kmz3ojbu.gif";

const Order = () => {
  const [isLoggedIn, setIsLoggedIn] = useContext(userContext);

  const [orderDetails, setOrderDetails] = useState([]);
  useEffect(() => {
    fetch(
      `https://desolate-refuge-31632.herokuapp.com/orderInfo?email=${isLoggedIn}`
    )
      .then((res) => res.json())
      .then((data) => setOrderDetails(data));
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className=" col-10 mx-auto mt-4 mb-2">
                <h2 className="text-success">Order History </h2>
                <div class="d-flex justify-content-center">
                  {orderDetails.length === 0 && (
                    <img src={loader} alt="loader" />
                  )}
                </div>
                <h3>Your Email : {isLoggedIn} </h3>
                {orderDetails.map((order) => (
                  <div className=" bg-light rounded p-3 m-4 d-flex justify-content-around align-items-center">
                    <h4> {order.productName} </h4>
                    <h4> $ {order.price} </h4>
                    <h4> {order.createdAt} </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
