import React, {Component} from 'react';
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import HomePage from "./HomePage";
import EstablishmentPage from "./EstablishmentPage";
import RestaurantPage from "./RestaurantPage";


class App extends Component {

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Route exact path="/" component={HomePage}/>
                        <Route exact path="/establish" component={EstablishmentPage}/>
                        <Route exact path="/restaurant" component={RestaurantPage}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
};



export default App;