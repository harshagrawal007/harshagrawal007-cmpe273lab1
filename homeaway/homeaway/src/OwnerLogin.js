import React, { createRef, Component } from "react";
import "./App.css";
import { Redirect } from "react-router-dom";
import axios from "axios";
import cookie from "react-cookies";
import Header from "./Header";

class OwnerLogin extends Component {
  constructor(props) {
    //Call the constrictor of Super class i.e The Component
    super(props);
  this.state = {
    email: "",
    password: "",
    emailCheck: false,
    passwordCheck: false,
    authFlag: false
  };

  this.emailChangeHandler = this.emailChangeHandler.bind(this);
  this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
  this.submitLogin = this.submitLogin.bind(this);
  };

  
    emailChangeHandler = e => {
      this.setState({
        email: e.target.value
      });
    };
    //password change handler to update state variable with the text entered by the user
    passwordChangeHandler = e => {
      this.setState({
        password: e.target.value
      });
    };
  
    handleSubmit = e => {
      e.preventDefault();
  
      const data = {
        email: this.state.email,
        password: this.state.password
      };
  
  
      //set the with credentials to true
      axios.defaults.withCredentials = true;
      axios.post("http://localhost:3001/TravelLogin", data).then(response => {
        console.log("Axios POST response:", response.status);
  
        if (response.status === 200) {
          this.setState({ authFlag: true });
        } else {
          console.log("Login unsuccessful!");
          this.setState({ authFlag: false });
        }
      });
    };
  render() {
    

    let redirectVar = null;
    if (cookie.load("cookie")) {
      redirectVar = <Redirect to="/home" />;
    }
    return (
      <div className="owner-login">
        <div className="container">
          <div class="row">
            <div class="col">
            </div>
            <div >
              <img
                className="banner"
                src="https://csvcus.homeaway.com/rsrcs/stab-cms-resources/0.10.35/images/cas/login-banner-sept16-1.png"
              />
            </div>
            <div class="col">
              <div class=" container login-container">
                <div class="panel-body"></div>
                <form>
                  <h3>Owner Login</h3>
                  <div class="form-group">
                    <input
                      autoFocus
                      tabIndex={1}
                      ref={this.emailRef}
                      type="email"
                      name="email"
                      class=" form-control"
                      placeholder="Email address"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      tabIndex={2}
                      ref={this.pswRef}
                      type="password"
                      name="psw"
                      class=" form-control"
                      placeholder="Password"
                    />
                  </div>
                  <div class="form-group">
                    <button
                      tabIndex={3}
                      type="submit"
                      class="form-control"
                      name="login"
                      onClick={this.onSubmit}
                    >
                      Log in
              </button>
                  </div>
                </form>
              </div>
            </div>
            <div class="col">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OwnerLogin;
