import React, { Component} from "react";
import {hot} from "react-hot-loader";
import Login from "../Login"

class App extends Component{
  render(){
    return(
      <Login/>
    );
  }
}

export default hot(module)(App);