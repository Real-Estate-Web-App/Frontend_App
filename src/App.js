import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import NavigationBar from './navigation-bar';
import Home from './home/home';
import News from "./news/news";
import Rent from "./rent/rent";
import Purchase from "./purchase/purchase";
import AboutUs from "./aboutus/about-us";
import Contact from "./contact/contact";
// import ErrorPage from './commons/errorhandling/error-page';

import './App.css';

function App() {

  // function resetCookies() { //functia care reseteaza iconitele -> trimisa la navbar -> logout user.
  //   localStorage.clear();
  //   console.log("User: " + JSON.parse(localStorage.getItem('user')));
  // }

  return (
      <div>{/*className={styles.back}*/}
        <Router>
          <div>
            <NavigationBar/> {/*onClickFunction={resetCookies}*/}
            <Switch>
              <Route
                  exact
                  path='/'
                  render={() => <Home />}
              />
              <Route
                  exact
                  path='/news'
                  render={() => <News />}
              />
              <Route
                  exact
                  path='/rent'
                  render={() => <Rent />}
              />
              <Route
                  exact
                  path='/purchase'
                  render={() => <Purchase />}
              />
              <Route
                  exact
                  path='/aboutUs'
                  render={() => <AboutUs />}
              />
              <Route
                  exact
                  path='/contact'
                  render={() => <Contact />}
              />

              {/*/!*Error*!/*/}
              {/*<Route*/}
              {/*    exact*/}
              {/*    path='/error'*/}
              {/*    render={() => <ErrorPage />}*/}
              {/*/>*/}

              {/*<Route render={() => <ErrorPage />} />*/}
            </Switch>
          </div>
        </Router>
      </div>
  );
}

export default App;