import {LoginDiv} from './components/login.js';
import {SignUpDiv} from './components/signup.js';
import {PanelUI} from './components/panelUI.js';
import {Covid19} from './components/covid.js';
import './Panel.css';
import './PanelAlt.css';

export function Home() {
    return (
      <header className="App-header">
        <p>
          Home Page
        </p>
      </header>
    );
}

export function About() {
    return (
      <header className="App-header">
        <p>
          About Page
        </p>
      </header>
    );
}

export function Login() {
  return (
    <div>
      {/* <button onClick={LoginLaunch} style={{width:"auto"}}>Login</button> */}
      <LoginDiv />
    </div>
  );
}

export function SignUp() {
  return (
    <div>
      {/* <button onClick={SignUpLaunch} style={{width:"auto"}}>Sign Up</button> */}
      <SignUpDiv />
    </div>
  );
}

export function UserPanel() {
  return (
    <PanelUI />
  )
}

export function CovidData() {
  return (
    <>
      <Covid19 />
    </>
  )
}