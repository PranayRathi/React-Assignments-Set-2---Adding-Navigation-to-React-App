import React, { Component } from "react";
import { Route, Switch, Link, BrowserRouter as Router } from "react-router-dom";
import { useLocation } from "react-router";
import "../styles/App.css";

function LocationDisplay() {
  const location = useLocation();
  return (
    <>
      <div data-testid="location-display">{location.pathname}</div>
    </>
  );
}
class App extends Component {
  render() {
    return (
      <div id="main">
        <Router>
          <Link to="/"> Home</Link>
          <Link to="/about">About</Link>
          <Switch>
            <Route path="/" exact component={() => <div>You are Home.</div>} />
            <Route
              path="/about"
              exact
              component={() => <div>You are on the about page.</div>}
            />
            <Route path="/" component={() => <div>No match</div>} />
          </Switch>
        </Router>
        <LocationDisplay />
      </div>
    );
  }
}
export { LocationDisplay };
export default App;
