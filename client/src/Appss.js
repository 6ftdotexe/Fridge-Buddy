import React from "react";
import Login from "./pages/Login/index";
import Main from "./pages/Main/index";
import Inventory from "./pages/Inventory/index";
import About from "./pages/About/index";
import Favorites from "./pages/Favorites/index";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path={process.env.PUBLIC_URL + "/"} component={main} />
      <Route exact path={process.env.PUBLIC_URL + "/Login"} component={Login} />
      <Route exact path={process.env.PUBLIC_URL + "/About"} component={About} />
      <Route
        exact
        path={process.env.PUBLIC_URL + "/Favorites"}
        component={Favorites}
      />
      <Route
        exact
        path={process.env.PUBLIC_URL + "/Inventory"}
        component={Inventory}
      />
    </Router>
  );
}
export default App;
