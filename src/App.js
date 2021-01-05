import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Topbar from "./components/Layout/Navbar";
import Product from "./components/Products/Product";
import ProductPage from "./components/Page/ProductPage";
import Modal from "./components/Layout/Modal";
import "./styles.css";

export default function App() {
  const [modalShow, setShowModal] = useState(false);
  return (
    <div className="App">
      <Router>
        <Topbar />
        <Switch>
          <Route path="/product/:id" component={ProductPage} />

          <Route path="/">
            <Product />
          </Route>
        </Switch>
        <Route path="/img/:id" component={Modal} />
      </Router>
    </div>
  );
}
