import React from 'react';

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
    }

    render() {
        return (
            <div id="loginForm" className="loginFormDiv" style={{display: "none"}}>
                <form id="formLogin" className="loginFormContent" onSubmit={this.loginSubmit}>
                    <div className="loginFormInput">
                        <label htmlFor="uname"><b>Username</b></label>
                        <input id="uname" type="text" placeholder="Enter Username" name="uname" required />

                        <label htmlFor="passw"><b>Password</b></label>
                        <input id="psw" type="password" placeholder="Enter Password" name="psw" required />
                            
                        <button type="submit">Login</button>
                        <label>
                        <input id="remember" type="checkbox" checked={this.state.remember} onChange={this.handleInputChange} name="remember" /> Remember me
                        </label>
                    </div>
                    {/* Note: Above and Below classNames are both loginFormInput*/}
                    <div className="loginFormInput" style={{backgroundColor: "#f1f1f1"}}>
                        <button type="button" onClick={function() {document.getElementById('loginForm').style.display='none'}} className="cancelbtn2">Cancel</button>
                        <span className="fgPassw">Forgot <a href="?forgotpassword=true">password?</a></span>
                        <span className="loginFormshowPass"><button type="button" onClick={function(){document.getElementById("psw").type==="text" ? document.getElementById("psw").type="password" : document.getElementById("psw").type="text"}}>Show Password</button></span>
                    </div>
                </form>
            </div>
        );
    }
}
