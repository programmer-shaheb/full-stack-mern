import React from "react";
import "./Admin.css";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <>
      <div className="side-bar">
        <Link to="/home">
          <h3>Hungry Helpers</h3>{" "}
        </Link>
        <ul>
          <Link to="/addProduct">
            <li>Add</li>
          </Link>
          <Link to="/editProduct">
            <li>Edit</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Admin;
