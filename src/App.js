// import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavigationBar from './navigation-bar';
import Home from './home/home';
import News from "./news/news";
import Rent from "./rent/rent";
// import ErrorPage from './commons/errorhandling/error-page';
// import styles from './commons/styles/project-style.css';

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

              {/*<Route*/}
              {/*    exact*/}
              {/*    path='/device'*/}
              {/*    render={() => <DeviceContainer />}*/}
              {/*/>*/}

              {/*<Route*/}
              {/*    exact*/}
              {/*    path='/client'*/}
              {/*    render={() => <ClientContainer />}*/}
              {/*/>*/}

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

// Varianta initiala a proiectului (varianta default proiect react):
/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/