import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Heading from "./components/Heading/Heading";
import ViewDetails from "./Webpages/ViewDetails";
import Home from "./Webpages/Home";

function App() {

  return (
    <div className="App">
      <Heading />
      <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:id"  component={ViewDetails}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
