import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import { Route, Switch } from "react-router-dom";

const hats = () => <div> hats</div>;
function App() {
  return (
    <Switch>
      <Route path="/">
        <HomePage />
      </Route>
      <Route path="/hats"></Route>
    </Switch>
  );
}

export default App;
