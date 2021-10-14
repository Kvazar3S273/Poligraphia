import logo from './logo.png';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header";
import Main from "./components/main"
import NewOrder from "./components/neworder"
import Orders from "./components/orders"
import Contacts from "./components/contacts"



function App() {
  return (
    <Router>
      <Header />
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Ви попали на сайт поліграфії
          </p>
        </header>
      </div> */}

      <Switch>
        <Route exact path="/main">
          <Main />
        </Route>
        <Route exact path="/neworder">
          <NewOrder />
        </Route>
        <Route exact path="/orders">
          <Orders />
        </Route>
        <Route exact path="/contacts">
          <Contacts />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
