import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../App";
import loader from "../../Loader/animation_500_kmz3ojbu.gif";

const Order = () => {
  const [isLoggedIn, setIsLoggedIn] = useContext(userContext);

  const [orderDetails, setOrderDetails] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5055/orderInfo?email=${isLoggedIn}`)
      .then((res) => res.json())
      .then((data) => setOrderDetails(data));
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-4 col-10 mx-auto mt-4 mb-2">
                <h3>Order </h3>
                <div class="d-flex justify-content-center">
                  {orderDetails.length === 0 && (
                    <img src={loader} alt="loader" />
                  )}
                </div>
                {orderDetails.map((order) => (
                  <li> {order.productName} </li>
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
