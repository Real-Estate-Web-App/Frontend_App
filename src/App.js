import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavigationBar from "./navigation-bar";
import Home from "./home/home";
import News from "./news/news";
import Rent from "./rent/rent";
import Purchase from "./purchase/purchase";
import AboutUs from "./aboutus/about-us";
import Contact from "./contact/contact";
import "./App.css";

export const AppContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") !== null) {
      setIsLoggedIn(JSON.parse(localStorage.getItem("isLoggedIn")));
    }
    if (localStorage.getItem("isAdmin") !== null) {
      setIsAdmin(JSON.parse(localStorage.getItem("isAdmin")));
    }
  }, []);

  return (
    <AppContext.Provider
      value={{ isAdmin, isLoggedIn, setIsLoggedIn, setIsAdmin }}
    >
      <div>
        <Router>
          <div>
            <NavigationBar />
            <Switch>
              <Route exact path="/" render={() => <Home />} />
              <Route exact path="/news" render={() => <News />} />
              <Route exact path="/rent" render={() => <Rent />} />
              <Route exact path="/purchase" render={() => <Purchase />} />
              <Route exact path="/aboutUs" render={() => <AboutUs />} />
              <Route exact path="/contact" render={() => <Contact />} />
            </Switch>
          </div>
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;
