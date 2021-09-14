import React from 'react';
import startURL from './start.js'

export class SignUpDiv extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            remember: true
        };
        this.signupSubmit = this.signupSubmit.bind(this);
    }

    signupSubmit(event) {
        event.preventDefault();
        (async () => {
            const Response = await fetch(`${startURL}/api/auth/register/`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username: document.getElementById("usname").value, password: document.getElementById("pswd").value, email: document.getElementById("email").value})
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
            <div id="signupForm" className="signupFormDiv">
                {function() {
                    if (localStorage.getItem("token") != null) {
                        window.location.href = "/";
                    }
                }()}
                <form className="signupFormContent" onSubmit={this.signupSubmit}>
                    <span><b>Create an account</b></span>
                    <div className="signupFormInput">
                        <div className="formEmail" id="formInput">
                            <label htmlFor="email"><b>Email</b></label>
                            <input id="email" type="text" placeholder="Enter your Email" name="email" required />
                        </div>
                        <div className="formUname" id="formInput">
                            <label htmlFor="username"><b>Username</b></label>
                            <input id="usname" type="text" placeholder="Enter your username" name="username" required />
                        </div>
                        <div className="formPsw" id="formInput">
                            <label htmlFor="psw"><b>Password</b></label>
                            <input id="pswd" type="password" placeholder="Enter your Password" name="psw" required />
                        </div>
                        <div>
                            <button type="submit" className="continueBtn">Continue</button>
                        </div>
                        <div>
                            <a href="/login" className="loginHref">Already have an account?</a>
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