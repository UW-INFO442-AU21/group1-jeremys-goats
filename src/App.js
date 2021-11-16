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

function App() {

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
            <Guide/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
