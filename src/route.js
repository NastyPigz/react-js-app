import {LoginDiv} from './components/login.js';
import {SignUpDiv} from './components/signup.js';

export function Home() {
    return (
      <header className="App-header">
        <p>
          Home Page
        </p>
      </header>
    );
};

export function About() {
    return (
      <header className="App-header">
        <p>
          About Page
        </p>
      </header>
    );
};

export function Login() {
  return (
    <div>
      {/* <button onClick={LoginLaunch} style={{width:"auto"}}>Login</button> */}
      <LoginDiv />
    </div>
  );
};

export function SignUp() {
  return (
    <div>
      {/* <button onClick={SignUpLaunch} style={{width:"auto"}}>Sign Up</button> */}
      <SignUpDiv />
    </div>
  );
};