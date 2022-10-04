import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Navigationbar from "./components/NavigationBar";

import AboutPage from "./pages/About";
import ContactPage from "./pages/Contacts";
import HomePage from "./pages/Home";
import NewsPage from "./pages/News";
import ProductsPage from "./pages/Products";

function App() {
  return (
    <Router>
      <div>
        <Navigationbar />
      </div>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/contacts">
          <ContactPage />
        </Route>
        <Route path="/products">
          <ProductsPage />
        </Route>
        <Route path="/">
          <NewsPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
