import React, { Component } from "react";
import "./App.css";
import "./home.css";

import Header from "./Header";


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            < body alt="background" background="//csvcus.homeaway.com/rsrcs/stab-cms-resources/0.10.30/images/homepage/jumbotron/ptaHpNextHeroImage/large.jpg" >
                <div className="bg-img">

                    <div>
                        <Header></Header>
                    </div>

                    <div className="row myseacrhrow">

                        <div className="col">
                        </div>
                        <div className="col-10">
                            <form className="SearchForm checkin-focus">
                                <div className="row">
                                    <div className="col-3">
                                        <input type="text" name="city" size="10" placeholder="Where do you want to go?" className="control form-control" value=""></input>
                                    </div>
                                    <div className="col-3">
                                        <input type="date" name="arrival" className="form-control " value="" ></input>
                                    </div>
                                    <div className="col-3">
                                        <input type="date" name="departure" className="form-control " value="" ></input>
                                    </div>
                                    <div className="col-2">
                                        <input type="number" name="Guests" placeholder="Guests" className="form-control" value="" ></input>
                                    </div>
                                    <div className="col-1">
                                        <button type="submit" className="SearchForm__button search__button btn btn-primary">Search</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col">
                        </div>
                    </div>
                </div>
            </ body>

        );

    }
}


export default Home;
