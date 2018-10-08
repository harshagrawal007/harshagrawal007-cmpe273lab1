import React, { Component } from "react";
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
      axios.post("http://localhost:3001/OwnerLogin", data).then(response => {
        console.log("Axios POST response:", response.status);
  
        if (response.status === 200) {
          this.setState({ authFlag: true });
          alert("Invalid credentials")
        } else {
          console.log("Login unsuccessful!");
          this.setState({ authFlag: false });
        }
      });
    };
  render() {
    
    let redirectVar = null;
    let cookieemail=  cookie.load("ownercookie");
    if ((cookie.load("ownercookie")))   {
      console.log(cookieemail);
      redirectVar = <Redirect to="/home" />;
    }

    return (
      <div>
      {redirectVar}
     <Header></Header>


      <div className="owner-login">
        <div className="container">
          <div className="row">
            
            <div >
              <img
                className="banner"
                src="https://csvcus.homeaway.com/rsrcs/stab-cms-resources/0.10.35/images/cas/login-banner-sept16-1.png"
              />
            </div>
            <div className="col">
               <div>
                  <h3>Owner Login</h3>
                  <div className="form-group">
                    <input
                      autoFocus
                     
                     
                      type="email"
                      name="email"
                      className=" form-control"
                      placeholder="Email address"
                    />
                  </div>
                  <div className="form-group">
                    <input
                     
                      
                      type="password"
                      name="psw"
                      className=" form-control"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group">
                    <button
                     
                      type="submit"
                      className="form-control"
                      name="login"
                      onClick={this.handleSubmit}
                    >
                      Log in
              </button>
                  </div>
                  </div>
              
            </div>
            <div className="col">
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default OwnerLogin;
