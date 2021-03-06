import React, { useEffect, useState } from "react";
import Products from "./Products";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://desolate-refuge-31632.herokuapp.com/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              {products.length === 0 && (
                <div className="col-md-4 col-10 mx-auto mt-4 mb-2">
                  <div class="d-flex justify-content-center">
                    <div
                      class="spinner-border text-danger text-center"
                      role="status"
                    >
                      <span class="sr-only">Loading...</span>
                    </div>
                  </div>
                </div>
              )}
              {products.map((product) => (
                <Products key={product._id} product={product}></Products>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
