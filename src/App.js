import './App.css';
import './Nav.css';
import './Login.css';
import {Home, About, Login, SignUp} from './route.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {NavBar} from './components/nav.js';
import {Footer} from './components/footer.js';

function RouteExt({
  component: Component,
  layout: Layout,
  ...rest
}) {
  return (
    <Route {...rest} render={(props) =>
      <>
        <p id="annoying" onClick={function() {window.location.href="https://www.google.com/search?q=stupid"}}>
          Free $10,000! Click me
        </p>
        <NavBar Home About Login />
        <Layout {...props}>
          {function () {
            if (Component) {
              <Component {...props} />
            } else {
              <div />
            }
          }}
        </Layout>
        <Footer id="footer" />
      </>
    } />
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <RouteExt path="/login" layout={Login} />
          <Route path="/signup">
            <p id="annoying" onClick={function() {window.location.href="https://www.google.com/search?q=stupid"}}>
              Free $10,000! Click me
            </p>
            <NavBar Home About Login />
            <SignUp />
            <Footer id="footer" />
          </Route>
          <Route path="/about">
            <p id="annoying" onClick={function() {window.location.href="https://www.google.com/search?q=stupid"}}>
              Free $10,000! Click me
            </p>
            <NavBar Home About Login />
            <About />
            <Footer id="footer" />
          </Route>
          <Route exact path="/">
            <p id="annoying" onClick={function() {window.location.href="https://www.google.com/search?q=stupid"}}>
              Free $10,000! Click me
            </p>
            <NavBar Home About Login />
            <Home />
            <Footer id="footer" />
          </Route>
          <Route  path="*">
            <div>
              Page Not Found 404
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;