import React, { Component} from "react";
import {hot} from "react-hot-loader";
import CreateChallenge from "../CreateChallenge";

class App extends Component{
  render(){
    return(
      <CreateChallenge/>
    );
  }
}

export default hot(module)(App);