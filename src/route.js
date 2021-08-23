import {LoginDiv} from './components/login.js';
import {SignUpDiv} from './components/signup.js';

export function Home() {
    return (
      <header className="App-header">
        <p>
          Paragraph 1
        </p>
      </header>
    );
};

export function About() {
    return (
      <header className="App-header">
        <p>
          Paragraph aye
        </p>
      </header>
    );
};

export function Login() {
  function LoginLaunch() {
    document.getElementById('loginForm').style.display='block';
  }
  return (
    <div>
      <button onClick={LoginLaunch} style={{width:"auto"}}>Login</button>
        <LoginDiv />
    </div>
  );
};

export function SignUp() {
  function SignUpLaunch() {
    document.getElementById('signupForm').style.display='block';
  }
  return (
    <div>
      <button onClick={SignUpLaunch} style={{width:"auto"}}>Sign Up</button>
        <SignUpDiv />
    </div>
  );
};