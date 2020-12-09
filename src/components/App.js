import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import "../styles/App.css";
import About from "./About";
import Home from "./About";
import LocationDisplayComponent from "./LocationDisplayComponent";

class App extends Component {
  render() {
    return (
      <div id="main">
        <Link to="/about">About</Link>
        <Link to="/"> Home</Link>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="/" component={() => <div>No match</div>} />
        </Switch>

        <LocationDisplayComponent />
      </div>
    );
  }
}
export { Home, About, LocationDisplayComponent };
export default App;
