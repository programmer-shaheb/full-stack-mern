import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./Component/Header/Navbar";
import Home from "./Component/Home/Home";
import Admin from "./Component/Admin/Admin";
import AddProduct from "./Component/Admin/AddProduct";
import EditProduct from "./Component/Admin/EditProduct";
import Checkout from "./Component/CheckOut/Checkout";
import Login from "./Component/Login/Login";
import { createContext, useState } from "react";
import Order from "./Component/Orders/Order";
import PrivateRoute from "./Component/Login/PrivateRoute";

export const userContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState("");

  return (
    <userContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar></Navbar>
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Navbar></Navbar>
            <Home></Home>
          </Route>
          <PrivateRoute exact path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute exact path="/addProduct">
            <AddProduct></AddProduct>
          </PrivateRoute>
          <PrivateRoute exact path="/editProduct">
            <EditProduct></EditProduct>
          </PrivateRoute>
          <PrivateRoute exact path="/products/:id">
            <Navbar></Navbar>
            <Checkout></Checkout>
          </PrivateRoute>
          <Route exact path="/login">
            <Navbar></Navbar>
            <Login></Login>
          </Route>
          <PrivateRoute exact path="/orders">
            <Navbar></Navbar>
            <Order></Order>
          </PrivateRoute>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
