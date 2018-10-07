import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import cookie from "react-cookies";
import Header from "./Header";
//import "styles/login.scss";

class TravelerLogin extends Component {

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
  this.handleSubmit = this.handleSubmit.bind(this);
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
    //redirect based on successful login
    let redirectVar = null;
    let cookieemail=  cookie.load("travellercookie");
    if ((cookie.load("travellercookie")))   {
      console.log(cookieemail);
      redirectVar = <Redirect to="/home" />;
    }

    return (
      <div>
        {redirectVar}
        <Header>
        </Header>
        <div class="container signup-container">
          <div class="row">
            <div class="col order-first">
            </div>
            <div class="col">
              <div class="panel-body">
                <h2>Login to HomeAway</h2>
                <p>Need an account? Sign Up</p>
                <form onSubmit={this.handleSubmit}>
                  <h3>Account Login</h3>
                  <div class="form-group">
                    <input
                      autoFocus
                      tabIndex={1}
                      type="email"
                      name="email"
                      placeholder="Email address"
                      className=" form-control"
                      onChange={this.emailChangeHandler}
                    />

                     {this.state.emailCheck ? (
                  <span style={{ color: "red" }}>Cannot login without email</span>
                ) : (
                  ""
                )}
                  </div>
                  <div class="form-group">
                    <input
                      tabIndex={2}
                      type="password"
                      name="password"
                      placeholder="Password"
                      required
                      class=" form-control"
                      onChange={this.passwordChangeHandler}
                    />
                  </div>
                  <div class="form-group">
                    <input tabIndex={3} type="submit" class="form-control" name="login" value="Login" onClick={this.handleSubmit} />
                    {this.state.passwordCheck ? (
                  <span style={{ color: "red" }}>Please enter password</span>
                ) : (
                  ""
                )}
                  </div>
                </form>
              </div>
            </div>
            <div class="col order-last">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TravelerLogin;
