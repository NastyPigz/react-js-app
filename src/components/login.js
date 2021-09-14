import React from 'react';
import startURL from './start.js';

export class LoginDiv extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            remember: true
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.loginSubmit = this.loginSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
    }

    loginSubmit(event) {
        alert("Submitted!");
        event.preventDefault();
        (async () => {
            const Response = await fetch(`${startURL}/api/auth/login/`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username: document.getElementById("uname").value, password: document.getElementById("psw").value})
            });
            const content = await Response.json();
            if (content.username?.[0]) {
                alert(content.username?.[0]);
            } else {
                if (typeof(localStorage) != undefined) {
                    localStorage.setItem("email", content.user.email);
                    localStorage.setItem("token", content.token);
                    localStorage.setItem("username", content.user.username);
                    localStorage.setItem("id", content.user.id);
                    window.location.href = "/";
                } else {
                    alert("Your browser does not support our system. You have to relogin every time from now on. Consider upgrading!");
                }
            }
            return content;
        })();
    }

    render() {
        return (
            <div id="loginForm" className="loginFormDiv">
                {function() {
                    if (localStorage.getItem("token") != null) {
                        window.location.href = "/";
                    }
                }()}
                <form id="formLogin" className="loginFormContent" onSubmit={this.loginSubmit}>
                    <span>Welcome Back!</span>
                    <div className="loginFormInput">

                        <div id="lformInput">
                            <label htmlFor="uname"><b>Username</b></label>
                            <input id="uname" type="text" placeholder="Enter Username" name="uname" required />
                        </div>

                        <div id="lformInput">
                            <label htmlFor="passw"><b>Password</b></label>
                            <input id="psw" type="password" placeholder="Enter Password" name="psw" required />
                        </div>

                        <div>
                            <button type="submit" className="continueBtn">Login</button>
                        </div>
                        {/* Show Password? */}
                        <div>
                            <a href="?forgotpassword=true">Forgot password?</a>
                        </div>
                        <div className="goSignDiv">
                            <a href="/signup" className="goSign">Don't have an account?</a>
                        </div>
                        <div>
                            <p className="formTos">By creating an account you agree to our <a href="tos" style={{color:"dodgerblue"}}>Terms of Service</a>.</p>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
