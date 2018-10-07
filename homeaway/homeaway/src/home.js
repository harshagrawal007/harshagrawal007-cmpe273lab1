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
            <div>

                < body alt="background" background="//csvcus.homeaway.com/rsrcs/stab-cms-resources/0.10.30/images/homepage/jumbotron/ptaHpNextHeroImage/large.jpg" >
                    <div className="bg-img">

                        <div>
                            <Header></Header>
                        </div>

                        <div class="row myseacrhrow">

                            <div class="col">
                            </div>
                            <div class="col-10">
                                <form class="SearchForm checkin-focus">
                                    <div class="row">
                                        <div class="col-3">
                                            <input type="text" name="city" size="10" placeholder="Where do you want to go?" class="control form-control" value=""></input>
                                        </div>
                                        <div class="col-3">
                                            <input type="date" name="arrival" class="form-control " value="" ></input>
                                        </div>
                                        <div class="col-3">
                                            <input type="date" name="departure" class="form-control " value="" ></input>
                                        </div>
                                        <div class="col-2">
                                            <input type="number" name="Guests" placeholder="Guests" class="form-control" value="" ></input>
                                        </div>
                                        <div class="col-1">
                                            <button type="submit" class="SearchForm__button search__button btn btn-primary">Search</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="col">
                            </div>
                        </div>
                    </div>
                </ body>
            </div>
        );

    }
}


export default Home;
