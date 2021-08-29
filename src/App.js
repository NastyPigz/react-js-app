import './App.css';
import './Nav.css';
import './Login.css';
import './SignUp.css';
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
  navbar: navBool,
  footer: footBool,
  ...rest
}) {
  return (
    <Route {...rest} render={(props) =>
      <>
        {/* <p id="annoying" onClick={function() {window.location.href="https://www.google.com/search?q=stupid"}}>
          Free $10,000! Click me
        </p> */}
        {function () {
          if (navBool === true || navBool == null) {
            return <NavBar Home About Login />
          }
        }()}
        <Layout {...props}>
          {function () {
            if (Component) {
              return <Component {...props} />
            } else {
              return (
                <>
                </>
              )
            }
          }()}
        </Layout>
        {function () {
          if (footBool === true || footBool == null) {
            return <Footer id="footer" />
          }
        }()}
      </>
    } />
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <RouteExt exact path="/login" layout={Login} />
          <RouteExt exact path="/signup" layout={SignUp} />
          <RouteExt exact path="/about" layout={About} />
          <RouteExt exact path="/" layout={Home} />
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