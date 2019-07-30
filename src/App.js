import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Component/Login';
import Search from './Component/Search'
import PlanetDetails from './Component/PlanetDetails';
import Test from './Component/test';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Router>
       <Switch>
        <Route exact path="/" exact component = {Login}/>
        <Route exact path="/Search" component = {Search}/>
        <Route exact path="/Test" component = {Test}/>
        <Route exact path="/PlanetDetails" component = {PlanetDetails}/>
        </Switch>
       </Router>
    </div>
  );
}

export default App;
