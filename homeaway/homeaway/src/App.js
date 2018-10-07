import React, { Component } from "react";
import { Route } from "react-router-dom";
import TravelerLogin from "./TravelerLogin";
import Signup from "./Signup";
import Home from "./home";
import OwnerLogin from "./OwnerLogin";
import Tripboards from "./Tripboards";
//import OwnerDashboard from "./OwnerDashboard";
import AddPropertyDetails from "./AddPropertyDetails";

import "./App.css";

class App extends Component {

  render() {

    return (
      //Use Browser Router to route to different pages
      <div>
        <Route path="/home" component={Home} />
        <Route path="/Signup" component={Signup} />
        <Route path="/TravelerLogin" component={TravelerLogin} />
        <Route path="/AddPropertyDetails" component={AddPropertyDetails} />
        <Route path="/Tripboards" component={Tripboards} />
        <Route path="/OwnerLogin" component={OwnerLogin} />
        {/*<Route path="/OwnerDashboard" component={OwnerDashboard} />*/}
      </div>
    );
  }
}

export default App;
