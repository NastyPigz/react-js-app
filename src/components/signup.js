import React from 'react';

export class SignUpDiv extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            remember: true
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.signupSubmit = this.signupSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
    }

    signupSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div id="signupForm" className="signupFormDiv" style={{display:"none"}}>
                <form className="signupFormContent" onSubmit={this.signupSubmit}>
                    <div className="signupFormInput">
                        <h1>To sign up please fill in the information below.</h1>
                        <hr />
                        <label htmlFor="email"><b>Email</b></label>
                        <input id="usname" type="text" placeholder="Enter your Email" name="email" required />

                        <label htmlFor="psw"><b>Password</b></label>
                        <input id="pswd" type="password" placeholder="Enter your desired Password" name="psw" required />

                        <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                        <input id="pswdr" type="password" placeholder="Repeat Password" name="psw-repeat" required />
                        
                        <label>
                            <input id="remember" type="checkbox" checked={this.state.remember} onChange={this.handleInputChange} name="remember" style={{marginBottom: "15px"}} /> Remember me
                        </label>

                        <p>By creating an account you agree to our <a href="tos" style={{color:"dodgerblue"}}>Terms of Service</a>.</p>

                        <div class="clearfix">
                            <button type="button" onclick={function() {document.getElementById('signupForm').style.display='none'}} className="cancelbtn">Cancel</button>
                            <button type="submit" className="signupbtn">Sign Up</button>
                            {/* Complete signup */}
                        </div>
                    </div>
                </form>
                </div>
        );
    }
}