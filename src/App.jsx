import React, { Component } from "react";
import Navbar from "./components/Header/navbar";
import MainNavigation from "./components/Navigation/MainNavigation";
// import CopyToClipboard from './components/copyClipboard'
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <CopyToClipboard/> */}
        <Navbar />
        <MainNavigation />
      </div>
    );
  }
}

export default App;
