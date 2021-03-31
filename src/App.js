import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./Component/Header/Navbar";
import Home from "./Component/Home/Home";
import Admin from "./Component/Admin/Admin";
import AddProduct from "./Component/Admin/AddProduct";
import EditProduct from "./Component/Admin/EditProduct";

function App() {
  return (
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
        <Route exact path="/admin">
          <Admin></Admin>
        </Route>
        <Route exact path="/addProduct">
          <AddProduct></AddProduct>
        </Route>
        <Route exact path="/editProduct">
          <EditProduct></EditProduct>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
