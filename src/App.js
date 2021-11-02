import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';

import Home from'./Pages/Home';
import Guide from'./Pages/Guide';
import About from'./Pages/About';
import Resources from'./Pages/Resources';

function App() {
  return (
    <Router>
      <Menu right >
        <Link to="/">Home</Link>
        <Link to="/guide">Guide</Link>
        <Link to="/about">About</Link>
        <Link to="/resources">Resources</Link>
      </Menu>
      <div id="outer-container">

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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
