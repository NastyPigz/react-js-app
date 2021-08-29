import React from 'react';
// import axios from 'axios';

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
            const Response = await fetch('http://127.0.0.1:8000/api/auth/register/', {
              method: 'OPTIONS',
            });
            console.log(Response);
            return Response;
        })();
        // (async () => {
        //     const Res2 = await fetch('http://127.0.0.1:8000/api/auth/register/', {
        //       method: 'POST',
        //       headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //       },
        //       mode: "no-cors",
        //       body: JSON.stringify({username: document.getElementById("usname").value, password: document.getElementById("pswd").value, email: document.getElementById("email").value})
        //     });
        //     const cont2 = await Res2.json();
        //     console.log(cont2);
        //     return cont2;
        // })();
    }

    render() {
        return (
            <div id="signupForm" className="signupFormDiv">
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