import React from "react";
import "./Admin.css";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <>
      <div className="side-bar">
        <Link to="/home">
          <h3>Hungry Helpers</h3>
        </Link>
        <ul>
          <Link to="/addProduct">
            <li>
              <h4>Add Products</h4>
            </li>
          </Link>
          <Link to="/editProduct">
            <li>
              <h4>Manage Products</h4>
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Admin;
