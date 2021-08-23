import './App.css';
import {Home, About, Login, SignUp} from './route.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {NavBar} from './components/nav.js';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar Home About Login>

        </NavBar>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;