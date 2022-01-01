import logo from "./logo.png";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header.js";
import { Button } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Header></Header>
    </div>
  );
}
export default App;
