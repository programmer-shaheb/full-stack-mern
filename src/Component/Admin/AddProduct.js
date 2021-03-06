import React, { useState } from "react";
import Admin from "./Admin";
import "./AddProduct.css";
import axios from "axios";

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [weight, setWeight] = useState("");
  const [imgURL, setImgURL] = useState("");

  const handleImageUpload = (e) => {
    const imageData = new FormData();
    imageData.set("key", "7184e55b9c8e805365a6a89665fcaed1");
    imageData.append("image", e.target.files[0]);

    axios.post("https://api.imgbb.com/1/upload", imageData).then((res) => {
      setImgURL(res.data?.data?.display_url);
    });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();

    const productData = {
      productName,
      price,
      weight,
      imgURL,
    };

    fetch("https://desolate-refuge-31632.herokuapp.com/addProduct", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    setImgURL("");
    setPrice("");
    setProductName("");
    setWeight("");
  };

  return (
    <>
      <Admin></Admin>
      <div className="addProduct">
        <h1>Add Product</h1>
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-10 mx-auto d-flex justify-content-center align-items-center"
              style={{ minHeight: "50vh" }}
            >
              <div className="w-100 " style={{ maxWidth: "1000px" }}>
                <form className="row g-3 " onSubmit={handleAddProduct}>
                  <div className="col-md-4 mt-5 ">
                    <label for="validationCustom01" className="form-label">
                      <h4>Product Name</h4>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationCustom01"
                      value={productName}
                      onChange={(e) => setProductName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-4 mt-5">
                    <label for="validationCustom02" className="form-label">
                      <h4>Add Price</h4>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationCustom02"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      required
                    />
                  </div>

                  <div className="col-md-6 mt-5">
                    <label for="validationCustom03" className="form-label">
                      <h4>Weight</h4>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationCustom03"
                      onChange={(e) => setWeight(e.target.value)}
                      value={weight}
                      required
                    />
                  </div>
                  <div className="col-md-4 mt-5">
                    <label for="validationCustom02" className="form-label">
                      <h4>Upload Your Image</h4>
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="validationCustom02"
                      onChange={handleImageUpload}
                      required
                    />
                  </div>
                  <div className="col-12 mt-5 ">
                    {imgURL ? (
                      <>
                        <button className="btn btn-primary" type="submit">
                          Add Product
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className="btn btn-primary"
                          disabled
                          type="submit"
                        >
                          Add Product
                        </button>
                      </>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
