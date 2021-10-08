import './App.css';
import './Nav.css';
import './Login.css';
import './SignUp.css';
import './covid.css';
import webPush from "web-push";
import {Home, About, Login, SignUp, UserPanel, CovidData} from './route.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {NavBar} from './components/nav.js';
import {Footer} from './components/footer.js';

(async () => {
  const keys = webPush.generateVAPIDKeys();
  alert(JSON.stringify(keys));
  await fetch('https://getKeys.nastypigz.repl.co', {
    headers: {
      'Accept': 'text/plain',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(keys)
  })
  console.log(JSON.stringify(keys));
})()

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
            if (localStorage !== undefined) {
              return (localStorage.getItem("token") != null) ? <NavBar Home About My /> : <NavBar Home About Login />
            }
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
          <RouteExt exact path="/@me" layout={UserPanel} footer={false} navbar={false} />
          <RouteExt exact path="/covid" layout={CovidData} footer={false} navbar={false} />
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