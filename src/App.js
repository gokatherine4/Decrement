import React, { Component } from "react";
import Decrement from "./Decrement";
import Accruement from "./Accruement";
import "./App.css";


class App extends Component {
  render() {
  return (
    <>
      <Accruement start={100} />
      <Decrement start={500} />
    </>
    );
  }
}
export default App;