import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import axios from "axios";
import cookie from "react-cookies";
class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            firstnameCheck: false,
            lastnameCheck: false,
            emailCheck: false,
            passwordCheck: false,
            authFlag: false
        };
        this.emailChangeHandler = this.emailChangeHandler.bind(this);
        this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
        this.firstnameChangeHandler = this.emailChangeHandler.bind(this);
        this.lastnameChangeHandler = this.lastnameChangeHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    };

    firstnameChangeHandler = e => {
        this.setState({
            firstname: e.target.value
        });
    };
    //lastname change handler to update state variable with the text entered by the user
    lastnameChangeHandler = e => {
        this.setState({
            lastname: e.target.value
        });
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
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password
        };
        //set the with credentials to true
        axios.defaults.withCredentials = true;
        axios.post("http://localhost:3001/TravellerSignup", data).then(response => {
            console.log("Axios POST response:", response.status);

            if (response.status === 200) {
                this.setState({ authFlag: true });
            } else {
                console.log("Signup unsuccessful!");
                this.setState({ authFlag: false });
            }
        });
    };



    render() {
        return (
            <div>
                <Header></Header>
                <div class="container signup-container">
                    <div class="row">
                        <div class="col order-first">
                        </div>
                        <div class="col">
                            <div class="panel-body">
                                <h2>Sign up for HomeAway</h2>
                                <h4> Already have an account?Log in</h4>
                                <form id="register-form" action="" method="post" role="form" >
                                    <div class="form-group">
                                        <input type="text" required name="firstname" id="firstname" tabindex="1" class="form-control" placeholder="FirstName" />

                                    </div>
                                    <div class="form-group">
                                        <input type="text" required name="lastname" id="lastname" tabindex="2" class="form-control" placeholder="Last Name" />

                                    </div>
                                    <div class="form-group">
                                        <input type="email" required name="email" id="email" tabindex="3" class="form-control" placeholder="Email Address"  />

                                    </div>
                                    <div class="form-group">
                                        <input type="password" required name="password" id="password" tabindex="4" class="form-control" placeholder="Password" />
                                       
                                    </div>
                                    <div class="form-group">
                                        <input type="submit" name="register-submit" id="register-submit" tabindex="5" class="form-control " onClick={this.handleSubmit} value="Sign Up" />
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
export default Signup;