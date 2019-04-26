import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "../stylesheets/App.css";
import Login from "./Login.js"

class App extends Component{
  render(){
    return(
      <Login/>
    );
  }
}

export default hot(module)(App);