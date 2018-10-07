import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Dropzone from "react-dropzone";
import cookie from "react-cookies";
import Header from "./Header";

class AddPropertyDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Country: "",
      Address: "",
      Unit: "",
      City: "",
      State: "",
      Postal: "",
      Headline: "",
      Pdescription: "",
      Ptype: "",
      Bedrooms: "",
      Accomodates: "",
      Bathrooms: "",
      Minimumstay: "",
      Baseprice: "",
      Pernight: ""
    };
    this.countryChangeHandler = this.countryChangeHandler.bind(this);
    this.addressChangeHandler = this.addressChangeHandler.bind(this);
    this.cityChangeHandler = this.cityChangeHandler.bind(this);
    this.stateChangeHandler = this.stateChangeHandler.bind(this);
    this.postalChangeHandler = this.postalChangeHandler.bind(this);
    this.unitChangeHandler = this.unitChangeHandler.bind(this);

    this.pernightChangeHandler = this.pernightChangeHandler.bind(this);
    this.basepriceChangeHandler = this.basepriceChangeHandler.bind(this);
    this.minimumstayChangeHandler = this.minimumstayChangeHandler.bind(this);
    this.bathroomsChangeHandler = this.bathroomsChangeHandler.bind(this);
    this.accomodatesChangeHandler = this.accomodatesChangeHandler.bind(this);
    this.bedroomsChangeHandler = this.bedroomsChangeHandler.bind(this);
    this.ptypeChangeHandler = this.ptypeChangeHandler.bind(this);
    this.pdescriptionChangeHandler = this.pdescriptionChangeHandler.bind(this);
    this.headlineChangeHandler = this.headlineChangeHandler.bind(this);
  }

  bathroomsChangeHandler = e => {
    this.setState({
      Bathrooms: e.target.value
    });
  };

  accomodatesChangeHandler = e => {
    this.setState({
      Accomodates: e.target.value
    });
  };

  pernightChangeHandler = e => {
    this.setState({
      Pernight: e.target.value
    });
  };

  basepriceChangeHandler = e => {
    this.setState({
      Baseprice: e.target.value
    });
  };

  minimumstayChangeHandler = e => {
    this.setState({
      Minimumstay: e.target.value
    });
  };

  bedroomsChangeHandler = e => {
    this.setState({
      Bedrooms: e.target.value
    });
  };

  ptypeChangeHandler = e => {
    this.setState({
      Ptype: e.target.value
    });
  };

  pdescriptionChangeHandler = e => {
    this.setState({
      Pdescription: e.target.value
    });
  };

  headlineChangeHandler = e => {
    this.setState({
      Headline: e.target.value
    });
  };

  countryChangeHandler = e => {
    this.setState({
      Country: e.target.value
    });
  };

  addressChangeHandler = e => {
    this.setState({
      Address: e.target.value
    });
  };
  cityChangeHandler = e => {
    this.setState({
      City: e.target.value
    });
  };
  unitChangeHandler = e => {
    this.setState({
      Unit: e.target.value
    });
  };
  postalChangeHandler = e => {
    this.setState({
      Postal: e.target.value
    });
  };
  stateChangeHandler = e => {
    this.setState({
      State: e.target.value
    });
  };

  handleOnDrop = (files) => {
    console.log("inside handleondrop");
    let file = new FormData();
    file.append("Propertyimages", files[0]);
  
    axios.post("http://localhost:3001/", file).then(result => {
      alert("The file is successfully uploaded");
      console.log("File uploaded successfuly");
    });

    console.log(files);
  };

  submitPropertyInfo = () => {
    const data = {
      Country: this.state.Country,
      Address: this.state.Address,
      Unit: this.state.Unit,
      City: this.state.City,
      State: this.state.State,
      Postal: this.state.Postal,
      Headline: this.state.Headline,
      Pdescription: this.state.Pdescription,
      Ptype: this.state.Ptype,
      Bedrooms: this.state.Bedrooms,
      Accomodates: this.state.Accomodates,
      Bathrooms: this.state.Bathrooms,
      Minimumstay: this.state.Minimumstay,
      Baseprice: this.state.Baseprice,
      Pernight: this.state.Pernight
      
    };

    console.log(data);
    axios.post("http://localhost:3001/AddProperty", data).then(response => {
      console.log("Axios POST response:", response.status);

      if (response.status === 200) {
        console.log("Property  posted!");
        console.log(response);
      } else {
        console.log("Property not posted!");
      }
    });
  };
  render() {
    let redirectVar = null;
   
    if (!(cookie.load("travellercookie") || cookie.load("ownercookie")) ) {
     
      redirectVar = <Redirect to="/home" />;
    }

   
    return (
      <div>
        {redirectVar}
        <Header>
        </Header>

      <div className="owner-container">

        <div className="row">
          <div className="col col-md-1 ">
            <ul className="nav nav-pills nav-stacked">
              <li className="active"  >
                <a data-toggle="tab" href="#location">Location</a>
              </li>
              <li >
                <a data-toggle="tab" href="#details">Details</a>
              </li>
              <li  >
                <a data-toggle="tab" href="#photos"> Photos</a>
              </li>
              <li >
                <a data-toggle="tab" href="#pricing"> Pricing</a>
              </li>

            </ul>
          </div>
          <div className="col">
            <div class="container">
              <div className="tab-content">
                <div id="location" className="tab-pane fade in active">
                  <div className="panel-body">
                    <h2>Location</h2>
                    <form className="location-form">
                      <div className="form-group">
                        <label>Country</label>
                        <input id="country" type="text" value={this.state.Country} onChange={this.countryChangeHandler} className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>Street Address</label>
                        <input id="address" type="text" value={this.state.Address} onChange={this.addressChangeHandler} className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>Unit, Suite, Building, Etc.</label>
                        <input id="unit" type="text" value={this.state.Unit} onChange={this.unitChangeHandler} className="form-control" />
                      </div>

                      <div className="form-group">
                        <label>City</label>
                        <input id="city" type="text" value={this.state.City} onChange={this.cityChangeHandler} className="form-control" />
                      </div>

                      <div className="form-group">
                        <label>State</label>
                        <input id="state" type="text" value={this.state.State} onChange={this.stateChangeHandler} className="form-control" />
                      </div>

                      <div className="form-group">
                        <label>Postal Code</label>
                        <input id="postal" type="text" value={this.state.Postal} onChange={this.postalChangeHandler} className="form-control" />
                      </div>
                    </form>
                  </div>
                </div>

                <div id="details" className="tab-pane fade">
                  <div className="panel panel-default">
                    <div className="panel-body">
                      <h2>Describe your property</h2>
                      <hr />
                      <form className="details-form">
                        <div className="form-group">
                          <label>Headline</label>
                          <input id="headline" type="text" value={this.state.Headline} onChange={this.headlineChangeHandler} className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>Property description</label>
                          <input id="pdescription" value={this.state.Pdescription} onChange={this.pdescriptionChangeHandler} type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>Property type</label>
                          <input id="ptype" value={this.state.Ptype} onChange={this.ptypeChangeHandler} type="text" className="form-control" />
                        </div>

                        <div className="form-group">
                          <label>Bedrooms</label>
                          <input id="bedrooms" value={this.state.Bedrooms} onChange={this.bedroomsChangeHandler} type="text" className="form-control" />
                        </div>

                        <div className="form-group">
                          <label>Accomodates</label>
                          <input id="accomodates" value={this.state.Accomodates} onChange={this.accomodatesChangeHandler} type="text" className="form-control" />
                        </div>

                        <div className="form-group">
                          <label>Bathrooms</label>
                          <input id="bathrooms" value={this.state.Bathrooms} onChange={this.BathroomsChangeHandler} type="text" className="form-control" />
                        </div>

                      </form>
                    </div>
                  </div>
                </div>
                <div id="pricing" className="tab-pane fade">
                  <div className="panel panel-default">
                    <div className="panel-body">
                      <h2>Pricing</h2>
                      <form className="details-form">
                        <div className="form-group">
                          <label>Minimum Stay</label>
                          <input id="headline" value={this.state.Minimumstay} onChange={this.minimumstayChangeHandler} type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>Base Price</label>
                          <input id="pdescription" value={this.state.Baseprice} onChange={this.basepriceChangeHandler} type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>Per Night</label>
                          <input id="ptype" type="text" value={this.state.Pernight} onChange={this.pernightChangeHandler} className="form-control" />
                        </div>
                        <hr />
                        <button className="btn btn-primary">Cancel</button>
                        <button className="btn btn-primary" onClick={this.submitPropertyInfo}>Save</button>
                      </form>
                    </div>
                  </div>
                </div>
                <div id="photos" className="tab-pane fade">
                  <div className="layout">
                    <div className="panel panel-default">
                      <h2>Add up to 50 photos of your property</h2>
                      <hr />
                      <div>
                        <Dropzone onDrop={this.handleOnDrop}>
                          Drop your images here
                        </Dropzone>
                        Showcase your property’s best features (no pets or people, please).
                        Requirements: JPEG, at least 1920 x 1080 pixels, less than 20MB file
                        size, 6 photos minimum.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div >
      </div >
      </div>
    );
  }
}

export default AddPropertyDetails;