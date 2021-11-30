import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from'./Pages/Home';
import Guide from'./Pages/Guide';
import About from'./Pages/About';
import Resources from'./Pages/Resources';
import Header from './Components/Header/Header';
import { useState } from 'react';

function App() {
  const [list, setList] = useState([]);
  const yo = ['hi', 'hello'];
  
  // const handleInputChange = event => {
  //   const { addedList } = event.target;
  //   setList(addedList);
  // }
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
          <Route path="/guide">
            <Guide 
              setList={setList}
              listData={list}/>
          </Route>
          <Route path="/">
            <Home 
              setList={setList}
              listData={list}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
