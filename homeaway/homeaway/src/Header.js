import React, { Component } from "react";
import { Link } from "react-router-dom";
import cookie from "react-cookies";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import "./styles/header.scss";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false
    };
  }
  // onClickLogin = option => {
  //   this.props.onClick(option.value);
  // };

  handleLogout = () => {
    cookie.remove("travellercookie", { path: "/" });
    cookie.remove("ownercookie", { path: "/" });


  };




  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  };
  render() {
    let temp = null;
    if (cookie.load("travellercookie")) {
      temp = (
        <Dropdown className="header-menu"
          isOpen={this.state.dropdownOpen}
          toggle={() => this.toggle()} >
          <DropdownToggle caret>
            {cookie.load("travellercookie")}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem >
              {/* <Link to="/Myprofile">Profile</Link> */}
              profile
            </DropdownItem>
            <DropdownItem>
              {/* <Link to="/Tripboards">Mytrips</Link> */}
              mytrips
            </DropdownItem>
            <DropdownItem href="/home" onClick={this.handleLogout}>
              Logout
</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      );
    }
    else if (cookie.load("ownercookie")) {
      temp = (
        <Dropdown className="header-menu"
          isOpen={this.state.dropdownOpen}
          toggle={() => this.toggle()} >
          <DropdownToggle caret>
            {cookie.load("ownercookie")}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem >
              {/* <Link to="/Myprofile">Profile</Link>         */}
              profile
              </DropdownItem>
            <DropdownItem>
              {/* <Link to="/MyProperties">Myproperties</Link> */}
              myproperties
            </DropdownItem>
            <DropdownItem href="/home" onClick={this.handleLogout}>
              Logout
</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      );
    }
    else {
      temp = (
        <Dropdown
          className="header-menu"
          isOpen={this.state.dropdownOpen}
          toggle={() => this.toggle()}
        >
          <DropdownToggle caret>Login</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>
              <Link to="/TravelerLogin">Traveler Login</Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/OwnerLogin">Owner Login</Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      );

    }

    return (
      <div>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                {/* <div className="header"> */}
                <Link className="logo" to="/home">
                  <img
                    src="https://csvcus.homeaway.com/rsrcs/cdn-logos/2.10.6/bce/moniker/homeaway_us/logo-bceheader.svg"
                  />
                </Link>
                {/* </div> */}
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li> {temp}</li>
                <li>
                  <Link to="/AddpropertyDetails">
                    <button type="button" className="lyp">
                      List your Property
        </button></Link>
                </li>
                <li><img
                  className="logo-image"
                  src="https://csvcus.homeaway.com/rsrcs/cdn-logos/2.10.6/bce/moniker/homeaway_us/birdhouse-bceheader.svg"
                  alt="logo"
                  title="logo"
                /></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
