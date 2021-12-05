import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useState } from 'react';

import Home from'./Pages/Home';
import About from'./Pages/About';
import Resources from'./Pages/Resources';
import Header from './Components/Header/Header';
import React from "react";
import ReactPlayer from 'react-player';


function App() {
  const [list, setList] = useState([]);
  return (
    <Router>
      <Header/>
      <div>
        <Switch>
          <Route path="/resources">
            <Resources/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>     
          <Route path="/">
            <Home list={list} setList={setList}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
