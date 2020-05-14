import React from "react";
import "./App.css";
import "react-bootstrap/dist/react-bootstrap.min.js";
import SignUp from "./Components/SignUp";
import Home from "./Components/Home";
import ConfirmUser from "./Components/ConfirmUser";
import LogIn from "./Components/LogIn";
import FolderComp from "./Components/FolderComp";
import ChildFolder from "./Components/ChildFolder";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      // <div>
      //   <SignUp />
      // </div>

      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/credential" component={ConfirmUser} />
        <Route path="/login" component={LogIn} />
        <Route exact path="/folder/:id" component={ChildFolder} />
        <Route exact path="/folder" component={FolderComp} />
      </Router>
    );
  }
}

export default App;
