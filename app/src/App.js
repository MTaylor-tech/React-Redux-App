import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./App.css";
import Header from './components/Header';
import Beer from "./components/Beer";
import BeerList from './components/BeerList';
import BeerListSearch from './components/BeerListSearch';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/beer/:beerId" component={Beer} />
          <Route exact path="/" component={BeerList} />
          <Route path="/name/:beerName" component={BeerListSearch} />
          <Route path="/hops/:hops" component={BeerListSearch} />
        </Switch>
      </div>
    </Router>
  );
}